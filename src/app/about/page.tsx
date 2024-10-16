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
            company's history, its founding, and its milestones.
          </h1>
          <p className="text-2xl font-bold sm:text-5xl">
            VHICL is where we unite in the magnificent world of Vehicle
            Distribution and Trade since 2014
          </p>
          <h1>
            Team: This section should introduce the company's team members. It
            should include their names, titles, and a brief description of their
            experience.
          </h1>
          <h1>
            Culture: This section should describe the company's culture and
            values. It should give visitors a sense of what it's like to work at
            the company.
          </h1>
        </div>
      </main>
    </>
  );
}
