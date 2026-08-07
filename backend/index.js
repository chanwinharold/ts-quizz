require("dotenv").config();
const http = require("http");
const app = require("./app");
const { PORT, HOST } = require("./core/config");

const server = http.createServer(app);

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});
