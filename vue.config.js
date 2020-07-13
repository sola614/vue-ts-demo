module.exports = {
  // css: {
  //   loaderOptions: {
  //     less: {
  //       javascriptEnabled: true
  //     }
  //   }
  // },
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
      }]
    },
  }

}