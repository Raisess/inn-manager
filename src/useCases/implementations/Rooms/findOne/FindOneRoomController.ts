import { IController, ErrorResponse } from "../../../IController";
import { FindOneRoomUseCase } from "./FindOneRoomUseCase";

import { Room } from "../../../../entities/Room";

import { Request, Response } from "express";

export class FindOneRoomController
  implements IController<Room | ErrorResponse>
{
  constructor(private readonly useCase: FindOneRoomUseCase) {}

  public async handle(
    req: Request,
    res: Response,
  ): Promise<Response<Room | ErrorResponse>> {
    try {
      const room: Room = await this.useCase.execute(req.params.id);

      return res.json(room);
    } catch (err) {
      return res.status(404).json({
        message: err.message,
      });
    }
  }
}
