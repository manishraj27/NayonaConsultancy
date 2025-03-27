export const BlogSectionSkeleton = () => {
    return (
      <section
        id="blog"
        aria-label="blog"
        className="bg-background-100 min-h-screen w-full rounded-b-3xl py-24 lg:py-32 lg:px-12 px-4 flex flex-col justify-start relative overflow-visible dark-section"
      >
        {/* Header Skeleton */}
        <div className="w-full md:w-3/4 text-left relative z-10">
          <div className="h-12 w-64 bg-secondary-600 rounded-lg animate-pulse mb-4"></div>
          <div className="h-4 w-3/4 bg-secondary-600 rounded animate-pulse"></div>
        </div>
  
        {/* Featured Blog & Categories Skeleton */}
        <div className="w-full max-w-7xl mt-16 grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
          {/* Featured Blog Skeleton */}
          <div className="lg:col-span-3 h-[500px] bg-secondary-600 rounded-3xl animate-pulse"></div>
          
          {/* Categories Skeleton */}
          <div className="lg:col-span-1 bg-secondary-600 rounded-3xl p-6 animate-pulse">
            <div className="h-6 w-32 bg-secondary-500 rounded mb-7"></div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="h-28 bg-secondary-500 rounded-2xl animate-pulse"></div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-28 bg-secondary-500 rounded-2xl animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
  
        {/* All Blogs Section Skeleton */}
        <div className="w-full max-w-7xl mt-20 relative z-10">
          <div className="flex justify-between items-center mb-10 border-b border-secondary-600 pb-4">
            <div className="h-8 w-48 bg-secondary-600 rounded animate-pulse"></div>
            <div className="h-4 w-32 bg-secondary-600 rounded animate-pulse"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="group mb-16">
                <div className="aspect-video bg-secondary-600 rounded-lg mb-4 animate-pulse"></div>
                <div className="px-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="h-6 w-20 bg-secondary-600 rounded-full animate-pulse"></div>
                    <div className="h-6 w-12 bg-secondary-600 rounded-full animate-pulse"></div>
                  </div>
                  <div className="h-6 w-full bg-secondary-600 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-secondary-600 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };