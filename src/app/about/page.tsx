import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Company Profiles",
};

export default function About() {
  return (
    <>
      <main className="grid place-items-center px-8 py-8 sm:py-8 lg:px-4">
        <div className="text-center">
          <p className="sm:text-5xl my-2 text-2xl tracking-tight font-extrabold">
            VHICL is where we unite in the magnificent world of
          </p>
          <p className="sm:text-5xl my-2 text-2xl tracking-tight font-extrabold">
            Vehicle Distribution and Trade since{" "}
            <mark className="px-2">2014.</mark>
          </p>
          <p className="my-4 text-lg font-mono">
            &quot;Starts with Curiousity, Drives with Passion.&quot;
          </p>
          <p className="text-left my-8 px-10 text-justify">
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
          <p className="text-left mt-8 px-10 text-justify">
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
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <p className="mb-4 text-2xl tracking-tight font-extrabold">
                VHICL&apos;s Team Members
              </p>
              <h1>
                Team: This section should introduce the company&apos;s team
                members. It should include their names, titles, and a brief
                description of their experience.
              </h1>
            </div>
          </div>
          <p className="mt-2 mb-6 text-2xl tracking-tight font-extrabold">
            VHICL&apos;s Culture
          </p>
          <p className="text-left my-8 px-10 text-justify">
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
