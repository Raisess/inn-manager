import { FindAllRoomsUseCase } from "./FindAllRoomsUseCase";
import { FindAllRoomsController } from "./FindAllRoomsController";

import { localStorageRoomRepository } from "../../../../repositories/Rooms/implementations/LocalStorageRoomRepository";

const useCase: FindAllRoomsUseCase = new FindAllRoomsUseCase(
  localStorageRoomRepository,
);

export const findAllRoomsController: FindAllRoomsController =
  new FindAllRoomsController(useCase);
