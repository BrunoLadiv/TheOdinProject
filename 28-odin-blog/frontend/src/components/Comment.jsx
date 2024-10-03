import { timeAgo } from "../utils/utils";
const Comments = ({ comment }) => {
  return (
    <div
      id={comment._id}
      className="md:col-start-2 col-span-full border-t border-blue-700 dark:border-white p-4 prose dark:prose-invert mb-4"
    >
      <div className="flex items-center gap-2">
        <h5 className="dark:text-white">{comment.author}</h5>
        <span className="text-xs text-center my-0 text-gray-500">
          {timeAgo(comment.date)}
        </span>
      </div>
      <p className="mt-0 text-gray-500 dark:text-gray-300">{comment.content}</p>
    </div>
  );
};

export default Comments;
