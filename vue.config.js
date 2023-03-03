
module.exports = {
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
}