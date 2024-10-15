import Link from "next/link";
import { itemsNav } from "./NavItem";

export default function NavbarMobile() {
  return (
    <>
      <nav className="bg-black text-white dark:bg-neutral-300 dark:text-black sticky shadow-md">
        <Link
          href="/"
          className="md:hidden sm:hidden bg-black text-white dark:bg-neutral-300 dark:text-black flex flex-1 items-center justify-center sm:items-stretch sm:justify-start h-14 font-mono font-extrabold text-3xl fixed top-0 w-full shadow-md"
        >
          VHICL
        </Link>
        <div className="mb-14"></div>
        {itemsNav.map((item) => {
          return (
            <Link
              href={item.link}
              key={item.link}
              className="md:hidden sm:hidden block h-12 pl-4 py-2 hover:font-semibold dark:hover:font-semibold"
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
