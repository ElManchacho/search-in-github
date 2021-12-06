import { Router } from "express";

const api = Router();

api.get("/:username", (request, response) => {
  const { username } = request.params;

  response.json({
    data: { username },
  });
});

export default api;
