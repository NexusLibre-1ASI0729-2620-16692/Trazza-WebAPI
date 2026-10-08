const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const rewriter = jsonServer.rewriter(require('./routes.json'));
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(rewriter);
server.use(router);

server.listen(port, () => {
    console.log(`Trazza Mock API running on http://localhost:${port}/api/v1`);
});
