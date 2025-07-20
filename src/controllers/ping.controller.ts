import { Request, Response } from "express";

export const pingHandler = (req: Request, res: Response) => {
  console.log(req.body);
  res.send('Pong');
}