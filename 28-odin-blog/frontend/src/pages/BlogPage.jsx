import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../features/posts/postApiSlice.js";
import AuthorCard from "../components/authorCard";

export default function BlogPage() {
  const { slug } = useParams();
  const { data, isLoading, error } = useGetPostQuery({ slug });
  console.log(data);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;
  return (
    <div className="grid mt-12 gap-8 grid-cols-4">
      <div className="mt-24">
        <div className="flex flex-col gap-2">
          <p className="text-xs">AUTHOR</p>
          <AuthorCard />
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-xs">TAGS</p>
          <div className="flex gap-2 text-green-600 dark:text-[#ea76cb]">
            <p>Tech</p>
            <p>Ai</p>
            <p>ChatGPT</p>
          </div>
        </div>
      </div>
      <div className="prose dark:prose-invert col-span-3">
        <h1>{data.post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
      </div>
    </div>
  );
}
