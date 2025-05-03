import React from "react";

export default function Services() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-6 bg-white py-12 px-4">
      <h1 className="text-4xl font-extrabold text-green-600 mb-4">Services</h1>
      <div className="text-lg text-gray-700 max-w-2xl">
        <p className="mb-4">Join us for worship, fellowship, and spiritual growth:</p>
        <ul className="list-disc list-inside text-left mx-auto inline-block">
          <li>
            <span className="font-semibold text-green-700">Sunday Worship:</span> 10:00 AM
          </li>
          <li>
            <span className="font-semibold text-green-700">Midweek Service:</span> Wednesday, 7:00 PM
          </li>
          <li>
            <span className="font-semibold text-green-700">Youth Fellowship:</span> Friday, 6:00 PM
          </li>
          <li>
            <span className="font-semibold text-green-700">Location:</span> 123 Main St, Your City, Philippines
          </li>
        </ul>
      </div>
    </main>
  );
}