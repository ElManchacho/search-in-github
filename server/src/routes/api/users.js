import { Router } from "express";
import { variables } from '../../../variables.json'

const api = Router();

let userData = "";

api.get("/:username", (request, response) => {
  const { username } = request.params;
  response.json({
    data: { username },
  });
});

api.post("/:username/post", (request, response) => {
  const { username } = request.params;

  response.json({
    data: { username },
  });
})

export default api;
