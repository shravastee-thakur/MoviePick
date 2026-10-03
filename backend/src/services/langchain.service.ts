import { ChatGoogle } from "@langchain/google/node";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import dotenv from "dotenv";
import { RecommendationsSchema } from "../schemas/movie.schema.js";
dotenv.config();

const model = new ChatGoogle({
  model: "gemini-3.6-flash",
  temperature: 0.3,
  apiKey: process.env.GOOGLE_API_KEY,
});

const promptTemplate = ChatPromptTemplate.fromMessages([
  [
    "system",
    `You are a movgie recomendation expert

    Return high-quality recommendations based on:
    - user's request
    - mood
    - genre
    - count
        
    Every movie should feel intentional.
    Do not recommend the most obvious titles every time
        `,
  ],
  [
    "human",
    `User request: {userPrompt}

    Preferences:
    - Genre: {genre}
    - Mood: {mood}
    - Number of movies: {count}
        `,
  ],
]);

// export const getRecommendations = async (input: {
//   userPrompt: string;
//   genre: string;
//   mood: string;
//   count: number;
// }) => {
//   const chain = promptTemplate.pipe(model);

//   const response = await chain.invoke({
//     userPrompt: input.userPrompt,
//     genre: input.genre,
//     mood: input.mood,
//     count: input.count,
//   });

//   console.log(response.text);
//   return response.text;
// };

const structuredModel = model.withStructuredOutput(RecommendationsSchema);

export const getStructuredRecommendations = async (input: {
  userPrompt: string;
  genre: string;
  mood: string;
  count: number;
}) => {
  const chain = promptTemplate.pipe(structuredModel);

  const result = await chain.invoke({
    userPrompt: input.userPrompt,
    genre: input.genre,
    mood: input.mood,
    count: input.count,
  });

  return result;
};
