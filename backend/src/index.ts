import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { recommendedMovies } from "./routes/recomended.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use("/api/recomended", recommendedMovies);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port: http://localhost:${PORT}`);
});
