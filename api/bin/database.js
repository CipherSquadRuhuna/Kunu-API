const { Sequelize } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT,
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = { sequelize, connectToDatabase };
