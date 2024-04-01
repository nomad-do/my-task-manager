const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file');
const path = require('path');
const process = require('process');

const { combine, timestamp, label, printf } = winston.format;

const logDir = `${process.cwd()}/logs`;

// Enhanced log format to include meta information if available
const logFormat = printf((info) => {
  let message = `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
  message += Object.keys(info).reduce((acc, key) => {
    if (['timestamp', 'label', 'level', 'message'].includes(key)) {
      return acc;
    }
    return `${acc} ${key}: ${JSON.stringify(info[key])}`;
  }, '');
  return message;
});

const logger = winston.createLogger({
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    label({ label: 'my-first-project' }),
    logFormat,
  ),
  transports: [
    new winstonDaily({
      level: 'info',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir,
      filename: `%DATE%.log`,
      maxFiles: 30,
      zippedArchive: true,
    }),
    new winstonDaily({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/error',
      filename: `%DATE%.error.log`,
      maxFiles: 30,
      zippedArchive: true,
    }),
  ],
  exceptionHandlers: [
    new winstonDaily({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir,
      filename: `%DATE%.exception.log`,
      maxFiles: 30,
      zippedArchive: true,
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
  );
}

module.exports = logger;