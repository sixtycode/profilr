import { Metadata } from "next";
import RandomUser from "@/app/api/random-user";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    template: "Vhicl I %s",
    default: "Vhicl I Vehicle For Today",
  },
  description: "Vehicle for Daily Drive",
};

export default async function Home() {
  const testimonialData = await RandomUser(4, "nomail");

  const endorsement = [
    {
      name: `${testimonialData.results[0].name.first} ${testimonialData.results[0].name.last}`,
      role: "BMW Car Enthusiast",
      imageUrl: testimonialData.results[0].picture.large,
    },
    {
      name: `${testimonialData.results[1].name.first} ${testimonialData.results[1].name.last}`,
      role: "Photographer at CarFreeDay",
      imageUrl: testimonialData.results[1].picture.large,
    },
    {
      name: `${testimonialData.results[2].name.first} ${testimonialData.results[2].name.last}`,
      role: "Journalist at Vintage Media",
      imageUrl: testimonialData.results[2].picture.large,
    },
    {
      name: `${testimonialData.results[3].name.first} ${testimonialData.results[3].name.last}`,
      role: "Forza Horizon Gamers",
      imageUrl: testimonialData.results[3].picture.large,
    },
  ];

  return (
    <>
      <main className="grid place-items-center px-4 py-8 sm:py-8 lg:px-4">
        <div className="text-center">
          <div className="grid md:flex place-items-center">
            <h2 className="lg:pr-20 lg:pl-36 mb-2 text-4xl tracking-tight font-extrabold text-left">
              Explore Latest or even Vintage!
              <br /> because why not?
              <p className="mt-8 text-base tracking-tight font-normal sm:py-8 md:mb-8 mb-4">
                Surf the Large Media and VHICL mission to bring joy in vast
                majority <br /> Vehicle Wonderful World without any hassle!
              </p>
            </h2>
            <iframe
              src="https://youtube.com/embed/DNAcIPy4SdY"
              loading="lazy"
              width="400"
              height="600"
              picture-in-picture
              allowFullScreen
              className="px-8 mb-4 md:px-12 md:pr-4 md:mb-10"
            ></iframe>
          </div>
          <p>
            Company overview: This section should provide a more detailed
            overview of the company, its history, its team, and its culture.
          </p>
          <p>
            Products or services: This section should highlight the
            company&apos;s products or services. It should include brief
            descriptions of each product or service, as well as calls to action
            that encourage visitors to learn more.
          </p>
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
                Testimonials
              </h2>
              <p className="mb-6 font-light sm:text-xl">
                Integrity is Priority and Customers are Brainstormers to us
                <br />
                <em>Keep Improve</em>.
              </p>
            </div>
            <div className="grid lg:grid-cols-2">
              <figure className="flex flex-col justify-center items-center p-8 text-center border-b md:p-12 lg:border-r">
                <blockquote className="mx-auto mb-8 max-w-2xl">
                  <h3 className="text-lg font-semibold">
                    Speechless with how easy this was to Collaborate
                  </h3>
                  <p className="my-4">
                    &quot;The Nature of being as simple as possible really
                    drives everything easier, also a lot of option are quite
                    nice with good offering
                  </p>
                  <p className="my-4">
                    If you care for your time, I hands down would go with
                    this.&quot;
                  </p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                  <Image
                    src={endorsement[0].imageUrl}
                    width={128}
                    height={128}
                    alt="profile picture"
                    className="w-9 h-9 rounded-full"
                  ></Image>
                  <div className="space-y-0.5 font-medium text-left">
                    <div>{endorsement[0].name}</div>
                    <div className="text-sm font-light">
                      {endorsement[0].role}
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center border-b md:p-12 lg:border-l">
                <blockquote className="mx-auto mb-8 max-w-2xl">
                  <h3 className="text-lg font-semibold">
                    Solid foundation for any project
                  </h3>
                  <p className="my-4">
                    &quot;Professional, responsive, and able to keep up with
                    ever-changing demand and tight deadlines: That&apos;s how I
                    would describe Vio and his team at VHICL Company. When it
                    comes to content marketing, you&apos;ll definitely get the
                    5-star treatment!.&quot;
                  </p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                  <Image
                    src={endorsement[1].imageUrl}
                    width={128}
                    height={128}
                    alt="profile picture"
                    className="w-9 h-9 rounded-full"
                  ></Image>
                  <div className="space-y-0.5 font-medium text-left">
                    <div>{endorsement[1].name}</div>
                    <div className="text-sm font-light">
                      {endorsement[1].role}
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center border-t md:p-12 lg:border-r">
                <blockquote className="mx-auto mb-8 max-w-2xl">
                  <h3 className="text-lg font-semibold">
                    Mindblowing workflow and variants
                  </h3>
                  <p className="my-4">
                    &quot;As someone who mainly research Vintage things,
                    I&apos;ve been through traveling around the world, but as
                    soon as I saw and started Collaborate with VHICL my
                    Journalists Journey significantly imporves.
                  </p>
                  <p className="my-4">
                    Aesthetically, the well designed workflow are beautiful and
                    will undoubtedly level up your Business.&quot;
                  </p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                  <Image
                    src={endorsement[2].imageUrl}
                    width={128}
                    height={128}
                    alt="profile picture"
                    className="w-9 h-9 rounded-full"
                  ></Image>
                  <div className="space-y-0.5 font-medium text-left">
                    <div>{endorsement[2].name}</div>
                    <div className="text-sm font-light">
                      {endorsement[2].role}
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center border-t md:p-12 lg:border-l">
                <blockquote className="mx-auto mb-8 max-w-2xl">
                  <h3 className="text-lg font-semibold">
                    Efficient Collaborating
                  </h3>
                  <p className="my-4">
                    &quot;All of us already know Efficiency is the key that
                    needed to perform multitasking effectively, without being
                    boring and repetitive which is good very helpful almost
                    every aspects
                  </p>
                  <p className="my-4">
                    You have many appreciation that can leads to create a great
                    success for your team.&quot;
                  </p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                  <Image
                    src={endorsement[3].imageUrl}
                    width={128}
                    height={128}
                    alt="profile picture"
                    className="w-9 h-9 rounded-full"
                  ></Image>
                  <div className="space-y-0.5 font-medium text-left">
                    <div>{endorsement[3].name}</div>
                    <div className="text-sm font-light">
                      {endorsement[3].role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <p className="text-base font-semibold">VHICL</p>
          <h1 className="mt-4 mb-12 text-3xl font-bold tracking-tight sm:text-5xl">
            Vehicle For Today
          </h1>
          <p className="mb-8">
            Interested? Learn more at{" "}
            <Link
              href="/about"
              className="text-blue-600 dark:text-blue-100 hover:text-blue-800 dark:hover:text-blue-200 visited:text-purple-600 dark:visited:text-purple-200 underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              About Us
            </Link>{" "}
            page.
          </p>
          <p>
            We Provide Best Possible content deliveries, seek{" "}
            <Link
              href="/services"
              className="text-blue-600 dark:text-blue-100 hover:text-blue-800 dark:hover:text-blue-200 visited:text-purple-600 dark:visited:text-purple-200 underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Services
            </Link>{" "}
            page.
          </p>
        </div>
      </main>
    </>
  );
}
