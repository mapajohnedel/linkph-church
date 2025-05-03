import React from "react";

export default function Services() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-8 bg-white py-12 px-4">
      <h1 className="text-4xl font-extrabold text-green-600 mb-4">Our Services</h1>
      <div className="text-lg text-gray-700 max-w-2xl">
        <p className="mb-6">
          At Link Church Philippines, we invite you to join us for worship, fellowship, and spiritual growth. Our services are open to everyone—whether you're new to faith, seeking community, or looking to deepen your walk with Christ.
        </p>
        <ul className="list-disc list-inside text-left mx-auto inline-block mb-6">
          <li>
            <span className="font-semibold text-green-700">Sunday Worship Service:</span> <br />
            <span className="ml-4">Every Sunday at 10:00 AM</span>
          </li>
          <li>
            <span className="font-semibold text-green-700">Midweek Prayer Meeting:</span> <br />
            <span className="ml-4">Wednesdays at 7:00 PM</span>
          </li>
          <li>
            <span className="font-semibold text-green-700">Youth Fellowship:</span> <br />
            <span className="ml-4">Fridays at 6:00 PM</span>
          </li>
        </ul>
        <div className="mt-4">
          <span className="font-semibold text-green-700">Location:</span> <br />
          <span className="ml-4">123 Main St, Your City, Philippines</span>
        </div>
      </div>
    </main>
  );
} 