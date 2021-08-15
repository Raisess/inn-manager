import { Router } from "express";

import { createRoomController } from "../useCases/implementations/Rooms/create";

export const roomRouter: Router = Router();

roomRouter.post("/rooms", (req, res) => createRoomController.handle(req, res));
