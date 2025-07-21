import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";
import logger from "../config/logger.config";

export const validateRequestBody = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try{
        logger.info("Validating request body");
        await schema.parseAsync(req.body);
        logger.info("Request body is valid");
        next();
    }catch (error) {
        res.status(400).json({
            messsage: "Invalid request body",
            success: false,
            error: error
        });
    }
  };
}

export const validateQueryParams = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try{
        await schema.parseAsync(req.query);
        console.log("Query params are valid");
        next();
    }catch (error) {
        res.status(400).json({
            messsage: "Invalid query parameters",
            success: false,
            error: error
        });
    }
  };
}