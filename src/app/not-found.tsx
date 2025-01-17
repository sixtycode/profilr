import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "Page did not exist",
};

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white dark:bg-neutral-800 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              className="rounded-full border border-solid transition-colors flex items-center justify-center bg-black dark:bg-transparent text-white dark:text-white gap-2 hover:bg-[#383838] hover:text-white dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
