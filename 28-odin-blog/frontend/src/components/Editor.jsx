import { useState } from 'react'
import ReactQuill from 'react-quill'
import EditorToolbar, { modules, formats } from './EditorToolbar'
import 'react-quill/dist/quill.snow.css'
import '../index.css'
import { useCreatePostMutation } from '../features/posts/postApiSlice'

export const Editor = () => {
  const [createPost, { data, error, isLoading }] = useCreatePostMutation()
  const [post, setPost] = useState({
    content: null,
    title: null,
    cover_img: null,
    tags: null,
  })
  console.log(post)
  const handleContentChange = (content) => {
    setPost({ ...post, content })
  }
  const handleCoverIMGChange = (e) => {
    setPost({ ...post, cover_img: e.target.value })
  }
  const handleTagsChange = (e) => {

    setPost({ ...post, tags: e.target.value })
  }
  const handleTitleChange = (e) => {
    setPost({ ...post, title: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!post.content || !post.title || !post.cover_img || !post.tags) return
    const tagsArray = post.tags.split(' ').filter((tag) => tag.trim() !== '')
    console.log(tagsArray)
    createPost({...post, tags: tagsArray})
  }
  return (
    <div className="text-editor prose dark:prose-invert">
      <div className="flex flex-col">
        <label>
          Title:
          <input
            type="text"
            name="title"
            onChange={handleTitleChange}
            value={post.title}
          />
        </label>
        <label>
          Cover Image:
          <input
            type="text"
            name="cover_image"
            onChange={handleCoverIMGChange}
            value={post.cover_img}
          />
        </label>
        <label>
          TAGS:
          <input
            type="text"
            name="tags"
            onChange={handleTagsChange}
          />
        </label>
      </div>
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={post.content}
        onChange={handleContentChange}
        placeholder={'Write something awesome...'}
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
  )
}

export default Editor
