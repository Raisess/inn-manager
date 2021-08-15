import "dotenv/config";
import { Server } from "./Server";

const app: Server = new Server([]);

app.listen(Number(process.env.PORT!));
