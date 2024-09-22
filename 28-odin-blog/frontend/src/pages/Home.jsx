import { useGetPostsQuery } from "../features/posts/postApiSlice";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const { tag } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(location);
  console.log(searchParams);
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const { data, error, isLoading } = useGetPostsQuery({
    page: currentPage,
    limit: 10,
    tag,
  });
  const handlePageChange = (newPage) => {
    // Update the query param for page
    setSearchParams({ page: newPage });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  const goToPost = (id) => {
    navigate(`/blog/${id}`);
  };
  const goToTag = (tag) => {
    navigate(`/tags/${tag}`);
  };
  return (
    <div className="min-w-full flex-grow">
      <h1>Posts</h1>
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
