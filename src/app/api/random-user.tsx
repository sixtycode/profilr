export default async function RandomUser(amount: number, mail: string) {
  if (mail === "email") {
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
  } else if (mail === "nomail") {
    const staticData = await fetch(
      `https://randomuser.me/api/?results=${amount}&exc=email,gender,location,login,registered,dob,phone,cell,id&nat=us&noinfo
      `,
      {
        cache: "no-store",
      }
    );

    if (!staticData.ok) {
      throw new Error("Failed to fetch data");
    }

    return staticData.json();
  }
}
