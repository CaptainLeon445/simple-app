const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new DailyRotateFile({
      filename: "logs/info/info-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      level: "info",
    }), 
    new DailyRotateFile({
      filename: "logs/error/error-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      level: "error",
    }),
  ],
});

module.exports = logger;
