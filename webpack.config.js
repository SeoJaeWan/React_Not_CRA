const path = require(`path`); // 절대 경로를 참조하기 위해 사용

const HtmlWebpackPlugin = require("html-webpack-plugin"); // Webpack에서 Html을 다루기위한 플러그인

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    "js/app": ["./src/App.jsx"],
  },
  // 번들 파일로 만들기 위한 시작 파일(entry)을 설정하였다.
  // 생성될 번들 파일은 js 폴더 하위에 app.js라는 이름으로 생성되며, ./src/App.jsx를 시작으로 번들링(하나로 합치기)합니다.

  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
  },
  // 생성된 번들 파일은 ./dist/ 폴더에 생성된다.
  // publicPath를 지정함으로 HTML 등 다른 파일에서 생성된 번들을 참조할 때, /를 기준으로 참조한다.

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              fallback: "file-loader",
              name: "images/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              fallback: "file-loader",
              name: "fonts/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  // React 파일인 jsx와 js는 babel(바벨)을 이용해 빌드한다.

  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  // ./src/index.html 파일을 dist 경로에 index.html 파일로 생성한다.
  // 파일을 생성할 때, Webpack이 만든 번들 파일(/js/app.js)를 HTML에 추가하여 생성한다.

  devServer: {
    contentBase: "./dist",
    port: 3000,
    historyApiFallback: true,
  },
};
