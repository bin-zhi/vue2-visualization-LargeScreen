const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  chainWebpack: (config) => {
    config.resolve.alias.set('_c', resolve('src/components')) //自定义引入路径名称
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.join(__dirname, './src/assets/scss/color.scss')],
    },
  },
}
