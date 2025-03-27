export const BlogPostSkeleton = () => {
    return (
      <section 
        className="bg-background-100 min-h-screen py-32 px-4 flex justify-center dark-section rounded-b-[40px]"
      >
        <div className="w-full max-w-4xl">
          {/* Back Button Skeleton */}
          <div className="h-6 w-24 bg-secondary-600 rounded-full mb-8 animate-pulse"></div>
  
          {/* Cover Image Skeleton */}
          <div className="w-full max-w-3xl mx-auto aspect-[18/9] rounded-2xl overflow-hidden mb-12 bg-secondary-600 animate-pulse"></div>
  
          {/* Blog Content Container Skeleton */}
          <div className="max-w-2xl mx-auto">
            {/* Category and Tags Container Skeleton */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              {/* Category Skeleton */}
              <div className="h-8 w-32 bg-secondary-600 rounded-full animate-pulse"></div>
              
              {/* Tags Skeleton */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="h-6 w-16 bg-secondary-600 rounded-full animate-pulse"></div>
                <div className="h-6 w-20 bg-secondary-600 rounded-full animate-pulse"></div>
                <div className="h-6 w-14 bg-secondary-600 rounded-full animate-pulse"></div>
              </div>
            </div>
  
            {/* Title Skeleton */}
            <div className="space-y-3 mb-6">
              <div className="h-8 w-full bg-secondary-600 rounded animate-pulse"></div>
              <div className="h-8 w-4/5 bg-secondary-600 rounded animate-pulse"></div>
            </div>
  
            {/* Blog Metadata Skeleton */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-5 w-20 bg-secondary-600 rounded-full animate-pulse"></div>
              ))}
            </div>
  
            {/* Author Section Skeleton */}
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-secondary-600 rounded-full mr-4 animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 w-32 bg-secondary-600 rounded animate-pulse"></div>
                <div className="h-3 w-24 bg-secondary-600 rounded animate-pulse"></div>
              </div>
            </div>
  
            {/* Blog Content Skeleton */}
            <div className="space-y-4 mb-12">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-4 w-full bg-secondary-600 rounded animate-pulse" 
                     style={{width: `${100 - (i % 3) * 10}%`}}></div>
              ))}
              <div className="h-4 w-3/4 bg-secondary-600 rounded animate-pulse mt-6"></div>
            </div>
  
            {/* Comments Section Skeleton */}
            <div className="border-t border-secondary-700 pt-12">
              <div className="h-8 w-40 bg-secondary-600 rounded mb-6 animate-pulse"></div>
              
              {/* Comment Skeleton */}
              <div className="space-y-6">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="bg-secondary-700 p-4 rounded-lg space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-secondary-600 rounded-full mr-3 animate-pulse"></div>
                      <div className="space-y-2">
                        <div className="h-3 w-24 bg-secondary-600 rounded animate-pulse"></div>
                        <div className="h-2 w-16 bg-secondary-600 rounded animate-pulse"></div>
                      </div>
                    </div>
                    <div className="h-4 w-full bg-secondary-600 rounded animate-pulse"></div>
                    <div className="h-4 w-3/4 bg-secondary-600 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };