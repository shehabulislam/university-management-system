import { createLogger, format, transports } from 'winston'
import path from 'path'
import 'winston-daily-rotate-file'

const { combine, timestamp, label, printf } = format
// custom log format
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${formatDate(timestamp)} [${label}] ${level}: ${message}`
})

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'ph' }),
    timestamp(),
    myFormat
    // prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new transports.DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        'ph-%DATE%.log'
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
    // new transports.File({ filename: 'combined.log', level: 'info' }),
  ],
})

const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'ph' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new transports.DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'phu-%DATE%.log'
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
    // new transports.File({ filename: 'error.log', level: 'error' }),
    // new transports.File({ filename: 'combined.log', level: 'info' }),
  ],
})

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.simple(),
    })
  )
}

export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp)
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return `${date.toDateString()} ${hour}:${minutes}:${seconds}`
}

export { logger, errorLogger }
