import { Metadata } from "next";
import RandomUser from "@/app/api/random-user";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services",
  description: "Services We Provide",
};

export default async function Services() {
  const custData = await RandomUser(3, "nomail");

  const custReview = [
    {
      name: `${custData.results[0].name.first} ${custData.results[0].name.last}`,
      role: "Automotives Geek",
      imageUrl: custData.results[0].picture.large,
      review:
        "I get what i want to get, VHICL delivers great content almost daily without reducing qualities over quantities.",
    },
    {
      name: `${custData.results[1].name.first} ${custData.results[1].name.last}`,
      role: "Petrolhead",
      imageUrl: custData.results[1].picture.large,
      review:
        "I was hesitant to try VHICL at first, but I'm so glad I did - it's exceeded all of my expectations.",
    },
    {
      name: `${custData.results[2].name.first} ${custData.results[2].name.last}`,
      role: "Car Guy",
      imageUrl: custData.results[2].picture.large,
      review:
        "VHICL stands out as the most user-friendly and effective solution I've ever used.",
    },
  ];

  return (
    <>
      <main className="grid place-items-center px-6 py-6 md:px-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            <s>$123.12</s> CLAIM TODAY ONLY $108/YEAR
            <br /> <mark className="text-3xl font-normal">VAT INCLUDED!</mark>
          </h1>
          <p className="text-base leading-7 mb-8">
            immediately send instagram direct message, type coupon:{" "}
            <Link
              href="https://instagram.com/sixtycode"
              className="text-3xl text-blue-600 dark:text-blue-100 hover:text-blue-800 dark:hover:text-blue-200 visited:text-purple-600 dark:visited:text-purple-200 underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              VHICL
            </Link>
          </p>
          <div className="grid md:flex md:grid-cols-2">
            {custReview.map((customer) => (
              <div
                key={customer.role}
                className="mb-8 md:mx-2 group border border-solid rounded-2xl p-6 transition-all duration-500 w-full lg:w-auto hover:border-indigo-600"
              >
                <div className="flex items-center mb-4 gap-2 text-amber-500 transition-all duration-500 group-hover:text-indigo-600">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="text-lg lg:mt-8 text-justify leading-8 h-24 transition-all duration-500 mb-10 md:mb-40 lg:mb-20">
                  {customer.review}
                </p>
                <div className="flex items-center gap-5">
                  <Image
                    src={customer.imageUrl}
                    width={64}
                    height={64}
                    alt="VHICL Customer"
                    className="rounded-full object-cover"
                  />
                  <div className="grid gap-1">
                    <h5 className="font-medium text-xl md:text-left md:text-sm lg:text-xl transition-all duration-500 group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                      {customer.name}
                    </h5>
                    <span className="text-lg leading-6 md:text-xs lg:text-sm">
                      {customer.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link
          href="/news"
          className="font-bold text-center text-3xl lg:text-6xl w-full rounded border py-8"
          target="_blank"
          rel="noopener noreferrer"
        >
          MEMBERSHIP PREVIEW CLICK ME!
        </Link>
      </main>
    </>
  );
}
