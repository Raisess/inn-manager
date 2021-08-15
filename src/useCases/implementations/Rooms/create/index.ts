import { CreateRoomUseCase } from "./CreateRoomUseCase";
import { CreateRoomController } from "./CreateRoomController";

import { localStorageRoomRepository } from "../../../../repositories/Rooms/implementations/LocalStorageRoomRepository";

const useCase: CreateRoomUseCase = new CreateRoomUseCase(
  localStorageRoomRepository,
);

export const createRoomController: CreateRoomController =
  new CreateRoomController(useCase);
