import React from "react";

export default function Contact() {
  return (
    <main className="flex flex-col items-center min-h-[70vh] bg-white py-12 px-4">
      <h1 className="text-4xl font-extrabold text-green-600 mb-8 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-12">
        {/* Address Card */}
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow p-6">
          <span className="text-green-500 text-4xl mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7-7.5 11-7.5 11s-7.5-4-7.5-11a7.5 7.5 0 1115 0z" /></svg>
          </span>
          <h2 className="font-bold text-lg mb-1">Address</h2>
          <p className="text-gray-700 text-center">Bacolod City, Negros Occidental 6100</p>
        </div>
        {/* Email Card */}
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow p-6">
          <span className="text-green-500 text-4xl mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.591 7.591a2.25 2.25 0 01-3.182 0L2.909 8.584A2.25 2.25 0 012.25 6.993V6.75" /></svg>
          </span>
          <h2 className="font-bold text-lg mb-1">Email</h2>
          <p className="text-gray-700 text-center break-all">thelinkphilippines@gmail.com</p>
        </div>
        {/* Phone Card */}
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow p-6">
          <span className="text-green-500 text-4xl mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.386c.511 0 .998.175 1.39.497l1.386 1.155a2.25 2.25 0 002.876 0l1.386-1.155a2.25 2.25 0 011.39-.497h2.386a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75z" /></svg>
          </span>
          <h2 className="font-bold text-lg mb-1">Phone Number</h2>
          <p className="text-gray-700 text-center">0930-6030-755</p>
        </div>
      </div>
      {/* Google Map Embed */}
      <div className="w-full max-w-5xl rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Link Church Location"
          src="https://www.google.com/maps?q=Bacolod+City,+Negros+Occidental+6100,+Philippines&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}