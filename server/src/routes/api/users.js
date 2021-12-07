import { Router } from "express";
import { variables } from '../../../variables.json'

const api = Router();

let userData = "";

api.get("/:username", (request, response) => {
  const { username } = request.params;
  console.log(userData)
  response.json({
    data: { username },
  });
});

export default api;
