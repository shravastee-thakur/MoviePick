import { Router } from "express";
import { recommendedMovies } from "../controllers/recomended.controller.js";

const router = Router();

router.post("/", recommendedMovies);

export { router as recommendedMovies };
