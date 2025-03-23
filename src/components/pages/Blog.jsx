import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Eye, Calendar, Clock, Tag, MessageCircle } from 'lucide-react';
import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.bubble.css';
import defaultBlogCover from "../../assets/images/blogDefaultImage.webp";

function Blog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tableOfContents, setTableOfContents] = useState([]);
  const [activeHeading, setActiveHeading] = useState('');
  const contentRef = useRef(null);
  
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/${slug}`);
        const blogData = Array.isArray(response.data) ? response.data[0] : response.data;
        
        if (!blogData) {
          setError('Blog not found');
          setLoading(false);
          return;
        }
        
        setBlog(blogData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Failed to fetch blog');
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  useEffect(() => {
    if (blog && blog.content) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = blog.content;
      
      const headings = [];
      const headingElements = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
      
      headingElements.forEach((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        
        headings.push({
          id,
          text: heading.textContent,
          level: parseInt(heading.tagName.substring(1), 10)
        });
      });
      
      setTableOfContents(headings);
      
      if (contentRef.current) {
        const contentDiv = contentRef.current.querySelector('.ql-editor');
        if (contentDiv) {
          const headingNodesInEditor = contentDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
          headingNodesInEditor.forEach((heading, index) => {
            heading.id = `heading-${index}`;
          });
          
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  setActiveHeading(entry.target.id);
                }
              });
            },
            { threshold: 0.1 }
          );
          
          headingNodesInEditor.forEach(heading => {
            observer.observe(heading);
          });
          
          return () => {
            headingNodesInEditor.forEach(heading => {
              observer.unobserve(heading);
            });
          };
        }
      }
    }
  }, [blog]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const getDefaultImage = () => defaultBlogCover;

  if (loading) return (
    <section className="dark-section overflow-visible lg:px-12 px-4 w-full rounded-b-3xl py-24 lg:py-32 min-h-screen bg-background-100 flex flex-col items-center justify-center relative">
      <div className="w-full text-center text-on-dark">Loading blog...</div>
    </section>
  );

  if (error || !blog) return (
    <section className="dark-section overflow-visible lg:px-12 px-4 w-full rounded-b-3xl py-24 lg:py-32 min-h-screen bg-background-100 flex flex-col items-center justify-center relative">
      <div className="w-full text-center text-red-500">{error || 'Blog not found'}</div>
    </section>
  );

  return (
    <section
      id="blog"
      aria-label="blog"
      className="dark-section overflow-visible w-full rounded-b-3xl py-12 lg:py-20 min-h-screen bg-background-100 flex flex-col items-center justify-start relative"
    >
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Table of Contents - Only visible on large screens */}
        {tableOfContents.length > 0 && (
          <aside className="hidden lg:block lg:col-span-3 h-screen sticky top-20 pt-6 pr-6 overflow-y-auto">
            <div className="border-l-2 border-secondary-300 pl-4">
              <h3 className="text-lg font-semibold mb-4 text-on-dark">Table of Contents</h3>
              <nav>
                <ul className="space-y-2">
                  {tableOfContents.map((heading) => (
                    <li 
                      key={heading.id}
                      className={`cursor-pointer transition-colors duration-200 ${
                        activeHeading === heading.id 
                          ? 'text-primary-300 font-medium' 
                          : 'text-secondary-300 hover:text-on-dark'
                      }`}
                      style={{ 
                        paddingLeft: `${(heading.level - 1) * 12}px`,
                        fontSize: `${Math.max(18 - heading.level, 13)}px`
                      }}
                      onClick={() => scrollToHeading(heading.id)}
                    >
                      {heading.text}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        )}

        {/* Main content */}
        <article className={`px-4 ${tableOfContents.length > 0 ? 'lg:col-span-9' : 'lg:col-span-12'}`}>
          {/* Back button */}
          <Link to="/resources/blogs" className="inline-flex items-center text-primary-300 hover:text-primary-400 mb-6">
            <ArrowLeft size={16} className="mr-1" />
            Back to Blogs
          </Link>

          {/* Blog Cover Image */}
          <div className="mb-8 rounded-xl overflow-hidden h-72 md:h-96">
            <img 
              src={blog.coverImage || getDefaultImage()} 
              alt={blog.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = getDefaultImage();
              }}
            />
          </div>

          {/* Blog Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-on-dark">{blog.title}</h1>
            
            <div className="flex flex-wrap items-center text-secondary-300 gap-4 mb-4">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{blog.readTime} min read</span>
              </div>
              <div className="flex items-center">
                <Eye size={16} className="mr-1" />
                <span>{blog.views} views</span>
              </div>
              <div className="flex items-center">
                <Heart size={16} className="mr-1" />
                <span>{blog.likes} likes</span>
              </div>
              <div className="flex items-center">
                <MessageCircle size={16} className="mr-1" />
                <span>{blog.comments?.length || 0} comments</span>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-secondary-200 rounded-full mr-3 flex items-center justify-center text-on-dark">
                {blog.author?.name?.charAt(0) || 'U'}
              </div>
              <div>
                <p className="font-medium text-on-dark">{blog.author?.name || 'Unknown'}</p>
                <p className="text-sm text-secondary-300">Author</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags && blog.tags.map((tag, index) => (
                <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-secondary-200 text-on-dark">
                  <Tag size={14} className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="text-sm font-medium text-primary-300 mb-6">
              Category: {blog.category}
            </div>
          </div>

          {/* Blog Content using ReactQuill */}
          <div ref={contentRef} className="prose prose-lg max-w-none mb-8 text-on-dark">
            <ReactQuill
              value={blog.content}
              readOnly={true}
              theme="bubble"
              modules={{ toolbar: false }}
              className="custom-quill"
            />
          </div>

          {/* Comments section */}
          <div className="mt-12 border-t border-secondary-300 pt-8">
            <h3 className="text-2xl font-bold mb-6 text-on-dark">Comments ({blog.comments?.length || 0})</h3>
            
            {!blog.comments || blog.comments.length === 0 ? (
              <p className="text-secondary-300">No comments yet. Be the first to comment!</p>
            ) : (
              <div className="space-y-6">
                {blog.comments.map((comment, index) => (
                  <div key={index} className="bg-secondary-200 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-secondary-300 rounded-full mr-2 flex items-center justify-center text-sm text-on-dark">
                        {comment.user.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-on-dark">{comment.user}</p>
                        <p className="text-xs text-secondary-300">{new Date(comment.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <p className="text-on-dark">{comment.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}

export default Blog;