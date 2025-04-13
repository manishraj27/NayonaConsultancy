import { Link } from 'react-router-dom';



const BlogCard = ({ blog }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).toUpperCase();
  };


  return (
    <div className="group relative ">
      <div className="flex flex-col gap-10 border-b border-secondary-300/10 py-12 last-of-type:border-b-0 first-of-type:border-t md:flex-row md:gap-12">
        <div className="flex flex-col gap-4 md:gap-12 xl:flex-row flex-1 order-2 md:order-1">
          <div>
            <p className="font-grotesk text-body-5 tracking-wider uppercase text-secondary-300">{formatDate(blog.createdAt)}</p>
          </div>
          
          <div className="flex flex-1 flex-col space-y-8">
            <div className="block grow space-y-6">
              <Link to={`/blog/${blog.slug}`} className="block group-hover:opacity-75 transition-opacity duration-300">
                <div className="absolute inset-0 z-10"></div>
                <h3 className="font-grotesk text-body-1 text-light-100 leading-relaxed max-w-[90%] tracking-wide">
                  {blog.title}
                </h3>
              </Link>
              <p className="font-grotesk text-body-4 text-secondary-300/80 mt-4 leading-relaxed">
                {blog.summary}
              </p>
            </div>
            
            <div className="flex items-center justify-between gap-3">
              <div>
                <span className="font-grotesk text-body-4 tracking-wider text-secondary-300 uppercase">{blog.category}</span>
              </div>
              <div>
                <button 
                  type="button" 
                  className="relative inline-flex items-center justify-center border px-5 py-2 font-grotesk text-body-4 uppercase tracking-widest bg-transparent border-secondary-300/20 text-secondary-300 hover:bg-secondary-700/50 rounded-full transition-colors duration-300 group-hover:bg-secondary-700/50"
                >
                  Read
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 xl:max-w-[500px] order-1 md:order-2">
          <div 
            className="flex duration-300 items-center w-full aspect-[16/10] overflow-hidden rounded-sm group-hover:opacity-90" 
            style={{
              backgroundImage: `url(${blog.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-background-100/30">
              <div className="flex bg-background-100 px-4 py-3 w-auto max-w-1/2">
                <h2 className="font-grotesk uppercase text-balance text-light-100 text-heading-4 tracking-wider">
                  {blog.shortTitle}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;