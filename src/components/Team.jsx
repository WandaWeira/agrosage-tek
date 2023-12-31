import React from "react";

const teamMembers = [
  {
    name: "Isma Kayiza",
    role: "Founder and Executive Director",
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/29/58/39/360_F_529583994_e3lxrlRYX8kaUMPXmjTVwN6IlAzrdTE3.webp",
  },
  {
    name: "Wanda Rashiidah Weira",
    role: "Director of Finance and Administration",
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/29/58/39/360_F_529583994_e3lxrlRYX8kaUMPXmjTVwN6IlAzrdTE3.webp",
  },
  {
    name: "Nsubuga Thomas",
    role: "Programs Director",
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/29/58/39/360_F_529583994_e3lxrlRYX8kaUMPXmjTVwN6IlAzrdTE3.webp",
  },
  {
    name: "Stellamaris Njage Gauki",
    role: "Director of Communications and Operations",
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/29/58/39/360_F_529583994_e3lxrlRYX8kaUMPXmjTVwN6IlAzrdTE3.webp",
  },
  {
    name: "Zachary Couture",
    role: "Technical Advisor",
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/29/58/39/360_F_529583994_e3lxrlRYX8kaUMPXmjTVwN6IlAzrdTE3.webp",
  },
  {
    name: "Eddie Kamonyo Kabano",
    role: "Strategic Advisor",
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/29/58/39/360_F_529583994_e3lxrlRYX8kaUMPXmjTVwN6IlAzrdTE3.webp",
  },
];

const Team = () => {
  return (
    <div className="px-10 py-5 mt-28">
      <h1 className="text-3xl md:text-4xl font-bold my-10">Meet our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="border border-gray-300 rounded-md max-w-sm mx-auto"
          >
            <img
              src={member.imageUrl}
              alt={`${member.name}`}
              className="w-full h-60 object-cover rounded-t-md"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg my-2">{member.name}</h2>
              <p className="text-gray-500 my-2">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
