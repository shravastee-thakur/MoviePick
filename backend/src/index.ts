import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port: http://localhost:${PORT}`);
});
