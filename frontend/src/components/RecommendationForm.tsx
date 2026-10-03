import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";

interface FormProps {
  onSubmit: (data: any) => void;
  isLoading: boolean;
}

export default function RecommendationForm({ onSubmit, isLoading }: FormProps) {
  const [formData, setFormData] = useState({
    userPrompt: "",
    genre: "thriller",
    mood: "relaxed",
    count: 3,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-200";
  const labelClass = "block text-sm font-semibold text-slate-700 mb-1.5";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-soft border border-slate-100 space-y-6"
    >
      <div>
        <label htmlFor="prompt" className={labelClass}>
          What kind of movie are you in the mood for?
        </label>
        <input
          id="prompt"
          type="text"
          placeholder="e.g., Suggest movies for a rainy night with a plot twist"
          className={inputClass}
          value={formData.userPrompt}
          onChange={(e) =>
            setFormData({ ...formData, userPrompt: e.target.value })
          }
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="genre" className={labelClass}>
            Genre
          </label>
          <select
            id="genre"
            className={`${inputClass} cursor-pointer appearance-none`}
            value={formData.genre}
            onChange={(e) =>
              setFormData({ ...formData, genre: e.target.value })
            }
          >
            <option value="thriller">Thriller</option>
            <option value="drama">Drama</option>
            <option value="comedy">Comedy</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="action">Action</option>
          </select>
        </div>

        <div>
          <label htmlFor="mood" className={labelClass}>
            Mood
          </label>
          <select
            id="mood"
            className={`${inputClass} cursor-pointer appearance-none`}
            value={formData.mood}
            onChange={(e) => setFormData({ ...formData, mood: e.target.value })}
          >
            <option value="relaxed">Relaxed</option>
            <option value="excited">Excited</option>
            <option value="thoughtful">Thoughtful</option>
            <option value="nostalgic">Nostalgic</option>
            <option value="suspenseful">Suspenseful</option>
          </select>
        </div>

        <div>
          <label htmlFor="count" className={labelClass}>
            Number of Movies
          </label>
          <input
            id="count"
            type="number"
            min={1}
            max={10}
            className={inputClass}
            value={formData.count}
            onChange={(e) =>
              setFormData({ ...formData, count: parseInt(e.target.value) || 1 })
            }
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full md:w-auto px-8 py-3.5 bg-primary hover:bg-primaryDark text-white font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-[0.98]"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Curating your list...
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5" />
            Get Recommendations
          </>
        )}
      </button>
    </form>
  );
}
