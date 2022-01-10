# webpack-config
## How to reun
``
1. npm start / npm run start (run localhost:8080)
``
## Note
``
.gitignore
node_modules

"start": "webpack serve",
"watch": "webpack --watch",
"build": "webpack"


webpack.config.js

npm i -D babel-loader @babel/core @babel/preset-env

babel.config.js

npm i -D css-loader mini-css-extract-plugin
npm i -D sass sass-loader
npm i -D postcss postcss-preset-env postcss-loader
npm i react react-dom
npm i -D @babel/preset-react
npm i -D html-webpack-plugin
npm i -D html-webpack-plugin@next
npm i -D clean-webpack-plugin
npm i -D @pmmmwh/react-refresh-webpack-plugin react-refresh

postcss.config.js
/\.(s[ac]|c)ss$/i

CleanWebpackPlugin()
ReactRefreshWebpackPlugin
``
## documentaion
``
1. https://www.youtube.com/watch?v=TOb1c39m64A
``