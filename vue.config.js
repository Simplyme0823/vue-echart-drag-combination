/** @format */

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          rules: [
            {
              test: /\.s[ac]ss$/i,
              loaders: ["style-loader", "css-loader", "sass-loader"],
            },
          ],
        },
      },
    },
  },
};
