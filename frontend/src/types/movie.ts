export interface Movie {
  title: string;
  year: number;
  genre: string[];
  cast: string[];
  reason: string;
  rating: number;
}

export interface RecommendationResponse {
  movies: Movie[];
}

export interface RecommendationRequest {
  userPrompt: string;
  genre: string;
  mood: string;
  count: number;
}
