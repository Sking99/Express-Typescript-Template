import winston from "winston";
import { getCorrelationId } from "../utils/helpers/request.helpers";
import DailyRotateFile from "winston-daily-rotate-file";

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
        winston.format.json(),
        winston.format.printf(({ timestamp, level, message, ...data }) => {
            const obj = {
                timestamp, 
                level, 
                message, 
                correlationId: getCorrelationId(),
                data
            };
            return JSON.stringify(obj);
        })
    ),
    transports: [
        // new winston.transports.Console()
        // new winston.transports.File({ filename: 'logs/error.log'}),
        new DailyRotateFile({
            filename: 'logs/%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            maxSize: '20m',
            maxFiles: '14d'
        })
    ]
});

export default logger;