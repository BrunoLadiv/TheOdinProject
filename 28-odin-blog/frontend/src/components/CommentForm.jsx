import { useState } from "react";
const CommentForm = ({ slug, createComment }) => {
  const [comment, setComment] = useState({ author: "", content: "" });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(comment.author, comment.content, slug);
    if (!comment.author || !comment.content) return;
    createComment({ ...comment, slug }).unwrap();
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
            type="text"
            className="pl-4 rounded bg-blue-100"
            name="author"
            value={comment.author}
            onChange={handleComment}
          />
        </label>
        <textarea
          name="content"
          placeholder="What are you thinking?"
          className="p-4 h-[124px] bg-blue-100 resize-none rounded w-full"
          value={comment.content}
          onChange={handleComment}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
