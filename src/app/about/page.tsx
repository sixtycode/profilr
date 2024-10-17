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
          <h1>
            Company History: This section should provide a brief overview of the
            company&apos;s history, its founding, and its milestones.
          </h1>
          <p className="sm:text-5xl my-2 text-2xl tracking-tight font-sans font-extrabold">
            VHICL is where we unite in the magnificent world of
          </p>
          <p className="sm:text-5xl my-2 text-2xl tracking-tight font-sans font-extrabold">
            Vehicle Distribution and Trade since{" "}
            <mark className="px-2">2014.</mark>
          </p>
          <p className="my-4 text-lg font-mono">
            &quot;Starts with Curiousity, Drives with Passion.&quot;
          </p>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <p className="mb-4 text-2xl tracking-tight font-sans font-extrabold">
                VHICL&apos;s Team Members
              </p>
              <h1>
                Team: This section should introduce the company&apos;s team
                members. It should include their names, titles, and a brief
                description of their experience.
              </h1>
            </div>
          </div>
          <p className="mt-2 mb-6 text-2xl tracking-tight font-sans font-extrabold">
            VHICL&apos;s Culture
          </p>
          <p>
            Innovate with passion, engage with purpose and win with integrity.
            To live up to these values,
          </p>
          <p>
            the company encourages its team to find a healthy and sustainable
            work-life balance
          </p>
          <p>
            through wellness days, flexible work arrangements and unplugged time
            off.
          </p>
          <p>
            When employees are at work, they are supported by a culture of
            continuous learning
          </p>
          <p>
            through regular retrospectives after sprints and projects as well as
            clear career pathing.
          </p>
        </div>
      </main>
    </>
  );
}
