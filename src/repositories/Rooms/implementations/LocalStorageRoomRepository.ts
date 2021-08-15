import { IRoomRepository } from "../IRoomRepository";
import { Room } from "../../../entities/Room";

export class LocalStorageRoomRepository implements IRoomRepository {
  private rooms: Room[] = [];

  public async save(data: Room): Promise<void> {
    this.rooms.push(data);
  }

  public async findOne(id: string): Promise<Room> {
    return this.rooms.find((room) => room.id === id) as Room;
  }

  public async findMany(): Promise<Room[]> {
    return this.rooms;
  }

  public async findByName(name: string): Promise<Room> {
    return (await this.findMany()).find(
      (room) => room.name.toLowerCase() === name.toLowerCase(),
    ) as Room;
  }

  public async update(id: string, data: Room): Promise<void> {
    const roomIndex: number = this.rooms.findIndex((room) => room.id === id);

    this.rooms[roomIndex] = data;
  }

  public async delete(id: string): Promise<void> {
    this.rooms = this.rooms.filter((room) => room.id !== id);
  }
}
