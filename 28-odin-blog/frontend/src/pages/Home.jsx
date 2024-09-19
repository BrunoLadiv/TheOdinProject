import { useGetPostsQuery } from '../features/posts/postApiSlice'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import BlogCard from '../components/BlogCard'

const HomePage = () => {
  const { tag } = useParams()
  const { data, error, isLoading } = useGetPostsQuery({ page: 1, limit: 10, tag })
  const navigate = useNavigate()

  console.log(tag)
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  console.log(data)
  const goToPost = (id) => {
    navigate(`/blog/${id}`)
  }
  const goToTag = (tag) => {
    navigate(`/tags/${tag}`)
  }
  return (
    <div className="min-w-full flex-grow">
      <h1>Posts</h1>
      <ul>
        {data?.posts?.map((blog) => (
          <BlogCard
            goToTag={goToTag}
            goToPost={goToPost}
            key={blog._id}
            blog={blog}
          />
        ))}
      </ul>
    </div>
  )
}

export default HomePage
