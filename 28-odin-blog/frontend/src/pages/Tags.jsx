import { useGetTagsQuery } from '../features/posts/postApiSlice'
export default function Tags() {
  const { data, isLoading, error } = useGetTagsQuery()
  console.log(data)
  if (isLoading) return <h3>Loading</h3>
  if (error) return <h3>{error.message}</h3>
  return (
    <div className="w-3/5 mx-auto mt-16 min-h-72 flex">
      <h1 className="border-r mr-4 border-blue-500 self-center text-6xl">
        Tags
      </h1>
      <div className="flex h-full my-auto gap-2 flex-wrap items-start">
        {data.map((tag) => {
          return (
            <div className="flex" key={tag._id}>
              <span className="text-blue-500">{tag._id.toUpperCase()} </span>
              <span className="text-gray-500">({tag.count})</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
