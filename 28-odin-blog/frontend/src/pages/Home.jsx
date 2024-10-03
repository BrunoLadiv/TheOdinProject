import { useGetPostsQuery } from "../features/posts/postApiSlice";
import { useSearchParams, useNavigate } from "react-router-dom";

import Hero from "../components/Hero";
import { useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

const HomePage = () => {
  const { tag } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const { data, error, isLoading } = useGetPostsQuery({
    page: currentPage,
    limit: 10,
    tag,
  });
  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage });
  };

  if (isLoading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;
  const goToPost = (id) => {
    navigate(`/blog/${id}`);
  };
  const goToTag = (tag) => {
    navigate(`/tags/${tag}`);
  };
  return (
    <div className="md:mt-8 md:p-4 min-w-full flex-grow">
      <Hero />
      <h4 className="text-gray-500 md:text-xl mb-2 ml-2">
        {tag ? tag.toUpperCase() + `(${data.posts.length})` : "Latest"}
      </h4>
      <ul>
        {data?.posts?.map((blog) => (
          <BlogCard
            goToTag={goToTag}
            goToPost={goToPost}
            key={blog._id}
            blog={blog}
          />
        ))}
      </ul>
      <Pagination
        handlePageChange={handlePageChange}
        currentPage={data.currentPage}
        totalPages={data.totalPages}
      />
    </div>
  );
};

export default HomePage;
