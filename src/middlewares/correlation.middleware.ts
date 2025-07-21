import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { asyncLocalStorage } from "../utils/helpers/request.helpers";

export const addCorrelationIdMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const correlationId = uuidv4();

    asyncLocalStorage.run({ correlationId: correlationId }, () => {
        next();
    });

    
}