import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="text-black text-center text-sm p-3 pb-20 md:pb-3">
        <span>© </span>
        2024{" "}
        <Link
          href="https://github.com/sixtycode/profilrsix"
          className="text-blue-600 dark:text-blue-100 hover:text-blue-800 dark:hover:text-blue-200 visited:text-purple-600 dark:visited:text-purple-200 hover:underline hover:underline-offset-4"
        >
          sixtycode
        </Link>
        . All Rights Reserved.
      </footer>
    </>
  );
}
