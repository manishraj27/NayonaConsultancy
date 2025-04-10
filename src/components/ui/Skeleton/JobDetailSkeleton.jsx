import { motion } from 'framer-motion';

const JobDetailSkeleton = () => {
  return (
    <section
      id="job-detail"
      aria-label="job-detail"
      className="rounded-b-3xl overflow-hidden lg:px-8 px-6 w-full lg:py-16 py-24 min-h-screen dark-section bg-background-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-32 mb-8"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="h-6 w-20 bg-secondary-600 rounded-full animate-pulse"></div>
              <div className="h-6 w-32 bg-secondary-600 rounded-full animate-pulse"></div>
            </div>
            <div className="h-12 w-3/4 bg-secondary-600 rounded-lg animate-pulse"></div>
            <div className="h-4 w-48 bg-secondary-600 rounded animate-pulse"></div>
          </div>
        </motion.div>

        {/* Action Buttons Skeleton */}
        <div className="flex flex-wrap gap-4 mb-12">
          <div className="h-10 w-32 bg-secondary-600 rounded-lg animate-pulse"></div>
          <div className="h-10 w-32 bg-secondary-600 rounded-lg animate-pulse"></div>
        </div>

        {/* Overview Cards Skeleton */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-background-200/50 backdrop-blur-sm p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-5 w-5 bg-secondary-600 rounded animate-pulse"></div>
                <div className="h-6 w-24 bg-secondary-600 rounded animate-pulse"></div>
              </div>
              <div className="h-4 w-full bg-secondary-600 rounded animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Main Content Skeleton */}
        <div className="bg-background-200/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
          {/* Quick Info Skeleton */}
          <div className="flex flex-wrap gap-4 text-secondary-300 mb-8 p-4 bg-background-300/20 rounded-xl">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="h-5 w-5 bg-secondary-600 rounded animate-pulse"></div>
                <div className="h-4 w-24 bg-secondary-600 rounded animate-pulse"></div>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            {/* Description Section Skeleton */}
            <section>
              <div className="h-8 w-48 bg-secondary-600 rounded mb-4 animate-pulse"></div>
              <div className="space-y-3">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="h-4 w-full bg-secondary-600 rounded animate-pulse"></div>
                ))}
              </div>
            </section>

            {/* Responsibilities Section Skeleton */}
            <section>
              <div className="h-8 w-56 bg-secondary-600 rounded mb-4 animate-pulse"></div>
              <div className="space-y-3">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-secondary-600 rounded animate-pulse flex-shrink-0"></div>
                    <div className="h-4 w-full bg-secondary-600 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </section>

            {/* Required Skills Section Skeleton */}
            <section>
              <div className="h-8 w-44 bg-secondary-600 rounded mb-4 animate-pulse"></div>
              <div className="flex flex-wrap gap-3">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="h-8 w-24 bg-secondary-600 rounded-full animate-pulse"></div>
                ))}
              </div>
            </section>

            {/* Qualifications Section Skeleton */}
            <section>
              <div className="h-8 w-44 bg-secondary-600 rounded mb-4 animate-pulse"></div>
              <div className="space-y-3">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-secondary-600 rounded animate-pulse flex-shrink-0"></div>
                    <div className="h-4 w-full bg-secondary-600 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Apply Section Skeleton */}
            <section>
              <div className="h-8 w-44 bg-secondary-600 rounded mb-4 animate-pulse"></div>
              <div className="bg-background-300/20 rounded-xl p-6">
                <div className="h-4 w-3/4 bg-secondary-600 rounded mb-4 animate-pulse"></div>
                <div className="space-y-3 mb-6">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-5 w-5 bg-secondary-600 rounded animate-pulse"></div>
                      <div className="h-4 w-full bg-secondary-600 rounded animate-pulse"></div>
                    </div>
                  ))}
                </div>
                <div className="h-10 w-full md:w-48 bg-secondary-600 rounded-lg animate-pulse"></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetailSkeleton;