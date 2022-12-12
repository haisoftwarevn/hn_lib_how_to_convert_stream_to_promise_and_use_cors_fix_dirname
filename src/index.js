import http from "http";
import app from "./app.js";

import { loadPlanetsData } from "./models/file.models.js";

const server = http.createServer(app);

const loadDataFromStart = async () => {
  await loadPlanetsData();

  server.listen(5000, () => {
    console.log("The server is running on port 5000");
  });
};

loadDataFromStart();
