import { formatDate } from "../utils/utils";
export default function BlogCard({blog}) {
  console.log(blog)

 return <li className="prose dark:prose-invert flex gap-3">
    <div className="flex flex-col">
      <span className="text-xs">{formatDate(blog.date)}</span>
      <div className="max-w-[315px] max-h-[150px]">
        <img  className="object-cover h-full w-full" src="https://www.thetalhatahir.com/_next/image?url=%2Fstatic%2Fimages%2Fdevin.png&w=1920&q=75" />
      </div>
    </div>
    <div className="flex flex-col">
      <h3 className="mb-1">{blog.title}</h3>
      <span className="text-green-500 text-xs">TECH, AI, JS, CODE</span>
      <p className="mb-1">Will ai dominate, will jobs be lost lorem lalala lorel loreajfdasjflajf</p>
      <p className="text-green-500">Read more... </p>
    </div>
  </li>;
}
