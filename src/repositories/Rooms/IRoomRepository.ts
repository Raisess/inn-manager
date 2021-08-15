import { Room } from "../../entities/Room";

export interface IRoomRepository {
  save(room: Room): Promise<void>;
  findOne(id: string): Promise<Room>;
  findMany(): Promise<Room[]>;
  findByName(name: string): Promise<Room>;
  update(id: string, data: Room): Promise<void>;
  delete(id: string): Promise<void>;
}
