import { CreateRoomUseCase } from "./CreateRoomUseCase";
import { CreateRoomController } from "./CreateRoomController";

import { LocalStorageRepository } from "../../../../repositories/Rooms/implementations/LocalStorageRepository";

const repository: LocalStorageRepository = new LocalStorageRepository();
const useCase: CreateRoomUseCase = new CreateRoomUseCase(repository);

export const createRoomController: CreateRoomController =
  new CreateRoomController(useCase);
