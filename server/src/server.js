import express from "express";
import cors from "cors";
import routes from "./routes";

export function launch(port) {
  const application = express();

  application.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    }
    next();
  });

  application.use("/", routes);

  application.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
  });
}
