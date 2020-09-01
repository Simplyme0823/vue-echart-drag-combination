/** @format */

function run(gen) {
  const task = gen();
  let value = task.next();
  function step() {
    if (value.done) return;
    Promise.resolve(value)
      .then(res => {
        value = task.next(res);
        step();
      })
      .catch(err => {
        value = task.throw(err);
        step();
      });
  }
  step();
}
