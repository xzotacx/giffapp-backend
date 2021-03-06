import config from "./config.js";
import express from "express";
import bodyParse from "body-parser";
import userRouter from "./routes/userRouter.js";
import "./models/_conn.js";
import cors from "cors";

const { server } = config;
// Init
const app = express();
// Settings
app.set("PORT", server.PORT);
// Midlewares
app.use(bodyParse.json()).use(bodyParse.urlencoded({ extended: true }));
app.use(cors());
// Routers
app.get("/", (req, res) => {
  res.send("Api Rest Started endpoint /api");
});
app.use("/api", userRouter);

// Export
export { app };
