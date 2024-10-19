import { useState } from "react";
const CommentForm = ({ slug, createComment }) => {
  const [comment, setComment] = useState({ author: "", content: "" });
  const maxChars = 180;
  const remainingChars = maxChars - comment.content.length;
  const authorMax = comment.author.length > 20;

  function handleSubmit(e) {
    e.preventDefault();
    if (!comment.author || !comment.content || remainingChars < 0) return;
    createComment({ ...comment, slug }).unwrap();
    setComment({ author: "", content: "" });
  }
  function handleComment(e) {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="col-span-full flex flex-col gap-4 md:col-start-2 p-4 prose dark:prose-invert rounded">
      <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
        <label className="flex gap-2 flex-col">
          <span className="text-xl">Leave a comment: </span>
          <input
            placeholder="Your name"
            minLength="3"
            type="text"
            className="pl-4 dark:text-black rounded bg-blue-100"
            name="author"
            value={comment.author}
            onChange={handleComment}
            required
          />
          {authorMax && (
            <span className="text-red-600 text-xs">
              Author name too long, maximum 20 characteres
            </span>
          )}
        </label>
        <div className="relative">
          <textarea
            minLength="3"
            name="content"
            placeholder="What are you thinking?"
            className="p-4 h-[124px] dark:text-black bg-blue-100 resize-none rounded w-full"
            value={comment.content}
            onChange={handleComment}
            required
          />
          <span
            className="absolute bottom-2 right-2"
            style={{ color: remainingChars < 0 ? "red" : "gray" }}
          >
            {remainingChars} characters remaining
          </span>
        </div>
        <button
          disabled={remainingChars < 0 || authorMax}
          className="bg-blue-500 disabled:text-gray-500 disabled:bg-gray-900 disabled:cursor-not-allowed text-white md:w-1/3 w-full self-center hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
