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
          <p className="text-xl font-bold sm:text-4xl my-4">
            VHICL is where we unite in the magnificent world of
          </p>
          <p className="text-xl font-bold sm:text-4xl my-4">
            Vehicle Distribution and Trade since 2014
          </p>
          <p className="my-4 text-lg">
            "Starts with Curiousity, Drives with Passion."
          </p>
          <h1>
            Team: This section should introduce the company&apos;s team members.
            It should include their names, titles, and a brief description of
            their experience.
          </h1>
          <h1>
            Culture: This section should describe the company&apos;s culture and
            values. It should give visitors a sense of what it&apos;s like to
            work at the company.
          </h1>
        </div>
      </main>
    </>
  );
}
