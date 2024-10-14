import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="bg-black text-white dark:bg-neutral-200 dark:text-black">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex space-x-4">
              <Link href="/" className="font-extrabold">
                VHICL
              </Link>
              <Link
                href="/about"
                className="hover:font-semibold dark:hover:font-semibold"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="hover:font-semibold dark:hover:font-semibold"
              >
                Services
              </Link>
              <Link
                href="/teams"
                className="hover:font-semibold dark:hover:font-semibold"
              >
                Teams
              </Link>
              <Link
                href="/gallery"
                className="hover:font-semibold dark:hover:font-semibold"
              >
                Gallery
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
