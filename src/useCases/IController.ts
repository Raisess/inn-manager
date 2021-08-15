import { Request, Response } from "express";

export type ErrorResponse = {
  message: string;
};

export interface IController<T> {
  handle(req: Request, res: Response): Promise<Response<T>>;
}
