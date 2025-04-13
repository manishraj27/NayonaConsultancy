const LPBlogCardSkeleton = () => {
    return (
      <div className="group relative animate-pulse">
        <div className="flex flex-col gap-10 border-b border-secondary-300/10 py-12 last-of-type:border-b-0 first-of-type:border-t md:flex-row md:gap-12">
          <div className="flex flex-col gap-4 md:gap-12 xl:flex-row flex-1 order-2 md:order-1">
            <div className="w-[120px] shrink-0">
              <div className="h-5 bg-secondary-600 rounded-md w-full"></div>
            </div>
            
            <div className="flex flex-1 flex-col space-y-8">
              <div className="block grow space-y-6">
                <div>
                  <div className="h-8 bg-secondary-600 rounded-md w-3/4"></div>
                </div>
                <div className="h-20 bg-secondary-600 rounded-md w-full"></div>
              </div>
              
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="h-5 bg-secondary-600 rounded-md w-24"></div>
                </div>
                <div>
                  <div className="h-10 bg-secondary-600 rounded-full w-20"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 xl:max-w-[500px] order-1 md:order-2">
            <div className="flex duration-300 items-center w-full aspect-[16/10] overflow-hidden rounded-sm bg-secondary-600">
              <div className="flex items-center justify-center w-full h-full">
                <div className="flex bg-secondary-300/30 px-4 py-3 w-auto max-w-1/2">
                  <div className="h-8 bg-secondary-600 rounded-md w-32"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default LPBlogCardSkeleton;