import { useGetTagsQuery } from "../features/posts/postApiSlice";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
export default function Tags() {
  const { data, isLoading, error } = useGetTagsQuery();
  const navigate = useNavigate();
  const goToTag = (tag) => {
    navigate(`/tags/${tag}`);
  };

  if (isLoading) return <Loader />;
  if (error) return <h3>{error.message}</h3>;

  return (
    <div className="w-3/5 mx-auto mt-16 min-h-72 flex flex-wrap">
      <h1 className="border-r mr-4 border-blue-500 self-center text-6xl">
        Tags
      </h1>
      <div className="flex mt-4 md:mt-0 h-full gap-2 flex-wrap items-start">
        {data.map((tag) => {
          return (
            <div
              className="flex hover:text-pink-500 cursor-pointer"
              key={tag._id}
              onClick={() => goToTag(tag._id)}
            >
              <span className="text-blue-500">{tag._id.toUpperCase()} </span>
              <span className="text-gray-500">({tag.count})</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
