import { habitablePlanets } from "../models/file.models.js";

const hn_file_get_controller = (req, res) => {
  return res.status(200).json(habitablePlanets);
};

export default hn_file_get_controller;
