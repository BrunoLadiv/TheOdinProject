import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "../index.css";
import {
  useCreatePostMutation,
  useUpdatePostMutation,
} from "../features/posts/postApiSlice";
import Input from "./Input";
import { useNavigate, useLocation } from "react-router-dom";

export const Editor = () => {
  const [createPost, { data, error, isLoading }] = useCreatePostMutation();
  const [
    updatePost,
    { data: updatedData, error: updatingError, isLoading: updatingIsLoading },
  ] = useUpdatePostMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const { blog } = location.state || {};
  const editMode = location.pathname == "/edit-blog";
  const [post, setPost] = useState(
    blog || {
      content: "",
      title: "",
      cover_img: "",
      tags: "",
      description: "",
    },
  );
  const tagsArray =
    post.tags instanceof Array
      ? post.tags
      : post.tags
          .split(",")
          .filter((tag) => tag.trim() !== "")
          .map((tag) => tag.toLowerCase());
  useEffect(() => {
    if (data?.post.slug) {
      navigate(`/blog/${data?.post.slug}`);
    }
    if (editMode && !blog) {
      navigate("/");
    }
    if (updatedData?.slug) {
      navigate(`/blog/${updatedData?.slug}`);
    }
  }, [navigate, data, blog, location, updatedData]);

  const handlePost = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleContentChange = (content) => {
    setPost({ ...post, content });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !post.description ||
      !post.content ||
      !post.title ||
      !post.cover_img ||
      !post.tags
    )
      return;
    if (editMode) {
      updatePost({ ...post, tags: tagsArray });
      return;
    }
    createPost({ ...post, tags: tagsArray });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="text-editor prose dark:prose-invert"
    >
      <div className="flex gap-4 mb-4 flex-col">
        <Input
          type="text"
          name="title"
          placeholder="Blog Title"
          onChange={handlePost}
          value={post.title}
        />
        <Input
          type="text"
          placeholder="Description"
          name="description"
          onChange={handlePost}
          value={post.description}
        />
        <Input
          type="text"
          placeholder="Cover image"
          name="cover_img"
          onChange={handlePost}
          value={post.cover_img}
        />
        <Input
          type="text"
          placeholder="Tags"
          value={post.tags}
          name="tags"
          onChange={handlePost}
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
      {error && (
        <p className="text-red-700 text-center m-0 mt-2">
          Error: {error?.data.message}
        </p>
      )}
      <button
        disabled={isLoading}
        className="w-full bg-blue-500 text-white text-xl p-2  mt-4 disabled:bg-gray-200 disabled:cursor-not-allowed rounded"
      >
        {editMode ? "Update" : "Create"} Blog
      </button>
    </form>
  );
};

export default Editor;
