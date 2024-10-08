import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  useGetPostQuery,
  useAddCommentMutation,
} from "../features/posts/postApiSlice.js";
import AuthorCard from "../components/authorCard";
import Loader from "../components/Loader.jsx";
import Comment from "../components/Comment.jsx";
import CommentForm from "../components/CommentForm.jsx";

export default function BlogPage() {
  const { slug } = useParams();
  const { pathname } = useLocation();

  const [
    createComment,
    { data: commentData, error: commentError, isLoading: commentIsLoading },
  ] = useAddCommentMutation();
  const { data, isLoading, error } = useGetPostQuery({ slug });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (commentData && commentData._id) {
      const commentID = commentData._id;

      setTimeout(() => {
        const element = document.getElementById(commentID);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  }, [commentData]);

  if (isLoading) return <Loader />;
  if (error) return <h1>Error</h1>;
  return (
    <div className="grid px-2 md:mt-12 gap-4 grid-cols-4">
      <div className="md:mt-24">
        <div className="flex flex-col gap-2">
          <p className="text-xs">AUTHOR</p>
          <AuthorCard />
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-xs">TAGS</p>
          <div className="flex gap-2 text-green-600 dark:text-[#ea76cb]">
            {data.post.tags.map((tag) => (
              <Link to={`/tags/${tag}`}>{tag.toUpperCase()}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="prose dark:prose-invert md:col-span-3 col-span-4">
        <h1>{data.post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
      </div>
      <h2 className="md:col-start-2 text-xl">Comments </h2>
      <div className="md:col-start-2 col-span-full">
        {data?.post.comments.map((comment) => {
          return <Comment key={comment._id} comment={comment} />;
        })}
      </div>
      <CommentForm createComment={createComment} slug={slug} />
    </div>
  );
}
