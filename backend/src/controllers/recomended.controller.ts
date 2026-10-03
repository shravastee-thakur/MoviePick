import { Request, Response } from "express";
import { getStructuredRecommendations } from "../services/langchain.service.js";

export const recommendedMovies = async (req: Request, res: Response) => {
  try {
    const {
      userPrompt = "Suggest movies for rainy night",
      genre = "thriller",
      mood = "relaxed",
      count = 2,
    } = req.body;

    const result = await getStructuredRecommendations({
      userPrompt,
      genre,
      mood,
      count: Number(count),
    });

    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
