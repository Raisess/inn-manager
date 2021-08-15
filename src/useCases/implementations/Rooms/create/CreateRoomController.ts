import { IController, ErrorResponse } from "../../../IController";
import { CreateRoomUseCase } from "./CreateRoomUseCase";

import { Request, Response } from "express";

export class CreateRoomController implements IController<void> {
  constructor(private readonly useCase: CreateRoomUseCase) {}

  public async handle(
    req: Request,
    res: Response,
  ): Promise<Response<void | ErrorResponse>> {
    try {
      await this.useCase.execute(req.body);

      return res.status(201).send();
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }
}
