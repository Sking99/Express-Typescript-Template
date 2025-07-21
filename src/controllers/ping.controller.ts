import { NextFunction, Request, Response } from "express";
import fs from 'fs/promises'; // Using promises API for better async handling
import { FileNotFoundError } from "../utils/errors/app.error";

export const pingHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  
  try{
    await fs.readFile('sample');
    res.status(200).json({
      message: "Pong",
      success: true
    });
  }catch (error) {
    throw new FileNotFoundError('sample file not found');
  }
  
  
}