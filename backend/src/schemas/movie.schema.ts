import { z } from "zod";

export const MovieSchema = z.object({
  title: z.string().describe("Movie Title"),
  year: z.number().describe("Release year"),
  genre: z.array(z.string()).describe("List of genre"),
  cast: z.array(z.string()).describe("Top 3 cast members"),
  reason: z
    .string()
    .describe("Why this matches the user's mood and preference"),
  rating: z.number().min(1).max(10).describe("IMDB style rating out of 10"),
});

export const RecommendationsSchema = z.object({
  movies: z.array(MovieSchema).describe("List of recomended movies"),
});

export type Movie = z.infer<typeof MovieSchema>;
export type Recomendation = z.infer<typeof RecommendationsSchema>;
