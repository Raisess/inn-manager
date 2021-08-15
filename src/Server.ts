import express, { Application, Router } from "express";
import cors from "cors";

export class Server {
  private app: Application = express();

  constructor(routers: Router[]) {
    this.app.use(cors());
    this.app.use(express.json());

    routers.forEach((router) => this.app.use(router));
  }

  public listen(port: number): void {
    this.app.listen(port, () => console.log("Running on port:", port));
  }
}
