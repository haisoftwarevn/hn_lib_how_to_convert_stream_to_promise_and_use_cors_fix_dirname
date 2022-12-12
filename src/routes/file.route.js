import express from "express";
const fileRouter = express.Router();

import hn_file_get_controller from "../controllers/file.get.controller.js";
fileRouter.get("/", hn_file_get_controller);

export default fileRouter;
