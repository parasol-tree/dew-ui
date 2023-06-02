'use strict'

const chalk = require('chalk')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

module.exports = {
  filenameHashing: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/dew-ui/' : '/', // 项目没有部署在 网站根目录下, 好烦
  productionSourceMap: false,
  css: {
    extract: process.env.NODE_ENV === 'production', // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中
    sourceMap: process.env.NODE_ENV === 'development' // development 环境 显示 cssSourceMap
  },
  chainWebpack (config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')
    config.when(process.env.NODE_ENV !== 'development', config => {
      config.devtool('none')
      config.plugin('ProgressBarPlugin')
        .use(ProgressBarPlugin, [
          {
            format: ' build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
            clear: false
          }
        ])
      config.optimization.runtimeChunk('single').end()
    }, config => {
      config.devtool('source-map')
    })
  },
  devServer: {
    compress: false,
    overlay: {
      warnings: process.env.NODE_ENV === 'development',
      errors: process.env.NODE_ENV === 'development'
    },
    hot: true,
    hotOnly: true
  }
}
