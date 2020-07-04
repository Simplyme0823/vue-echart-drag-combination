export function menu(arr) {
  return arr.reduce((prev, cur) => {
    if (cur.path != "") {
      const key = {};
      key.name = cur.name;
      key.CNname = cur.meta.name;
      if (cur.children) {
        const children = menu(cur.children);
        key.children = children;
      }
      prev.push(key);
    }
    return prev;
  }, []);
}
