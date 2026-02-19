import Link from "next/link";
import React from "react";

export default function OurTeamPage() {
  const user = [
    {
      id: "USR001",
      name: "Al Mamud Bijoy",
      email: "bijoy@example.com",
      phone: "+8801712345678",
      address: "45 Agrabad Road, Chattogram",
    },
    {
      id: "USR002",
      name: "Fahad Hasan",
      email: "fahad.hasan@example.com",
      phone: "+8801811122233",
      address: "12 Dhanmondi Road, Dhaka",
    },
    {
      id: "USR003",
      name: "Nusrat Jahan",
      email: "nusrat.jahan@example.com",
      phone: "+8801912345678",
      address: "78 Zindabazar, Sylhet",
    },
    {
      id: "USR004",
      name: "Tanvir Ahmed",
      email: "tanvir.ahmed@example.com",
      phone: "+8801612345678",
      address: "23 Sonadanga Road, Khulna",
    },
  ];

  return (
    <div className="h-screen container mx-auto flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold text-emerald-600">Our Team Page</h1>{" "}
      quickly and easily. With our intuitive interface and powerful features,
      you can create stunning websites without any coding knowledge. Whether
      you're a beginner or an experienced developer, our platform provides the
      tools you need to bring your ideas to life. Join our community of creators
      and start building your dream website today!
      <div className="grid grid-cols-3 gap-10 py-32">
        {user?.map((singleUser) => (
          <div key={singleUser?.id}>
            <div className="border p-2 bg-white text-gray-900 p-5 px-10">
              <Link
                href={`/about_us/our_team/${singleUser?.id}`}
                className="block"
              >
                <h1>{singleUser?.id}</h1>
                <h1>{singleUser?.name}</h1>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
