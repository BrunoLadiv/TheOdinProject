import { useState } from 'react'
import Button from './ui/Button'
import Dropdown from './ui/Dropdown'
import NewPostModal from './ui/NewPostModal'
import SignUpModal from './ui/SignUpModal'
import SignInModal from './ui/SignInModal'
import BecomeMemberModal from './ui/BecomeMemberModal'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../features/auth/authSlice'
import { Link } from 'react-router-dom'
import userAvatar from '../assets/user.png'
export default function Header() {
  const [rotate, setRotate] = useState(false)
  const [show, setShow] = useState(false)
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const [showNewPostModal, setShowNewPostModal] = useState(false)
  const [showSigInModal, setShowSignInModal] = useState(false)
  const [showSigUpModal, setShowSignUpModal] = useState(false)
  const [showBecomeMemberModal, setShowBecomeMemberModal] = useState(false)

  return (
    <div className="bg-gray-200">
      {showBecomeMemberModal && (
        <BecomeMemberModal
          setShowBecomeMemberModal={setShowBecomeMemberModal}
        />
      )}
      <div className="relative h-full ">
        {showSigInModal && (
          <SignInModal
            setShowSignInModal={setShowSignInModal}
            setShowSignUpModal={setShowSignUpModal}
          />
        )}
        {showSigUpModal && (
          <SignUpModal
            setShowSignUpModal={setShowSignUpModal}
            setShowSignInModal={setShowSignInModal}
          />
        )}
        {showNewPostModal && (
          <NewPostModal setShowNewPostModal={setShowNewPostModal} />
        )}
        <div className="bg-white">
          <div className="2xl:container 2xl:mx-auto">
            <nav className>
              <div className="flex flex-row justify-between ">
                <Link
                  to="/"
                  className="flex items-center py-5 py-6 pl-4 pr-8 space-x-3 lg:pl-7 sm:pl-6"
                >
                  <svg
                    className="cursor-pointer"
                    width={34}
                    height={34}
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
                      fill="#1F2937"
                    />
                  </svg>
                  <h1 className="text-2xl font-normal leading-6 text-gray-800 ">
                    OpinionBoard
                  </h1>
                </Link>
                {/* For large (i.e. desktop and laptop sized screen) */}
                <div className="flex-row justify-between flex-auto hidden py-6 border-l border-r border-gray-200 lg:flex px-7">
                  {user && (
                    <div className>
                      <p className="text-xs font-normal leading-3 text-gray-600 ">
                        {user.fullName}
                      </p>
                      <h3 className="mt-2 text-xl font-bold leading-5 text-gray-800 ">
                        Welcome Back
                      </h3>
                    </div>
                  )}
                  {user && (
                    <Button onClick={() => setShowNewPostModal(true)}>
                      New Post
                    </Button>
                  )}
                </div>
                {!user && (
                  <div className="flex items-center hidden mx-10 sm:flex">
                    <Button
                      onClick={() => setShowSignUpModal(true)}
                      type="secondary"
                    >
                      Sign Up
                    </Button>
                    <Button onClick={() => setShowSignInModal(true)}>
                      Login
                    </Button>
                  </div>
                )}
                {/* user signed in */}
                {user && (
                  <div className="relative flex-row justify-end hidden py-6 pl-8 pr-4 sm:flex lg:pr-7 sm:pr-6">
                    {rotate && (
                      <Dropdown
                        setShowBecomeMemberModal={setShowBecomeMemberModal}
                      />
                    )}
                    <div className="flex flex-row items-center justify-center ">
                      <img
                        className="w-10 h-10 "
                        src={userAvatar}
                        width={'40px'}
                        alt="individual person image-3"
                      />
                      <div className="ml-2">
                        <p className="text-lg font-semibold leading-4 text-gray-800">
                          {user.fullName}
                        </p>
                        <p className="mt-1 text-xs font-normal leading-3 text-gray-600 ">
                          {user.email}
                        </p>
                      </div>
                      <svg
                        //call dropdown here

                        onClick={() =>
                          showNewPostModal
                            ? setRotate(false)
                            : setRotate(!rotate)
                        }
                        className={`${
                          rotate ? 'rotate-180' : ''
                        } cursor-pointer transform duration-100 xl:ml-7 lg:ml-3.5 ml-2 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800`}
                        width={14}
                        height={8}
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L7 7L13 1"
                          stroke="#1F2937"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
                {/* mobile menu */}

                <div
                  id="bgIcon"
                  onClick={() => setShow(!show)}
                  className="block py-6 pr-4 cursor-pointer focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 sm:hidden lg:pr-7 sm:pr-6"
                >
                  <svg
                    className={`${show ? 'hidden' : ''}`}
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="duration-150 transform "
                      d="M4 6H20"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 12H20"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="duration-150 transform "
                      d="M4 18H20"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    className={`${show ? '' : 'hidden'} `}
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              {/* for medium-sized devices */}
              <div className="flex-col hidden px-4 lg:hidden sm:flex lg:px-7 sm:px-6 ">
                <hr className="w-full bg-gray-200 " />
                <div className>
                  {user && (
                    <div className="flex flex-row justify-between flex-auto pb-4 mt-3 lg:hidden">
                      <p className="text-xs font-normal leading-3 text-gray-600 ">
                        {user.fullName}
                      </p>
                      <h3 className="mt-2 text-xl font-bold leading-5 text-gray-800 ">
                        Welcome Back
                      </h3>
                    </div>
                  )}
                  {user && (
                    <Button onClick={() => setShowNewPostModal(true)}>
                      New Post
                    </Button>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Mobile and Small devices Navigation */}
        <div
          id="MobileNavigation"
          className={`${show ? '' : 'hidden'}  sm:hidden h-full bg-white `}
        >
          <div className="flex flex-col justify-between h-full ">
            <div className="flex flex-col px-4 lg:px-7 sm:px-6">
              <hr className="w-full bg-gray-200 " />
              <div className="flex flex-row justify-between flex-auto pb-4 mt-3 lg:hidden">
                {user && (
                  <div className>
                    <p className="text-xs font-normal leading-3 text-gray-600 ">
                      {user.fullName}
                    </p>
                    <h3 className="mt-2 text-xl font-bold leading-5 text-gray-800 ">
                      Welcome Back
                    </h3>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-end h-full mt-12 ">
              {!user && (
                <Button onClick={() => setShowSignInModal(true)}>Login</Button>
              )}
              {!user && (
                <Button onClick={() => setShowSignUpModal(true)}>
                  Sign Up
                </Button>
              )}
              {user && (
                <Button onClick={() => setShowNewPostModal(true)}>
                  New Post
                </Button>
              )}
              {user && !user?.isMember && (
                <Button onClick={() => setShowBecomeMemberModal(true)}>
                  Become a member
                </Button>
              )}

              {user && (
                <Button>
                  <Link to="/my-posts">My Posts </Link>
                </Button>
              )}
              {user && (
                <Button onClick={() => dispatch(logout())}>Logout</Button>
              )}
            </div>
            {user && (
              <div className="bottom-0 left-0 flex flex-row items-center w-full px-8 py-6 bg-gray-100 ">
                <img
                  className="w-10 h-10 "
                  src={userAvatar}
                  width={'40px'}
                  alt="individual person image-3"
                />
                <div className="ml-2">
                  <p className="text-lg font-semibold leading-4 text-gray-800">
                    {user.fullName}
                  </p>
                  <p className="mt-1 text-xs font-normal leading-3 text-gray-600 ">
                    {user.email}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
