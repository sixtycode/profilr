export default async function RandomUser(amount: number, mail: string) {
  let staticData: string[];
  if (mail === "email") {
    staticData = await fetch(
      `https://randomuser.me/api/?results=${amount}&exc=gender,location,login,registered,dob,phone,cell,id&nat=us&noinfo
      `,
      {
        cache: "force-cache",
      }
    );
  } else if (mail === "nomail") {
    staticData = await fetch(
      `https://randomuser.me/api/?results=${amount}&exc=email,gender,location,login,registered,dob,phone,cell,id&nat=us&noinfo
      `,
      {
        cache: "force-cache",
      }
    );
  } 

  if (!staticData.ok) {
    throw new Error("Failed to fetch data");
  }
  return staticData.json();
}
