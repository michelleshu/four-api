const fs = require("fs");
const { Sequelize } = require("sequelize");

exports.sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  username: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
      ca: fs.readFileSync("src/config/ca-certificate.crt"),
    },
  },
});
