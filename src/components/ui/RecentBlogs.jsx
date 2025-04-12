import BlogCard from './BlogCard';
import blog1 from "../../assets/images/cards/BLOG1.png"
import Heading from './Heading';
import Button from './Button';
const RecentBlogs = () => {
  const blogs = [
    {
      date: "February 19, 2024",
      title: "Oracle EPM Cloud Implementation Best Practices",
      description: "Discover the key strategies and best practices for successful Oracle EPM Cloud implementation that can transform your financial planning and analysis.",
      tag: "EPM",
      slug: "epm-cloud-implementation",
      image: blog1,
      shortTitle: "EPM Cloud"
    },
    {
      date: "February 15, 2024",
      title: "Financial Planning & Analysis in the Digital Age",
      description: "Learn how modern FP&A solutions are revolutionizing financial planning and decision-making processes in organizations.",
      tag: "Finance",
      slug: "modern-fpa-solutions",
      image: blog1,
      shortTitle: "FP&A"
    },
    // Add more blog posts as needed
  ];

  return (
    <section className="container mx-auto px-4 lg:px-8 py-16">
      <Heading title="Latest News" description="Blogs" />
      <Button text="Explore All" theme='dark' onClick={() => {}} />
      <div className="space-y-8 pt-28">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default RecentBlogs;