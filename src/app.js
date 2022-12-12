import express from "express";
import cors from "cors";
const app = express();
///////////////////
import fileRouter from "./routes/file.route.js";
//////////////////////////
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//////////////////////////
app.use("/json_file", fileRouter);
/////////////////////////
export default app;
