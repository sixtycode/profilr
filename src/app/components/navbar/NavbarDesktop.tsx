import Link from "next/link";
import { itemsNav } from "./NavItem";

export default function NavbarDesktop() {
  return (
    <>
      <nav className="bg-black text-white dark:bg-neutral-300 dark:text-black sticky shadow-md">
        <div className="hidden sm:ml-6 sm:block mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex space-x-4">
              <Link href="/" className="font-mono font-extrabold text-3xl">
                VHICL
              </Link>
              {itemsNav.map((item) => {
                return (
                  <Link
                    href={item.link}
                    key={item.link}
                    className="hover:font-semibold dark:hover:font-semibold py-1"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
