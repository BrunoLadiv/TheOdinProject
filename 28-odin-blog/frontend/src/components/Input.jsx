const Input = (props) => {
  return (
    <div className="w-full prose dark:prose-invert h-12 relative flex">
      <input
        required
        className="peer w-full bg-transparent outline-none px-4 text-base bg-white border border-[#4070f4] focus:shadow-md"
        {...props}
        placeholder=""
      />
      <label
        className="absolute top-1/2 translate-y-[-50%] bg-white dark:bg-[--bg-dm] left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peerrfocus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4]  duration-150"
      >
        {props.placeholder}
      </label>
    </div>
  )
}

export default Input
