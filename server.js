const http = require("http");

const app = require("./app");

const port = process.env.PORT || 5001;
const host = process.env.HOST || "localhost";

const server = http.createServer(app);
server.listen(port, () => console.log(`\n Server started on http://${host}:${port}`));