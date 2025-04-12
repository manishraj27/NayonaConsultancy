import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="group relative">
      <div className="flex flex-col gap-10 border-b border-subtle/20 py-12 last-of-type:border-b-0 first-of-type:border-t md:flex-row md:gap-12">
        <div className="flex flex-col gap-4 md:gap-12 xl:flex-row flex-1 order-2 md:order-1">
          <div>
            <p className="font-grotest text-body-5 tracking-wider uppercase text-on-dark">{blog.date}</p>
          </div>
          
          <div className="flex flex-1 flex-col space-y-6">
            <div className="block grow space-y-6">
              <Link to={`/blogs/${blog.slug}`}>
                <div className="absolute inset-0"></div>
                <h3 className="font-grotesk text-body-1 text-on-dark leading-tight max-w-[90%] tracking-wide">
                  {blog.title}
                </h3>
              </Link>
              <p className="font-grotesk text-body-4 text-on-dark/70 mt-4">
                {blog.description}
              </p>
            </div>
            
            <div className="flex items-center justify-between gap-3">
              <div>
                <span className="font-grotesk text-body-4 tracking-wider text-on-dark">{blog.tag}</span>
              </div>
              <div>
                <button 
                  type="button" 
                  className="relative isolate inline-flex items-center justify-center border font-grotesk text-body-4 uppercase tracking-widest shrink-0 px-3.5 py-1.5 bg-transparent border-primary-300/25 text-primary-300 hover:bg-secondary-700 rounded-full group-hover:bg-secondary-700"
                >
                  <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true"></span>
                  Read
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 xl:max-w-[500px] order-1 md:order-2">
          <div 
            className="flex duration-150 items-center whitespace-pre-wrap break-word w-full bg-background-100 aspect-[16/10] text-4xl tracking-tight leading-[2.5rem]" 
            style={{
              backgroundImage: `url(${blog.image})`,
              backgroundSize: 'auto 100%',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex bg-background-100 px-3 py-2 w-auto max-w-1/2">
                <h2 className="font-grotesk uppercase text-balance text-on-dark text-heading-4">
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