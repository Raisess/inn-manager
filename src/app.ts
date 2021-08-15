import "dotenv/config";
import { Server } from "./Server";

import { roomRouter } from "./routers/roomRouter";

const app: Server = new Server([roomRouter]);

app.listen(Number(process.env.PORT!));
