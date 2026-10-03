import { useState } from "react";
import RecommendationForm from "./components/RecommendationForm";
import MovieCard from "./components/MovieCard";
import MovieCardSkeleton from "./components/MovieCardSkeleton";
import type {
  RecommendationRequest,
  RecommendationResponse,
} from "./types/movie";
import { Film, Clapperboard } from "lucide-react";

const App = () => {
  const [movies, setMovies] = useState<RecommendationResponse["movies"]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleRecommendation = async (data: RecommendationRequest) => {
    setIsLoading(true);
    setError(null);
    setMovies([]);
    setHasSearched(true);

    try {
      const response = await fetch("http://localhost:3000/api/recomended", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch recommendations");
      }

      const result: RecommendationResponse = await response.json();
      setMovies(result.movies);
    } catch (err) {
      setError(
        "Unable to connect to the recommendation engine. Please verify your backend is running on port 3000.",
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="relative bg-surfaceDark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primaryDark/20 via-surfaceDark to-surfaceDark" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex items-center gap-4">
          <div className="p-3 bg-primary/20 rounded-2xl border border-primary/30 shadow-glow">
            <Clapperboard className="w-8 h-8 text-primaryLight" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              MoviePick
            </h1>
            <p className="text-slate-400 mt-1 text-sm md:text-base font-medium">
              Intelligent, mood-aware movie recommendations.
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <section className="animate-fade-in">
          <RecommendationForm
            onSubmit={handleRecommendation}
            isLoading={isLoading}
          />
        </section>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3 animate-fade-in">
            <div className="w-2 h-2 bg-red-500 rounded-full" />
            {error}
          </div>
        )}

        {hasSearched && (
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Film className="w-5 h-5 text-primary" />
                {isLoading
                  ? "Finding perfect matches..."
                  : "Your Curated Picks"}
              </h2>
              {!isLoading && movies.length > 0 && (
                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  {movies.length} results
                </span>
              )}
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MovieCardSkeleton />
                <MovieCardSkeleton />
              </div>
            ) : movies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {movies.map((movie, index) => (
                  <MovieCard key={movie.title} movie={movie} index={index} />
                ))}
              </div>
            ) : (
              !error && (
                <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200 animate-fade-in">
                  <Film className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                  <h3 className="text-lg font-semibold text-slate-700">
                    No movies found
                  </h3>
                  <p className="text-slate-500 mt-1">
                    Try adjusting your genre or mood preferences.
                  </p>
                </div>
              )
            )}
          </section>
        )}
      </main>
    </div>
  );
};

export default App;
