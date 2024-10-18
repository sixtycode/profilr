import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "News",
  description: "Automotives Newsletter",
};

export default function News() {
  return (
    <>
      <div className="px-4 py-8 md:px-8 lg:px-16">
        <div className="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
            <div className="flex items-center">
              <Image
                src="https://pagedone.io/asset/uploads/1696244317.png"
                width={128}
                height={128}
                alt="VHICL Picture"
                className="rounded-t-2xl w-full object-cover"
              />
            </div>
            <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
              <span className="text-indigo-600 font-medium mb-3 block">
                Jan 01, 2023
              </span>
              <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                Clever ways to invest in product to organize your portfolio
              </h4>
              <p className="text-gray-500 leading-6 mb-10">
                Discover smart investment strategies to streamline and organize
                your portfolio..
              </p>
              <Link
                href="/news/example"
                className="cursor-pointer text-lg text-indigo-600 font-semibold dark:text-blue-100 hover:text-blue-800 dark:hover:text-blue-200 visited:text-purple-600 dark:visited:text-purple-200 underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more..
              </Link>
            </div>
          </div>
          <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
            <div className="flex items-center">
              <Image
                src="https://pagedone.io/asset/uploads/1696244340.png"
                width={128}
                height={128}
                alt="VHICL Picture"
                className="rounded-t-2xl w-full object-cover"
              />
            </div>
            <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
              <span className="text-indigo-600 font-medium mb-3 block">
                Feb 01, 2023
              </span>
              <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                How to grow your profit through systematic investment with us
              </h4>
              <p className="text-gray-500 leading-6 mb-10">
                Unlock the power of systematic investment with us and watch your
                profits soar. Our..
              </p>
              <Link
                href="/news/example"
                className="cursor-pointer text-lg text-indigo-600 font-semibold dark:text-blue-100 hover:text-blue-800 dark:hover:text-blue-200 visited:text-purple-600 dark:visited:text-purple-200 underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more..
              </Link>
            </div>
          </div>
          <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
            <div className="flex items-center">
              <Image
                src="https://pagedone.io/asset/uploads/1696244356.png"
                width={128}
                height={128}
                alt="VHICL Picture"
                className="rounded-t-2xl w-full object-cover"
              />
            </div>
            <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
              <span className="text-indigo-600 font-medium mb-3 block">
                Mar 01, 2023
              </span>
              <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                How to analyze every holdings of your portfolio
              </h4>
              <p className="text-gray-500 leading-6 mb-10">
                Our comprehensive guide will equip you with the tools and
                insights needed to..
              </p>
              <Link
                href="/news/example"
                className="cursor-pointer text-lg text-indigo-600 font-semibold dark:text-blue-100 hover:text-blue-800 dark:hover:text-blue-200 visited:text-purple-600 dark:visited:text-purple-200 underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more..
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
