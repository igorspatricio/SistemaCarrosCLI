const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
  // Adiciona o proxy para a produção
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map',
    output: {
      crossOriginLoading: 'anonymous'
    },
    devServer: {
      proxy: {
        '^/api': {
          target: 'https://sistemacarrros.onrender.com',
          changeOrigin: true,
          logLevel: 'debug',
          pathRewrite: { '^/api': '/' },
        },
      },
    },
  },
}
