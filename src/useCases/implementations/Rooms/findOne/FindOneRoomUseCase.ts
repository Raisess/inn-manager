import { IUseCase } from "../../../IUseCase";
import { IRoomRepository } from "../../../../repositories/Rooms/IRoomRepository";

import { Room } from "../../../../entities/Room";

export class FindOneRoomUseCase implements IUseCase<Room> {
  constructor(private readonly repository: IRoomRepository) {}

  public async execute(id: string): Promise<Room> {
    const room: Room = await this.repository.findOne(id);

    if (!room) {
      throw new Error("Room not found");
    }

    return room;
  }
}
