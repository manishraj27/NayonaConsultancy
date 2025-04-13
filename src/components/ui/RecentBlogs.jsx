
import Heading from './Heading';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import blog1 from '../../assets/images/cards/LPBlogImg1.webp';
import blog2 from '../../assets/images/cards/LPBlogImg4.webp';
import blog3 from '../../assets/images/cards/LPBlogImg3.webp';
import LPBlogCard from './LPBlogCard';
import LPBlogCardSkeleton from './Skeleton/LPBlogCardSkeleton';

const RecentBlogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const images = [blog1, blog2, blog3];

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blogs?limit=3&sort=-createdAt');
        if (!response.ok) throw new Error('Failed to fetch blogs');
        const data = await response.json();
        const blogsWithImages = data.map((blog, index) => ({
          ...blog,
          image: images[index]
        }));

        setBlogs(blogsWithImages);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentBlogs();
  }, []);

  if (loading) {
    return (
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <Heading title="Latest News" description="Blogs" />
          <div className="mt-6 lg:mt-0">
            <Button text="Explore All" theme='dark' onClick={() => navigate('/resources/blogs')} />
          </div>
        </div>
        <div className="space-y-8 pt-20 lg:pt-24">

        <LPBlogCardSkeleton />
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <Heading title="Latest News" description="Blogs" />
        <div className="mt-6 lg:mt-0">
          <Button text="Explore All" theme='dark' onClick={() => navigate('/resources/blogs')} />
        </div>
      </div>
      <div className="space-y-8 pt-20 lg:pt-24">
        {blogs.map((blog, index) => (
          <LPBlogCard key={blog._id || index} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default RecentBlogs;