import { useGetPostsQuery } from '../features/posts/postApiSlice'
import { useNavigate } from 'react-router-dom'
import BlogCard from '../components/BlogCard'

const HomePage = () => {
  const { data, error, isLoading } = useGetPostsQuery({ page: 1, limit: 10 })
  const navigate = useNavigate()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  console.log(data)
  const goToPost = (id) => {
    navigate(`/blog/${id}`)
  }
  return (
    <div className="min-w-full flex-grow">
      <h1>Posts</h1>
      <ul>
        {data?.posts?.map((blog) => (
          <BlogCard goToPost={goToPost} key={blog._id} blog={blog} />
        ))}
      </ul>
    </div>
  )
}

export default HomePage
