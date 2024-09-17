import { FaGithubAlt } from "react-icons/fa";

export default function AuthorCard() {
  return (
    <div className="flex gap-2 prose dark:prose-invert">
      <img
        className="rounded-full h-12 w-12"
        src="https://avatars.githubusercontent.com/u/32538094?v=4"
        alt="author image"
      />
      <div>
        <div>Bruno Vidal</div>
        <div className="flex gap-1">
          <FaGithubAlt className="text-2xl" />
          <a
            href="https://github.com/BrunoLadiv"
            target="_blank"
            className="text-[#ef9f76]"
          >
            @BrunoLadiv
          </a>
        </div>
      </div>
    </div>
  );
}
