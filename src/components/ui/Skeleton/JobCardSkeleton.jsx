export const JobCardSkeleton = () => {
  return (
    <div className="bg-background-200/50 p-6 rounded-xl animate-pulse">
      <div className="flex justify-between items-start mb-4">
        <div className="h-8 w-48 bg-secondary-600 rounded"></div>
        <div className="h-6 w-24 bg-secondary-600 rounded-full"></div>
      </div>
      <div className="flex gap-4 mb-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-5 w-24 bg-secondary-600 rounded"></div>
        ))}
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-4 w-full bg-secondary-600 rounded"></div>
        <div className="h-4 w-3/4 bg-secondary-600 rounded"></div>
      </div>
      <div className="h-10 w-32 bg-secondary-600 rounded-lg"></div>
    </div>
  );
};