import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Eye, Calendar, Clock, Tag, MessageCircle, BookOpen } from 'lucide-react';
import ReactQuill from 'react-quill';
import defaultBlogCover from "../../assets/images/blogDefaultImage.webp";
import apiconfig from '../../configurations/APIConfig';

function Blog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const contentRef = useRef(null);
  
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${apiconfig.nayona_api}/api/blogs/${slug}`);
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

  const getDefaultImage = () => defaultBlogCover;

  if (loading) return (
    <section className="bg-background-100 min-h-screen flex items-center justify-center text-on-dark  dark-section rounded-b-[40px]">
      <div className="text-xl font-medium">Loading blog...</div>
    </section>
  );

  if (error || !blog) return (
    <section className="bg-background-100 min-h-screen flex items-center justify-center text-red-500  dark-section rounded-b-[40px]">
      <div className="text-xl">{error || 'Blog not found'}</div>
    </section>
  );


  const goBack = () => {
    window.history.back();
  };


  return (
    <section 
      className="bg-background-100 min-h-screen py-32 px-4 flex justify-center dark-section rounded-b-[40px]"
      ref={contentRef}
    >
      <div className="w-full max-w-4xl">
        {/* Back Button */}
        <Link 
          onClick={goBack} 
          className="inline-flex items-center text-primary-300 hover:text-primary-400 mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Blogs
        </Link>

        {/* Cover Image (18:9 Ratio) - Made smaller */}
        <div className="w-full max-w-3xl mx-auto aspect-[18/9] rounded-2xl overflow-hidden mb-12 shadow-lg">
          <img 
            src={blog.coverImage || getDefaultImage()} 
            alt={blog.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = getDefaultImage();
            }}
          />
        </div>

        {/* Blog Content Container */}
        <div className="max-w-2xl mx-auto">
          {/* Category and Tags Container */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            {/* Category */}
            <div className="flex items-center bg-secondary-700 px-4 py-2 rounded-full text-sm">
              <BookOpen size={16} className="mr-2 text-primary-300" />
              <span className="text-on-dark font-medium">
                {blog.category || 'Uncategorized'}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2">
              {blog.tags && blog.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-secondary-600 text-primary-200 px-3 py-1 rounded-full text-xs font-medium flex items-center"
                >
                  <Tag size={12} className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-on-dark mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Blog Metadata */}
          <div className="flex flex-wrap items-center text-secondary-300 gap-4 mb-8">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>{blog.readTime} min read</span>
            </div>
            <div className="flex items-center">
              <Eye size={16} className="mr-2" />
              <span>{blog.views} views</span>
            </div>
            <div className="flex items-center">
              <Heart size={16} className="mr-2" />
              <span>{blog.likes} likes</span>
            </div>
          </div>

           {/* Author Section */}
           <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-secondary-200 rounded-full mr-4 flex items-center justify-center text-on-dark font-semibold">
              {blog.author?.name?.charAt(0) || 'U'}
            </div>
            <div>
              <p className="font-medium text-on-dark">{blog.author?.name || 'Unknown Author'}</p>
              <p className="text-secondary-300">Published Article</p>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-invert prose-lg max-w-none text-on-dark mb-12">
            <ReactQuill
              value={blog.content}
              readOnly={true}
              theme="bubble"
              modules={{ toolbar: false }}
              className="custom-quill"
            />
          </div>

          {/* Comments Section */}
          <div className="border-t border-secondary-700 pt-12">
            <h3 className="text-2xl font-bold mb-6 text-on-dark">
              Comments ({blog.comments?.length || 0})
            </h3>
            
            {!blog.comments || blog.comments.length === 0 ? (
              <p className="text-secondary-300">No comments yet. Be the first to comment!</p>
            ) : (
              <div className="space-y-6">
                {blog.comments.map((comment, index) => (
                  <div key={index} className="bg-secondary-700 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-secondary-500 rounded-full mr-3 flex items-center justify-center text-on-dark">
                        {comment.user.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-on-dark">{comment.user}</p>
                        <p className="text-xs text-secondary-300">
                          {new Date(comment.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <p className="text-on-dark">{comment.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;