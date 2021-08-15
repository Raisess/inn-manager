import { CreateRoomUseCase } from "./CreateRoomUseCase";
import { CreateRoomController } from "./CreateRoomController";

import { LocalStorageRoomRepository } from "../../../../repositories/Rooms/implementations/LocalStorageRoomRepository";

const repository: LocalStorageRoomRepository = new LocalStorageRoomRepository();
const useCase: CreateRoomUseCase = new CreateRoomUseCase(repository);

export const createRoomController: CreateRoomController =
  new CreateRoomController(useCase);
