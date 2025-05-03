import React from "react";

const events = [
  {
    title: "Beyond the Brokenness",
    date: "April 25 to May 16, 2025",
    location: "CCF Center, Multipurpose Hall",
    description: "Finding God's Purpose & Blessing in Family Conflicts.",
  },
  {
    title: "Radiance: Living Life Radiantly from the Inside Out",
    date: "May 8 to 29, 2025",
    location: "CCF Center, Multipurpose Hall",
    description: "A series for women to discover inner beauty and strength.",
  },
  {
    title: "Move 2025",
    date: "June 5 to 7, 2025",
    location: "CCF Center",
    description: "Campus Conference: Change campuses, one student at a time.",
  },
];

export default function Events() {
  return (
    <main className="flex flex-col items-center min-h-[70vh] bg-white py-12 px-4">
      <h1 className="text-4xl font-extrabold text-green-600 mb-2 text-center">Upcoming Events</h1>
      <div className="w-16 h-1 bg-green-400 rounded-full mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
          >
            {/* Placeholder image */}
            <div className="h-48 bg-green-100 flex items-center justify-center rounded-t-lg">
              <span className="text-6xl text-green-300">🎉</span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">{event.title}</h2>
              <p className="text-gray-600 text-center mb-2">{event.date}</p>
              <p className="text-gray-500 text-center mb-4">{event.location}</p>
              <p className="text-gray-700 text-center flex-1">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}