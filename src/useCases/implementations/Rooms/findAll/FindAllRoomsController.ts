import { IController } from "../../../IController";
import { FindAllRoomsUseCase } from "./FindAllRoomsUseCase";

import { Room } from "../../../../entities/Room";

import { Request, Response } from "express";

export class FindAllRoomsController implements IController<Room[]> {
  constructor(private readonly useCase: FindAllRoomsUseCase) {}

  public async handle(_req: Request, res: Response): Promise<Response<Room[]>> {
    const rooms: Room[] = await this.useCase.execute();

    return res.json(rooms);
  }
}
