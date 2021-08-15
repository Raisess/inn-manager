import { IUseCase } from "../../../IUseCase";
import { IRoomRepository } from "../../../../repositories/Rooms/IRoomRepository";

import { Room } from "../../../../entities/Room";

export class CreateRoomUseCase implements IUseCase<void> {
  constructor(private readonly repository: IRoomRepository) {}

  public async execute(data: Room): Promise<void> {
    const alreadyExists: boolean = !!(await this.repository.findMany()).find(
      (room) => room.name.toLowerCase() === data.name.toLowerCase(),
    );

    if (alreadyExists) {
      throw new Error("Room already exists");
    }

    await this.repository.save(data);
  }
}
