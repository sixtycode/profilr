export default async function RandomUser(amount: number) {
  const staticData = await fetch(
    `https://randomuser.me/api/?results=${amount}&exc=gender,location,login,registered,dob,phone,cell,id&nat=us&noinfo
    `,
    {
      cache: "force-cache",
    }
  );

  if (!staticData.ok) {
    throw new Error("Failed to fetch data");
  }
  return staticData.json();
}
