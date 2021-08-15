import { IUseCase } from "../../../IUseCase";
import { IRoomRepository } from "../../../../repositories/Rooms/IRoomRepository";

import { Room } from "../../../../entities/Room";

export class CreateRoomUseCase implements IUseCase<void> {
  constructor(private readonly repository: IRoomRepository) {}

  public async execute(room: Room): Promise<void> {
    await this.repository.save(room);
  }
}
