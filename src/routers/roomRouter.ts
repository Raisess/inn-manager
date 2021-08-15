import { Router } from "express";

import { createRoomController } from "../useCases/implementations/Rooms/create";
import { findAllRoomsController } from "../useCases/implementations/Rooms/findAll";

export const roomRouter: Router = Router();

roomRouter.post("/rooms", (req, res) => createRoomController.handle(req, res));
roomRouter.get("/rooms", (req, res) => findAllRoomsController.handle(req, res));
