import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Heading from '../ui/Heading';
import defaultBlogCover from "../../assets/images/blogDefaultImage.webp";
import apiconfig from './../../configurations/APIConfig';

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);
  
  // Predefined categories
  const CATEGORIES = ['All', 'Technology', 'General', 'News', 'Updates', 'Others'];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${apiconfig.nayona_api}/api/blogs`);
        setBlogs(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch blogs');
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    // Reset to first page when category changes
    setCurrentPage(1);
  }, [selectedCategory]);

  const getDefaultImage = () => defaultBlogCover;

  // Get the featured blog (first blog or most viewed)
  const getFeaturedBlog = () => {
    if (blogs.length === 0) return null;
    // For now, use the first blog as featured
    return blogs[0];
  };

  // Filter blogs by selected category
  const getFilteredBlogs = () => {
    if (selectedCategory === 'All') {
      return blogs.filter((_, index) => index > 0); // Exclude featured blog
    }
    return blogs.filter(blog => blog.category === selectedCategory);
  };

  // Get current blogs for pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const filteredBlogs = getFilteredBlogs();
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  if (loading) return (
    <section className="dark-section overflow-visible lg:px-12 px-4 w-full rounded-b-3xl py-24 lg:py-32 min-h-screen bg-background-100 text-light-100 flex flex-col items-center justify-center relative">
      <div className="w-full text-center">
        <div className="inline-block relative w-24 h-24">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-primary-300 border-r-primary-300 rounded-full animate-spin"></div>
        </div>
        <p className="mt-6 text-secondary-300 font-mono">Loading blogs...</p>
      </div>
    </section>
  );

  if (error) return (
    <section className="dark-section overflow-visible lg:px-12 px-4 w-full rounded-b-3xl py-24 lg:py-32 min-h-screen bg-background-100 text-light-100 flex flex-col items-center justify-center relative">
      <div className="w-full text-center text-accent-400 font-mono">{error}</div>
    </section>
  );

  const featuredBlog = getFeaturedBlog();

  return (
    <section
      id="blog"
      aria-label="blog"
      className="dark-section overflow-visible lg:px-12 px-4 w-full rounded-b-3xl py-24 lg:py-32 min-h-screen bg-background-100 text-light-100 flex flex-col justify-start relative"
    >
      <div className="w-full md:w-3/4 text-left relative z-10">
        <Heading title="Our Blogs" description="Resources"/>
        <div className="mt-4 w-full">
          <span className="text-secondary-300 lg:mx-16 lg:w-full text-body-1 font-grotesk text-pretty block">
            Compiled notes from the team, industry insights, and more.
          </span>
        </div>
      </div>

      {/* Featured Blog Section - Bento Grid Layout */}
      <div className="w-full max-w-7xl mt-16 grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
        {/* Featured Blog - Takes 3 columns */}
        {featuredBlog && (
          <Link 
            to={`/blog/${featuredBlog.slug}`}
            className="lg:col-span-3 group"
          >
            <div className="relative w-full h-full bg-background-100 rounded-3xl overflow-hidden border border-secondary-600 hover:border-primary-300 transition-all duration-300">
              <div className="absolute inset-0.5 bg-background-100 rounded-[1.4rem] overflow-hidden z-0">
                <div className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                  <img 
                    src={featuredBlog.coverImage || getDefaultImage()} 
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.src = getDefaultImage(); }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-100 via-background-100/70 to-transparent"></div>
              </div>

              <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col">
                <div className="flex-grow">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-primary-300 bg-opacity-20 backdrop-blur-sm text-primary-300 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border border-primary-300/40">
                      Featured
                    </span>
                    <span className="bg-secondary-500 bg-opacity-20 backdrop-blur-sm text-secondary-300 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border border-secondary-500/40">
                      {featuredBlog.category}
                    </span>
                  </div>
                  <h2 className="text-heading-3  font-open-sans mb-4 text-light-100 group-hover:text-primary-300 transition-colors duration-300">{featuredBlog.title}</h2>
                  <p className="text-secondary-300 font-grotesk pr-16 mb-8 line-clamp-3">{featuredBlog.summary}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-light-100 font-semibold">{featuredBlog.author?.name}</p>
                      <p className="text-secondary-300">{new Date(featuredBlog.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-sm pr-12 lg:pr-10 text-secondary-300">
                    <span className="font-mono">{featuredBlog.readTime} min read</span>
                    {/* <span className="flex items-center"><span className="mr-1 text-primary-300">◉</span>{featuredBlog.views}</span>
                    <span className="flex items-center"><span className="mr-1 text-accent-400">❤</span>{featuredBlog.likes}</span> */}
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-primary-300 bg-opacity-20 backdrop-blur-sm border border-primary-300/40 flex items-center justify-center transform group-hover:scale-110 group-hover:bg-primary-300 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-300 group-hover:text-light-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Categories Section */}
        <div className="lg:col-span-1 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-3xl p-6 border border-gray-100/60 shadow-sm backdrop-blur-md">
  <h3 className="text-lg font-medium mb-7 text-gray-800 relative inline-block">
    Categories
    <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-violet-400 rounded-full"></span>
  </h3>
  
  {/* First Row */}
  <div className="grid grid-cols-2 gap-4 mb-4">
    {CATEGORIES.slice(0, 2).map((category, index) => (
      <button 
        key={index} 
        onClick={() => setSelectedCategory(category)}
        className={`group px-3 py-3.5 rounded-2xl text-sm transition-all duration-300 transform hover:scale-105 ${
          selectedCategory === category 
            ? 'bg-gradient-to-br from-violet-50 to-indigo-50 text-violet-700 ring-1 ring-violet-200/70 shadow-sm' 
            : 'bg-white/80 text-gray-600 hover:bg-white hover:shadow-sm'
        }`}
      >
        <div className="flex flex-col items-center">
          <div className={`w-10 h-10 rounded-full mb-2 flex items-center justify-center transition-colors duration-300 ${
            selectedCategory === category ? 'bg-violet-100' : 'bg-gray-100 group-hover:bg-gray-50'
          }`}>
            {getIconForCategory(category)}
          </div>
          <span className="font-medium text-xs tracking-wide">{category}</span>
          {selectedCategory === category && (
            <span className="h-0.5 w-6 mt-2 rounded-full bg-violet-300"></span>
          )}
        </div>
      </button>
    ))}
  </div>
  
  {/* Second Row */}
  <div className="grid grid-cols-3 gap-4 mb-6">
    {CATEGORIES.slice(2, 5).map((category, index) => (
      <button 
        key={index + 2} 
        onClick={() => setSelectedCategory(category)}
        className={`group px-2 py-3.5 rounded-2xl text-sm transition-all duration-300 transform hover:scale-105 ${
          selectedCategory === category 
            ? 'bg-gradient-to-br from-violet-50 to-indigo-50 text-violet-700 ring-1 ring-violet-200/70 shadow-sm' 
            : 'bg-white/80 text-gray-600 hover:bg-white hover:shadow-sm'
        }`}
      >
        <div className="flex flex-col items-center">
          <div className={`w-9 h-9 rounded-full mb-2 flex items-center justify-center transition-colors duration-300 ${
            selectedCategory === category ? 'bg-violet-100' : 'bg-gray-100 group-hover:bg-gray-50'
          }`}>
            {getIconForCategory(category)}
          </div>
          <span className="font-medium text-xs tracking-wide">{category}</span>
          {selectedCategory === category && (
            <span className="h-0.5 w-5 mt-2 rounded-full bg-violet-300"></span>
          )}
        </div>
      </button>
    ))}
  </div>
  
  {/* Tags */}
  <div className="mt-8 pt-6 border-t border-gray-200/50">
    <h4 className="text-xs font-medium mb-4 text-gray-400 tracking-wider uppercase">Popular Tags</h4>
    <div className="flex flex-wrap gap-2.5">
      <span className="bg-white/80 text-gray-600 px-4 py-1.5 rounded-full text-xs hover:bg-white hover:text-violet-600 hover:shadow-sm cursor-pointer transition-all duration-300 transform hover:scale-105">#webdev</span>
      <span className="bg-white/80 text-gray-600 px-4 py-1.5 rounded-full text-xs hover:bg-white hover:text-violet-600 hover:shadow-sm cursor-pointer transition-all duration-300 transform hover:scale-105">#react</span>
      <span className="bg-white/80 text-gray-600 px-4 py-1.5 rounded-full text-xs hover:bg-white hover:text-violet-600 hover:shadow-sm cursor-pointer transition-all duration-300 transform hover:scale-105">#ai</span>
      <span className="bg-white/80 text-gray-600 px-4 py-1.5 rounded-full text-xs hover:bg-white hover:text-violet-600 hover:shadow-sm cursor-pointer transition-all duration-300 transform hover:scale-105">#design</span>
      <span className="bg-white/80 text-gray-600 px-4 py-1.5 rounded-full text-xs hover:bg-white hover:text-violet-600 hover:shadow-sm cursor-pointer transition-all duration-300 transform hover:scale-105">#ux</span>
    </div>
  </div>
</div>
      </div>

      {/* All Blogs Section */}
      <div className="w-full max-w-7xl mt-20 relative z-10">
        <div className="flex justify-between items-center mb-10 border-b border-secondary-600 pb-4">
          <h2 className="text-heading-3 font-bold text-light-100 font-mono flex items-center">
            <span className="w-2 h-8 bg-primary-300 mr-3 rounded-full"></span>
            {selectedCategory === 'All' ? 'All Blogs' : `${selectedCategory} Blogs`}
          </h2>
          <div className="text-secondary-300 font-mono">
            Showing {currentBlogs.length > 0 ? indexOfFirstBlog + 1 : 0}-{Math.min(indexOfLastBlog, filteredBlogs.length)} of {filteredBlogs.length}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <Link 
              to={`/blog/${blog.slug}`} 
              key={blog._id}
              className="group hover:translate-y-1 transition-all duration-300 mb-16"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src={blog.coverImage || getDefaultImage()} 
                  alt={blog.title}
                  className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = getDefaultImage();
                  }}
                />
              </div>
              <div className="px-1">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-secondary-500/10 text-secondary-300 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider">{blog.category}</span>
                  <span className="text-secondary-300 text-xs font-mono">{blog.readTime} min</span>
                </div>
                <h2 className="text-body-1 mb-2 text-light-100 group-hover:text-primary-300 transition-colors duration-300 line-clamp-2 font-open-sans font-medium">{blog.title}</h2>
                <p className="text-secondary-300 font-grotesk line-clamp-2">{blog.summary}</p>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredBlogs.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-secondary-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p className="text-lg font-mono">No blogs found in this category</p>
          </div>
        )}
        
        {/* Pagination */}
        {filteredBlogs.length > 0 && totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <button 
                onClick={prevPage} 
                disabled={currentPage === 1}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${currentPage === 1 ? 'text-secondary-600 cursor-not-allowed' : 'text-secondary-300 hover:bg-secondary-600 hover:text-light-100'} transition-colors`}
                aria-label="Previous page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Page Numbers */}
              <div className="flex items-center">
                {Array.from({ length: totalPages }, (_, i) => {
                  // Show first page, last page, current page, and pages around current
                  const pageNum = i + 1;
                  const showPageNumber = 
                    pageNum === 1 || 
                    pageNum === totalPages || 
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1);
                    
                  // Show dots for skipped pages
                  if (!showPageNumber) {
                    // Show dots only once for each gap
                    if (pageNum === 2 || pageNum === totalPages - 1) {
                      return (
                        <span key={`dots-${pageNum}`} className="w-10 h-10 flex items-center justify-center text-secondary-300">
                          ...
                        </span>
                      );
                    }
                    return null;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => paginate(pageNum)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        currentPage === pageNum 
                          ? 'bg-primary-300 text-light-100' 
                          : 'text-secondary-300 hover:bg-secondary-600 hover:text-light-100'
                      }`}
                      aria-label={`Page ${pageNum}`}
                      aria-current={currentPage === pageNum ? 'page' : undefined}
                    >
                      {pageNum}
                    </button>
                  );
                }).filter(Boolean)}
              </div>
              
              <button 
                onClick={nextPage} 
                disabled={currentPage === totalPages}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${currentPage === totalPages ? 'text-secondary-600 cursor-not-allowed' : 'text-secondary-300 hover:bg-secondary-600 hover:text-light-100'} transition-colors`}
                aria-label="Next page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Helper function to get icon for each category
function getIconForCategory(category) {
  switch (category) {
    case 'All':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );
    case 'General':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-1M9 15L12 12M12 12L9 9M12 12L15 9M12 12L15 15" />
        </svg>
      );
    case 'Technology':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'News':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      );
    case 'Updates':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      );
    case 'Others':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
      );
  }
}

export default BlogList;