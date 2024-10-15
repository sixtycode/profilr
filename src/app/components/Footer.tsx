import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="text-center text-sm p-3 pb-20 md:pb-3">
        <span>© </span>
        2024{" "}
        <Link
          href="https://github.com/sixtycode/profilrsix"
          className="text-blue-600 hover:underline hover:underline-offset-4"
        >
          sixtycode
        </Link>
        . All Rights Reserved.
      </footer>
    </>
  );
}
