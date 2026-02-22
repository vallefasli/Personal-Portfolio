import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] p-6 md:p-12 w-full max-w-none text-[#212529] font-mono">
      
      {/* 1. STUDENT DOSSIER HEADER */}
      <header className="border-b-4 border-black pb-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-black">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          
          {/* PHOTO CONTAINER WITH HOVER SWAP */}
          <div className="group relative w-40 h-40 border-4 border-black bg-gray-200 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 cursor-crosshair overflow-hidden">
            {/* PRIMARY IMAGE: Grayscale by default, fades out on hover */}
            <Image 
              src="/profile1.png" 
              alt="Miguel I. Vallefas"
              fill
              className="object-cover grayscale transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:grayscale-0"
            />

            {/* SECONDARY IMAGE: Fades in on hover */}
            <Image 
              src="/profile-hover.jpg" 
              alt="Miguel I. Vallefas Alternate"
              fill
              className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
            
            {/* SCANLINE OVERLAY */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] transition-opacity duration-500"></div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-6xl font-black uppercase tracking-tighter italic leading-none">Miguel I. Vallefas</h1>
            <p className="text-sm font-bold bg-black text-white inline-block px-3 py-1 self-start">
              CS STUDENT // ASPIRING DATA SCIENTIST // NU
            </p>
            <div className="text-xs mt-2 space-y-1 text-gray-600 uppercase font-bold">
              <p>Focus: Machine Learning</p>
              <p>Location: Amadeo, Calabarzon, Philippines</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-right text-[10px] font-bold min-w-[200px]">
          <p>STATUS: <span className="text-green-600 uppercase">Active_Dev</span></p>
          <p>DATABASE_ID: 2026-02-22</p>
          <p>ACADEMIC_RECORD: NATIONAL UNIVERSITY</p>
        </div>
      </header>

      {/* 2. MAIN DASHBOARD CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 text-black">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-1 space-y-10">
          <section>
            <h3 className="text-xs font-black uppercase mb-4 bg-gray-200 inline-block px-2 border border-black italic">Subject_Bio</h3>
            <p className="text-sm leading-relaxed border-l-4 border-black pl-4 py-2 bg-white italic shadow-sm">
              "Computer Science student at National University specializing in Machine Learning and data-driven analysis."
            </p>
          </section>

          <section>
            <h3 className="text-xs font-black uppercase mb-4 bg-gray-200 inline-block px-2 border border-black italic">Tech_Arsenal</h3>
            <div className="space-y-4">
              {[
                { label: "Analytical_Stack", tools: "Python, SQL" },
                { label: "Data_Processing", tools: "Pandas, NumPy" },
                { label: "Visualization", tools: "Matplotlib" },
                { label: "Predictive_Modeling", tools: "Supervised" },
                { label: "Vision_Surface", tools: "OpenCV, MediaPipe" }
              ].map((item) => (
                <div key={item.label} className="border border-black p-3 bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-[9px] font-bold text-gray-400 uppercase">{item.label}</p>
                  <p className="text-xs font-black uppercase">{item.tools}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xs font-black uppercase mb-4 bg-gray-200 inline-block px-2 border border-black italic">Academic_Record</h3>
            <div className="text-xs font-bold border-2 border-black p-4 bg-white space-y-4 shadow-sm">
              <div>
                <p className="uppercase">National University Dasma</p>
                <p className="text-gray-500 italic text-[10px]">BS Computer Science</p>
              </div>
              <div className="border-t border-dotted border-black pt-2">
                <p className="uppercase">Mater Dei Academy Tagaytay</p>
                <p className="text-gray-500 italic text-[10px]">Senior/Junior High School</p>
              </div>
              <div className="border-t border-dotted border-black pt-2">
                <p className="uppercase">Salaban Elementary School</p>
                <p className="text-gray-500 italic text-[10px]">Grade School Graduate</p>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: PROJECT CARDS */}
        <div className="lg:col-span-3 space-y-8">
          <div className="flex items-center gap-4 mb-4">
            <h3 className="text-xs font-black uppercase bg-black text-white px-4 py-1 italic tracking-widest">Personal Projects</h3>
            <div className="h-[2px] bg-black flex-grow opacity-20"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* FILE-001 */}
            <Link href="/project/FILE-001" className="group block">
              <div className="border-2 border-black p-6 bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all h-full flex flex-col">
                <div className="flex justify-between border-b-2 border-black pb-2 mb-4">
                  <span className="text-[10px] font-black italic text-gray-400">ID: FILE-001</span>
                  <span className="bg-red-600 text-white px-2 text-[10px] font-black border border-black">EXPERIMENTAL</span>
                </div>
                <h4 className="text-2xl font-black uppercase mb-2">JJK_VISION_PROJECT</h4>
                <p className="text-xs italic text-gray-600 mb-6 bg-gray-50 p-3 border border-black leading-relaxed">
                  "Exploring hand gesture recognition for 'Unlimited Void' triggers."
                </p>
                <div className="mt-auto flex justify-between text-[9px] font-black uppercase pt-3 border-t border-dotted border-black">
                  <span>CV / MediaPipe</span>
                  <span>2026-02-15</span>
                </div>
              </div>
            </Link>

            {/* FILE-002 */}
            <Link href="/project/FILE-002" className="group block">
              <div className="border-2 border-black p-6 bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all h-full flex flex-col">
                <div className="flex justify-between border-b-2 border-black pb-2 mb-4">
                  <span className="text-[10px] font-black italic text-gray-400">ID: FILE-002</span>
                  <span className="bg-orange-500 text-white px-2 text-[10px] font-black border border-black">NEW_ENTRY</span>
                </div>
                <h4 className="text-2xl font-black uppercase mb-2">FURRNITURE</h4>
                <p className="text-xs italic text-gray-600 mb-6 bg-gray-50 p-3 border border-black leading-relaxed">
                  "AI-driven community cat adoption and sticker generation platform."
                </p>
                <div className="mt-auto flex justify-between text-[9px] font-black uppercase pt-3 border-t border-dotted border-black">
                  <span>Android / AI_Image</span>
                  <span>2026-02-22</span>
                </div>
              </div>
            </Link>

            {/* FILE-003 */}
            <Link href="/project/FILE-003" className="group block">
              <div className="border-2 border-black p-6 bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all h-full flex flex-col">
                <div className="flex justify-between border-b-2 border-black pb-2 mb-4">
                  <span className="text-[10px] font-black italic text-gray-400">ID: FILE-003</span>
                  <span className="bg-black text-white px-2 text-[10px] font-black border border-black">VERIFIED</span>
                </div>
                <h4 className="text-2xl font-black uppercase mb-2">SECURITY_LOG_AUDIT</h4>
                <p className="text-xs italic text-gray-600 mb-6 bg-gray-50 p-3 border border-black leading-relaxed">
                  "Technical assessment of manual security logging standards at NU."
                </p>
                <div className="mt-auto flex justify-between text-[9px] font-black uppercase pt-3 border-t border-dotted border-black">
                  <span>Audit / Sovereignty</span>
                  <span>2026-02-05</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-10 border-t-4 border-black flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
        <p>DO NOT REPLICATE // FOR PROFESSIONAL_AUDIT ONLY</p>
        <p>© 2026 LOREN // NU_CS_DATABASE // 0x87AF61</p>
      </footer>
    </main>
  );
}