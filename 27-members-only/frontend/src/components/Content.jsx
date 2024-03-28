import PostCard from './ui/PostCard'
import { useGetPostsQuery } from '../features/api/api'
export default function Content() {
  const { data: posts, isLoading, isError, error } = useGetPostsQuery()
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error: {error.message}</div>
  }
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-center py-4 mx-2 lg:py-20 lg:mx-14">
          <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
            {
              //single card
            }
            {posts.map((post) => {
              return <PostCard key={post._id} post={post} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}
