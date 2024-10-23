const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // مسار ملف JSON
const middlewares = jsonServer.defaults();

// استخدام الميدلوير (middlewares)
server.use(middlewares);
// استخدام الراوتر
server.use(router);

// تشغيل السيرفر على المنفذ 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
