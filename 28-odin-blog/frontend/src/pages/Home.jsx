import { useGetPostsQuery } from "../features/posts/postApiSlice";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { data, error, isLoading } = useGetPostsQuery({ page: 1, limit: 10 });
  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  const goToPost = (id) => {
    navigate(`/blog/${id}`);
  };
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data?.posts?.map((post) => (
          <li
            className="border-solid border-2 border-red-800 p-9"
            key={post._id}
            onClick={() => goToPost(post._id)}
          >
            <h2>{post.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
