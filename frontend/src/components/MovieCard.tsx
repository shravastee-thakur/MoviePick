import { Star, Calendar, Film, Users } from "lucide-react";
import type { Movie } from "../types/movie";

interface MovieCardProps {
  movie: Movie;
  index: number;
}

export default function MovieCard({ movie, index }: MovieCardProps) {
  return (
    <div
      className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-soft transition-all duration-300 hover:shadow-glow hover:border-primary/30 hover:-translate-y-1 animate-slide-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex justify-between items-start mb-5">
        <div className="pr-4">
          <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
            {movie.title}
          </h3>
          <div className="flex items-center gap-3 mt-2.5 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              {movie.year}
            </span>
            <span className="w-1 h-1 bg-slate-300 rounded-full" />
            <span className="flex items-center gap-1.5 text-amber-600">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              {movie.rating.toFixed(1)}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-end gap-2 max-w-[50%]">
          {movie.genre.slice(0, 2).map((g) => (
            <span
              key={g}
              className="px-3 py-1 bg-primary/10 text-primaryDark text-xs font-semibold rounded-full border border-primary/10 whitespace-nowrap"
            >
              {g}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <div className="bg-slate-50/50 rounded-xl p-4 border border-slate-100">
          <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-2">
            <Film className="w-3.5 h-3.5" />
            Why it matches
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            {movie.reason}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Users className="w-3.5 h-3.5" />
            Top Cast
          </h4>
          <p className="text-sm text-slate-700 font-medium">
            {movie.cast.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
