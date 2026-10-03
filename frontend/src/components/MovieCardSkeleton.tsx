export default function MovieCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-soft animate-pulse">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-3 flex-1">
          <div className="h-6 bg-slate-200 rounded-lg w-3/4 shimmer-bg animate-shimmer" />
          <div className="h-4 bg-slate-200 rounded-lg w-1/3 shimmer-bg animate-shimmer" />
        </div>
        <div className="h-8 w-12 bg-slate-200 rounded-lg shimmer-bg animate-shimmer" />
      </div>

      <div className="flex gap-2 mb-6">
        <div className="h-6 w-16 bg-slate-200 rounded-full shimmer-bg animate-shimmer" />
        <div className="h-6 w-20 bg-slate-200 rounded-full shimmer-bg animate-shimmer" />
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="h-3 bg-slate-200 rounded w-1/4 shimmer-bg animate-shimmer" />
          <div className="h-4 bg-slate-200 rounded w-full shimmer-bg animate-shimmer" />
          <div className="h-4 bg-slate-200 rounded w-5/6 shimmer-bg animate-shimmer" />
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-slate-200 rounded w-1/4 shimmer-bg animate-shimmer" />
          <div className="h-4 bg-slate-200 rounded w-2/3 shimmer-bg animate-shimmer" />
        </div>
      </div>
    </div>
  );
}
