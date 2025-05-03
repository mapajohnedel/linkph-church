import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-6 bg-white py-12 px-4">
      <Image
        src="/logo.png"
        alt="Link Ph Logo"
        width={120}
        height={120}
        className="mx-auto mb-4 drop-shadow-lg rounded-full bg-white p-2"
        priority
      />
      <h1 className="text-4xl sm:text-5xl font-extrabold text-green-600 drop-shadow">Link Church <span className="block text-2xl font-light tracking-widest mt-2 text-green-400">PHILIPPINES</span></h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-green-700 mt-2">God First, Disciples Made</h2>
      <p className="italic text-lg sm:text-xl text-gray-700 max-w-xl mx-auto mt-2">&ldquo;Connecting what matters to God.&rdquo;</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 bg-green-50 rounded-xl p-6 shadow-lg w-full max-w-2xl">
        <div className="flex items-center gap-2 text-green-800">
          <span className="bg-green-100 p-2 rounded-full"><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'><path strokeLinecap='round' strokeLinejoin='round' d='M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-.659 1.591l-7.591 7.591a2.25 2.25 0 0 1-3.182 0L2.909 8.584A2.25 2.25 0 0 1 2.25 6.993V6.75' /></svg></span>
          <span>thelinkphilippines@gmail.com</span>
        </div>
        <div className="flex items-center gap-2 text-green-800">
          <span className="bg-green-100 p-2 rounded-full"><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'><path strokeLinecap='round' strokeLinejoin='round' d='M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.386c.511 0 .998.175 1.39.497l1.386 1.155a2.25 2.25 0 0 0 2.876 0l1.386-1.155a2.25 2.25 0 0 1 1.39-.497h2.386a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75z' /></svg></span>
          <span>09396030755</span>
        </div>
        <div className="flex items-center gap-2 text-green-800">
          <span className="bg-green-100 p-2 rounded-full"><svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24' className='w-6 h-6'><path d='M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0'/></svg></span>
          <a href="https://facebook.com/LinkPHL" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-600">facebook.com/LinkPHL</a>
        </div>
      </div>
    </main>
  );
}
