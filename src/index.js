require("dotenv").config({ path: "src/config/development.env" });

const http = require("http");
const app = require("./app");
const { sequelize } = require("./db/sequelize");

async function init() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

const port = parseInt(process.env.API_PORT, 10) || 8000;
app.set("port", port);

const server = http.createServer(app);
server.listen(port);
