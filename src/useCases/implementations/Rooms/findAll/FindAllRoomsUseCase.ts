import { IUseCase } from "../../../IUseCase";
import { IRoomRepository } from "../../../../repositories/Rooms/IRoomRepository";

import { Room } from "../../../../entities/Room";

export class FindAllRoomsUseCase implements IUseCase<Room[]> {
  constructor(private readonly repository: IRoomRepository) {}

  public async execute(): Promise<Room[]> {
    return this.repository.findMany();
  }
}
