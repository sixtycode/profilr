import RandomUser from "@/app/api/random-user";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Teams",
  description: "Team Members",
};

export default async function Teams() {
  const peopleData = await RandomUser(10, "email");

  const people = [
    {
      name: `${peopleData.results[0].name.first} ${peopleData.results[0].name.last}`,
      role: "Photographer",
      mail: peopleData.results[0].email,
      imageUrl: peopleData.results[0].picture.large,
    },
    {
      name: `${peopleData.results[1].name.first} ${peopleData.results[1].name.last}`,
      role: "Videographer",
      mail: peopleData.results[1].email,
      imageUrl: peopleData.results[1].picture.large,
    },
    {
      name: `${peopleData.results[2].name.first} ${peopleData.results[2].name.last}`,
      role: "Sales Manager",
      mail: peopleData.results[2].email,
      imageUrl: peopleData.results[2].picture.large,
    },
    {
      name: `${peopleData.results[3].name.first} ${peopleData.results[3].name.last}`,
      role: "Software Engineer",
      mail: peopleData.results[3].email,
      imageUrl: peopleData.results[3].picture.large,
    },
    {
      name: `${peopleData.results[4].name.first} ${peopleData.results[4].name.last}`,
      role: "Marketing Specialist",
      mail: peopleData.results[4].email,
      imageUrl: peopleData.results[4].picture.large,
    },
    {
      name: `${peopleData.results[5].name.first} ${peopleData.results[5].name.last}`,
      role: "UI/UX Designer",
      mail: peopleData.results[5].email,
      imageUrl: peopleData.results[5].picture.large,
    },
    {
      name: `${peopleData.results[6].name.first} ${peopleData.results[6].name.last}`,
      role: "Accountant",
      mail: peopleData.results[6].email,
      imageUrl: peopleData.results[6].picture.large,
    },
    {
      name: `${peopleData.results[7].name.first} ${peopleData.results[7].name.last}`,
      role: "Product Manager",
      mail: peopleData.results[7].email,
      imageUrl: peopleData.results[7].picture.large,
    },
    {
      name: `${peopleData.results[8].name.first} ${peopleData.results[8].name.last}`,
      role: "Recruiter",
      mail: peopleData.results[8].email,
      imageUrl: peopleData.results[8].picture.large,
    },
    {
      name: `${peopleData.results[9].name.first} ${peopleData.results[9].name.last}`,
      role: "QA Engineer",
      mail: peopleData.results[9].email,
      imageUrl: peopleData.results[9].picture.large,
    },
  ];

  return (
    <>
      <div className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About the team
            </h2>
            <p className="mt-6 text-lg leading-8">
              We&apos;re a dynamic group of individuals who are passionate about
              what we do at Vehicles World and dedicated to delivering the best
              results for our clients satisfaction.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.mail}>
                <div className="flex items-center gap-x-6">
                  <Image
                    src={person.imageUrl}
                    width={128}
                    height={128}
                    alt="VHICL Team Picture"
                    className="h-16 w-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6">
                      {person.role}
                    </p>
                    <p className="text-sm leading-6 text-blue-600 dark:text-blue-100 hover:text-blue-800 dark:hover:text-blue-200 visited:text-purple-600 dark:visited:text-purple-200 underline underline-offset-4">
                      {person.mail}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
