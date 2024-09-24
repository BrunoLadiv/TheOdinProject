const Comments = ({ comment }) => {
  console.log(comment);
  return (
    <div className="md:col-start-2 col-span-full border-t border-blue-700 dark:border-white p-4 prose dark:prose-invert mb-4">
      <div className="flex items-center gap-2">
        <h5>{comment.author}</h5>
        <span className="text-xs text-center my-0 text-gray-500">
          12 min ago
        </span>
      </div>
      <p className="mt-2 text-gray-500">{comment.content}</p>
    </div>
  );
};

export default Comments;
