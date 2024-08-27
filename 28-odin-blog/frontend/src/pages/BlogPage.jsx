import { useParams } from "react-router-dom";

export default function BlogPage() {
  const { blogId } = useParams();
  return <div>blog id is {blogId}</div>;
}
