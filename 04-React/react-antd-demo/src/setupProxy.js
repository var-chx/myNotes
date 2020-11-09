const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v1',
    createProxyMiddleware({
      target: 'http://tingapi.ting.baidu.com/',
      changeOrigin: true,
    })
  );
  app.use(
    '/index',
    createProxyMiddleware({
      target: 'http://localhost:3100/',
      changeOrigin: true,
    })
  );
};