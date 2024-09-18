import { formatDate } from "../utils/utils";
export default function BlogCard({blog, goToPost}) {
  console.log(blog)

 return <li className="border-b mx-auto min-w-full border-gray-500 mb-5 prose dark:prose-invert flex flex-wrap gap-5">
    <div className="flex flex-col">
      <div onClick={()=>goToPost(blog._id)} className="w-[315px] h-[215px] overflow-hidden cursor-pointer">
        <img  className="object-cover h-full w-full transition-transform duration-300 hover:scale-125" src="https://www.thetalhatahir.com/_next/image?url=%2Fstatic%2Fimages%2Fdevin.png&w=1920&q=75" />
      </div>
      <p className="text-xs">{formatDate(blog.date)}</p>
    </div>
    <div className="flex flex-col">
      <h3 onClick={()=>goToPost(blog._id)} className="mb-1 cursor-pointer">{blog.title}</h3>

      <span className="text-green-500 text-xs">TECH, AI, JS, CODE</span>
      <p className="mb-1">Will ai dominate, will jobs be lost lorem lalala lorel loreajfdasjflajf</p>
      <p onClick={()=>goToPost(blog._id)} className="text-green-500 cursor-pointer">Read more... </p>
    </div>
  </li>;
}
