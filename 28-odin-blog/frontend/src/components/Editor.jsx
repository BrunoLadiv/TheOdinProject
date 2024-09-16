import { useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "../index.css";
import { useCreatePostMutation } from "../features/posts/postApiSlice";

export const Editor = () => {
  const [createPost, { data, error, isLoading }] = useCreatePostMutation();
  const [post, setPost] = useState({ content: null, title: null });
  const handleContentChange = (content) => {
    setPost({ ...post, content });
  };
  const handleTitleChange = (e) => {
    setPost({ ...post, title: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!post.content || !post.title) return;
    createPost(post);
  };
  return (
    <div className="text-editor prose dark:prose-invert">
      <div>
        <input
          type="text"
          name="title"
          onChange={handleTitleChange}
          placeholder="title"
          value={post.title}
        />
      </div>
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={post.content}
        onChange={handleContentChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
      <button
        disabled={!post.title || !post.content || isLoading}
        className="border-zinc-50 bg-black rounded p-6 hover:bg-blue-300"
        onClick={handleSubmit}
      >
        Create post
      </button>
    </div>
  );
};

export default Editor;
