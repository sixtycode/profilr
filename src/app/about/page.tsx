import { Metadata } from "next";
import RandomUser from "../api/random-user";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Company Profiles",
};

export default async function About() {
  const aboutData = await RandomUser(4, "nomail");

  const expTeam = [
    {
      name: `${aboutData.results[0].name.first} ${aboutData.results[0].name.last}`,
      role: "Chief Technology Officer",
      experience:
        "Working at VHICL is a fun Roller Coaster Thrilling Experience but in a good way.",
      imageUrl: aboutData.results[0].picture.large,
    },
    {
      name: `${aboutData.results[1].name.first} ${aboutData.results[1].name.last}`,
      role: "Chief Operating Officer",
      experience:
        "Been VHICL Company through 3 years, i see no regrets at all even We gain solid achievement.",
      imageUrl: aboutData.results[1].picture.large,
    },
    {
      name: `${aboutData.results[2].name.first} ${aboutData.results[2].name.last}`,
      role: "Human Resource Development",
      experience:
        "Altough Hiring Process Tiring Process, after get the job done i usually play with each others, Hard Work Pays Off and still couting 7 years goes on.",
      imageUrl: aboutData.results[2].picture.large,
    },
    {
      name: `${aboutData.results[3].name.first} ${aboutData.results[3].name.last}`,
      role: "Product Manager",
      experience:
        "Product Manager literally managing product, and after deliver seeing happy VHICL customers really delightful experience.",
      imageUrl: aboutData.results[3].picture.large,
    },
  ];

  return (
    <>
      <main className="grid place-items-center px-8 py-8 sm:py-8 lg:px-4">
        <div className="text-center">
          <p className="sm:text-5xl my-2 text-2xl tracking-tight font-extrabold">
            VHICL is where we unite in the magnificent world of
          </p>
          <p className="sm:text-5xl my-2 text-2xl tracking-tight font-extrabold">
            Vehicle Distribution and Trade since{" "}
            <mark className="lg:px-2 font-normal">2014.</mark>
          </p>
          <p className="my-4 text-lg font-mono">
            &quot;Starts with Curiousity, Drives with Passion.&quot;
          </p>
          <p className="my-8 px-10 text-justify">
            Founding: Idea Sparks at Sagara Garage, like what if we create media
            stream based on daily hobby in this case Vehicle, even though it is
            just a little amount of information, at very least we contribute to
            the world as <em>sharing is caring</em>, Vio and Sagara decided to
            pick a good old Nikon D200 kit lens with that nostalgic organic CCD
            unique sensor from shady ebay merchant haha always has been,
            awkwardly taking snapshots back then but hey if it works it works!
            due to this company nature being media stream, we continue to
            improve Journalistics Discipline and Here We Are, Thanks a Lot to
            everybody participating even overseas bro still connected to until
            today.
          </p>
          <p className="mt-8 px-10 text-justify">
            Milestones: 2014-2015 just gain 347 subscriber and yes one year
            later we still at garage without official office very broke but
            surprisingly miracle happens. 2016-2019 sweet years ever where we
            reach first time first ten thousand subscriber! soon we rent office
            in Carolina, South Carolina Spartanburg exactly. 2020 decided New
            York City celebrating six year company estabilishment, suddenly the
            global pandemic hits hard we forcefully sell almost everything of
            our asset, each team members stay connected via zoom meeting, being
            stagnant subscriber just drop to 15k back again to 25k like really
            fluctuative. 2023-present turning point as global pandemic hopefully
            getting well, we still got no office yet but current subscriber
            finally hit 100k! moral of the story keep strong enough whatever
            situation hitting us and smile.
          </p>
          <p className="py-8 text-2xl tracking-tight font-extrabold">
            VHICL&apos;s Team Members
          </p>
          <div className="px-10 grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {expTeam.map((vhteam) => (
              <div
                key={vhteam.name}
                className="items-center rounded-lg shadow sm:flex"
              >
                <Image
                  className="w-full md:w-auto rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={vhteam.imageUrl}
                  alt={vhteam.name}
                  width={128}
                  height={128}
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight">
                    {vhteam.name}
                  </h3>
                  <span>{vhteam.role}</span>
                  <p className="mt-3 mb-4 font-light">{vhteam.experience}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 mb-4 text-2xl tracking-tight font-extrabold">
            VHICL&apos;s Culture
          </p>
          <p className="px-10 text-justify">
            Innovate with passion, engage with purpose and win with integrity.
            To live up to these values, the company encourages its team to find
            a healthy and sustainable work-life balance through wellness days,
            flexible work arrangements and unplugged time off. When employees
            are at work, they are supported by a culture of continuous learning
            through regular retrospectives after sprints and projects as well as
            clear career pathing.
          </p>
        </div>
      </main>
    </>
  );
}
