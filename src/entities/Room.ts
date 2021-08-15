import { v4 as uuid } from "uuid";

export class Room {
  public name: string = "";

  constructor(data: Omit<Room, "id">, public readonly id: string = uuid()) {
    Object.assign(this, data);
  }
}
