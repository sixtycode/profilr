import Link from "next/link";
import {
  RiLinkedinBoxLine,
  RiYoutubeLine,
  RiInstagramLine,
  RiTiktokLine,
  RiMoonClearLine,
} from "react-icons/ri";

export default function Footer() {
  return (
    <>
      <footer className="text-black dark:text-white text-center text-sm p-3 pb-20 md:pb-3">
        <div className="flex justify-center text-2xl gap-12">
          <button aria-label="linkedin">
            <Link
              aria-label="button-linkedin"
              href="https://linkedin.com/in/viosagara"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiLinkedinBoxLine />
            </Link>
          </button>
          <button aria-label="youtube">
            <Link
              aria-label="button-youtube"
              href="https://youtube.com/@sagaravio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiYoutubeLine />
            </Link>
          </button>
          <button aria-label="instagram">
            <Link
              aria-label="button-instagram"
              href="https://instagram.com/sagaravio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramLine />
            </Link>
          </button>
          <button aria-label="tiktok">
            <Link
              aria-label="button-tiktok"
              href="https://tiktok.com/@sgrvio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTiktokLine />
            </Link>
          </button>
        </div>
        <span>© </span>
        2024{" "}
        <Link
          href="https://github.com/sixtycode/profilrsix"
          className="text-blue-600 dark:text-blue-100 hover:text-blue-800 dark:hover:text-blue-200 visited:text-purple-600 dark:visited:text-purple-200 underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          sixtycode
        </Link>
        . All Rights Reserved.
        <div className="fixed bottom-4 right-4">
          <button
            aria-label="darktoggle"
            className="py-4 px-4 rounded-full shadow-md"
          >
            <Link
              aria-label="button-zustand"
              href="/zustandgo"
              rel="noopener noreferrer"
              className="text-4xl"
            >
              <RiMoonClearLine />
            </Link>
          </button>
        </div>
      </footer>
    </>
  );
}
