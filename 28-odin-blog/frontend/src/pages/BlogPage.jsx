import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../features/posts/postApiSlice.js";

export default function BlogPage() {
  const { blogId } = useParams();
  const { data, isLoading, error } = useGetPostQuery({ id: blogId });
  console.log(data);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;
  return (
    <div className="prose">
      <h1>{data.post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
    </div>
  );
}
