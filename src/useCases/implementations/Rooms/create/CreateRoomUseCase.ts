import { IUseCase } from "../../../IUseCase";
import { IRoomRepository } from "../../../../repositories/Rooms/IRoomRepository";

import { Room } from "../../../../entities/Room";

export class CreateRoomUseCase implements IUseCase<void> {
  constructor(private readonly repository: IRoomRepository) {}

  public async execute(data: Room): Promise<void> {
    const alreadyExists: boolean = !!(await this.repository.findByName(
      data.name,
    ));

    if (alreadyExists) {
      throw new Error("Room already exists");
    }

    const room: Room = new Room(data);

    await this.repository.save(room);
  }
}
