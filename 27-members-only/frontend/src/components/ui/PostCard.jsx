import { useGetByIdQuery } from '../../features/auth/authApiSlice'
import { useSelector } from 'react-redux'
import convertTime from '../../utils/convertTime'
export default function PostCard({ post }) {
  const { data } = useGetByIdQuery(post.author)
  const user = useSelector((state) => state.auth.user)
  const { day, month, year, hours, minutes, amOrPm } = convertTime(post.date)
  return (
    <div className="flex items-center justify-center flex-shrink-0 w-full h-full bg-white border border-gray-200 rounded-md shadow-none cursor-pointer hover:shadow-lg">
      <div className="flex flex-col space-y-1.5 items-start flex-1 h-[184px] md:h-[194px] px-4 py-5 max-w-xs lg:max-w-full md:max-w-full overflow-hidden">
        <div className="flex flex-row mb-4">
          <div>
            <img
              className="rounded-full"
              src="https://i.ibb.co/NmrRq3F/Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1.png"
              alt="avatar"
            />
          </div>
          <div className="ml-2">
            <p
              className={`text-sm font-medium leading-none text-gray-400 ${
                user?.isMember ? 'text-gray-800' : ''
              }`}
            >
              {user?.isMember
                ? data?.user.fullName
                : 'Join the club to see details'}
            </p>
            <div className="flex justify-start mt-1 space-x-6">
              <div className="flex justify-between text-white">
                {user?.isMember && (
                  <svg
                    className="mr-1 fill-current"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 2.5H3C2.44772 2.5 2 2.94772 2 3.5V9.5C2 10.0523 2.44772 10.5 3 10.5H9C9.55228 10.5 10 10.0523 10 9.5V3.5C10 2.94772 9.55228 2.5 9 2.5Z"
                      stroke="#4B5563"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 1.5V3.5"
                      stroke="#4B5563"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 1.5V3.5"
                      stroke="#4B5563"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 5.5H10"
                      stroke="#4B5563"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <p className="text-sm leading-none text-gray-600">
                  {user?.isMember && `${day} ${month}, ${year} `}
                </p>
              </div>
              <div className="flex justify-end text-white">
                {user?.isMember && (
                  <svg
                    className="mx-1 fill-current"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5Z"
                      stroke="#4B5563"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 3.5V6L7.5 7.5"
                      stroke="#4B5563"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <p className="text-sm leading-none text-gray-600">
                  {user?.isMember && `${hours}:${minutes} ${amOrPm}`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm font-medium leading-none text-gray-800">
          {post.title}
        </p>
        <p className="text-sm break-words leading-tight whitespace-normal  text-gray-600">
          {post.content}
        </p>
      </div>
    </div>
  )
}
