module.exports = {
    mode: 'development',
    entry: "./index.js",
    devServer: {
      contentBase: `${__dirname}/dist`,
      compress: true,
      port: 9000
    },
    module: {
        rules: [
            { test: /\.html$/, use: [ "html-loader" ] },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },  
  };