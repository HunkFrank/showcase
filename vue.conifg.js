var path = require('path')
module.exports = {
  publicPath: '/showcase/',
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src')
      }
    }
  },
}