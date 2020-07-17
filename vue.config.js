const path = require("path");
module.exports = {
  configureWebpack: {
    module: {
      rules: [{
        test: /\.less$/,
        use: [{
          loader: 'less-loader',
          options: {
            lessOptions: {
              // strictMath: true,
              javascriptEnabled: true
            },
          }
        }]
      }],

    },
    resolve: {
      // extensions: ['*', '.js', '.vue', '.ts'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.join(__dirname, 'src'))
  // }

}