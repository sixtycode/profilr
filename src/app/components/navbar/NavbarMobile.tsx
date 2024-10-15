import Link from "next/link";
import { itemsNav } from "./NavItem";

export default function NavbarMobile() {
  return (
    <>
      <nav className="bg-black text-white dark:bg-neutral-300 dark:text-black sticky shadow-md">
        <Link
          href="/"
          className="md:hidden sm:hidden block flex flex-1 items-center justify-center sm:items-stretch sm:justify-start h-14 w-auto font-mono font-extrabold text-3xl"
        >
          VHICL
        </Link>
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
