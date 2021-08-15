import { FindOneRoomUseCase } from "./FindOneRoomUseCase";
import { FindOneRoomController } from "./FindOneRoomController";

import { localStorageRoomRepository } from "../../../../repositories/Rooms/implementations/LocalStorageRoomRepository";

const useCase: FindOneRoomUseCase = new FindOneRoomUseCase(
  localStorageRoomRepository,
);

export const findOneRoomController: FindOneRoomController =
  new FindOneRoomController(useCase);
