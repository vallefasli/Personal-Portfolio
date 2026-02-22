'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GitHubCalendar } from 'react-github-calendar';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false); // New state for chatbot
  const [input, setInput] = useState(''); // New state for input
  const [messages, setMessages] = useState([{ role: 'system', text: 'SYSTEM: Connection established.' }]); // Message history

  useEffect(() => {
    setMounted(true);
  }, []);

  // New function for Vercel API
  const handleChat = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input;
    setMessages([...messages, { role: 'user', text: userMsg }]);
    setInput('');
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'system', text: data.reply || data.message }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'system', text: 'ERROR: UPLINK_FAILED' }]);
    }
  };

  return (
    /* Change 1: Set max-height to screen and hide overflow to control scrolling manually */
    <main className="h-screen overflow-hidden bg-[#F8F9FA] p-6 md:p-12 w-full max-w-none text-[#212529] font-mono flex flex-col relative">
      
      {/* 1. STUDENT DOSSIER HEADER - Stays pinned at the top */}
      <header className="border-b-4 border-black pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-black shrink-0">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="group relative w-40 h-40 border-4 border-black bg-[#FF7F50] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 cursor-crosshair overflow-hidden">
            <Image 
              src="/profile1.png" 
              alt="Miguel I. Vallefas"
              fill
              className="object-cover grayscale transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:grayscale-0"
            />
            <Image 
              src="/profile-hover.jpg" 
              alt="Miguel I. Vallefas Alternate"
              fill
              className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] transition-opacity duration-500"></div>
          </div>

          <div className="flex flex-col gap-2 text-black">
            <h1 className="text-6xl font-black uppercase tracking-tighter italic leading-none">Miguel I. Vallefas</h1>
            <p className="text-sm font-bold bg-black text-white inline-block px-3 py-1 self-start uppercase">
              CS STUDENT // ASPIRING DATA SCIENTIST // NU
            </p>
            <div className="text-xs mt-2 space-y-1 text-gray-600 uppercase font-bold">
              <p>Focus: Machine Learning</p>
              <p>Location: Amadeo, Calabarzon, Philippines</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-right text-[10px] font-bold min-w-[200px] text-black">
          <p>STATUS: <span className="text-green-600 uppercase">Active_Dev</span></p>
          <p>DATABASE_ID: 2026-02-22</p>
          <p>ACADEMIC_RECORD: NATIONAL UNIVERSITY</p>
        </div>
      </header>

      {/* 2. MAIN DASHBOARD CONTENT - Flex container to handle scrolling */}
      <div className="flex-grow flex overflow-hidden gap-12 text-black">
        
        {/* LEFT COLUMN: SIDEBAR - Stays pinned */}
        <div className="hidden lg:flex lg:w-1/4 flex-col gap-8 overflow-y-auto pr-4 custom-scrollbar">
          <section>
            <h3 className="text-xs font-black uppercase mb-4 bg-gray-200 inline-block px-2 border border-black italic">Subject_Bio</h3>
            <p className="text-sm leading-relaxed border-l-4 border-black pl-4 py-2 bg-white italic shadow-sm">
              "Computer Science student at National University specializing in Machine Learning and data-driven analysis."
            </p>
          </section>

          <section>
            <h3 className="text-xs font-black uppercase mb-4 bg-gray-200 inline-block px-2 border border-black italic text-black">Social_Connect // Links</h3>
            <div className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-3">
              <a href="https://github.com/vallefasli" target="_blank" className="flex items-center justify-between border border-black p-2 hover:bg-black hover:text-white transition-all group">
                <span className="text-[10px] font-black uppercase tracking-widest">GitHub</span>
                <img src="https://img.shields.io/badge/-000?style=flat&logo=github&logoColor=white" alt="GH" className="h-4 invert group-hover:invert-0" />
              </a>
              <a href="https://www.linkedin.com/in/lorenzo-miguel-vallefas-829a9b393/" target="_blank" className="flex items-center justify-between border border-black p-2 hover:bg-black hover:text-white transition-all group">
                <span className="text-[10px] font-black uppercase tracking-widest">LinkedIn</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="h-5 w-5 grayscale invert group-hover:invert-0" />
              </a>
              <a href="https://www.instagram.com/vllfsmigs_/" target="_blank" className="flex items-center justify-between border border-black p-2 hover:bg-black hover:text-white transition-all group">
                <span className="text-[10px] font-black uppercase tracking-widest">Instagram</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="IG" className="h-5 w-5 grayscale invert group-hover:invert-0" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vallefasli@gmail.com" target="_blank" className="flex items-center justify-between border border-black p-2 hover:bg-black hover:text-white transition-all group">
                <span className="text-[10px] font-black uppercase tracking-widest">Gmail_Direct</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" className="h-4 w-5 grayscale invert group-hover:invert-0" />
              </a>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-black uppercase mb-4 bg-gray-200 inline-block px-2 border border-black italic text-black">Activity_Log // Heatmap</h3>
            <div className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden text-black min-h-[150px] flex items-center justify-center">
              {mounted ? (
                <GitHubCalendar username="vallefasli" blockSize={10} blockMargin={4} fontSize={10} theme={{ light: ['#f0f0f0', '#cccccc', '#999999', '#666666', '#000000'] }} colorScheme="light" />
              ) : (
                <p className="text-[8px] uppercase animate-pulse">Synchronizing Activity...</p>
              )}
            </div>
          </section>

          <section>
            <h3 className="text-xs font-black uppercase mb-4 bg-gray-200 inline-block px-2 border border-black italic">Tech_Arsenal</h3>
            <div className="space-y-4">
              {[
                { label: "Analytical_Stack", tools: "Python, SQL" },
                { label: "Data_Processing", tools: "Pandas, NumPy" },
                { label: "Predictive_Modeling", tools: "Supervised Learning" },
                { label: "Vision_Surface", tools: "OpenCV, MediaPipe" }
              ].map((item) => (
                <div key={item.label} className="border border-black p-3 bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-[9px] font-bold text-gray-400 uppercase">{item.label}</p>
                  <p className="text-xs font-black uppercase">{item.tools}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: PROJECT CARDS - ONLY THIS SCROLLS */}
        <div className="flex-grow lg:w-3/4 overflow-y-auto pr-2 custom-scrollbar pb-10">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xs font-black uppercase bg-black text-white px-4 py-1 italic tracking-widest sticky top-0 z-10">Personal Projects</h3>
            <div className="h-[2px] bg-black flex-grow opacity-20"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/project/FILE-001" className="group block text-black">
              <div className="border-2 border-black p-6 bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none transition-all h-full flex flex-col">
                <div className="flex justify-between border-b-2 border-black pb-2 mb-4">
                  <span className="text-[10px] font-black italic text-gray-400">ID: FILE-001</span>
                  <span className="bg-red-600 text-white px-2 text-[10px] font-black border border-black uppercase">Experimental</span>
                </div>
                <h4 className="text-2xl font-black uppercase mb-2">JJK_VISION_PROJECT</h4>
                <p className="text-xs italic text-gray-600 mb-6 bg-gray-50 p-3 border border-black leading-relaxed">
                  "Exploring real-time hand sign recognition using MediaPipe landmarks."
                </p>
                <div className="mt-auto flex justify-between text-[9px] font-black uppercase pt-3 border-t border-dotted border-black">
                  <span>OpenCV / Python</span>
                  <span>2026-02-15</span>
                </div>
              </div>
            </Link>

            <Link href="/project/FILE-002" className="group block text-black">
              <div className="border-2 border-black p-6 bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none transition-all h-full flex flex-col">
                <div className="flex justify-between border-b-2 border-black pb-2 mb-4">
                  <span className="text-[10px] font-black italic text-gray-400">ID: FILE-002</span>
                  <span className="bg-orange-500 text-white px-2 text-[10px] font-black border border-black uppercase">Active</span>
                </div>
                <h4 className="text-2xl font-black uppercase mb-2">FURRNITURE</h4>
                <p className="text-xs italic text-gray-600 mb-6 bg-gray-50 p-3 border border-black leading-relaxed">
                  "AI-driven community cat adoption and sticker generation platform."
                </p>
                <div className="mt-auto flex justify-between text-[9px] font-black uppercase pt-3 border-t border-dotted border-black">
                  <span>Kotlin / Jetpack Compose</span>
                  <span>2026-02-22</span>
                </div>
              </div>
            </Link>

            <Link href="/project/FILE-003" className="group block text-black">
              <div className="border-2 border-black p-6 bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none transition-all h-full flex flex-col">
                <div className="flex justify-between border-b-2 border-black pb-2 mb-4">
                  <span className="text-[10px] font-black italic text-gray-400">ID: FILE-003</span>
                  <span className="bg-black text-white px-2 text-[10px] font-black border border-black uppercase">Verified</span>
                </div>
                <h4 className="text-2xl font-black uppercase mb-2">SECURITY_LOG_AUDIT</h4>
                <p className="text-xs italic text-gray-600 mb-6 bg-gray-50 p-3 border border-black leading-relaxed">
                  "Technical assessment of manual security logging standards at NU."
                </p>
                <div className="mt-auto flex justify-between text-[9px] font-black uppercase pt-3 border-t border-dotted border-black">
                  <span>Audit / Compliance</span>
                  <span>2026-02-05</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CHATBOT INTEGRATION - Layered on top */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
        {isChatOpen && (
          <div className="mb-4 w-80 h-96 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden">
            <div className="bg-black text-white p-3 flex justify-between items-center shrink-0">
              <span className="text-[10px] font-black uppercase italic tracking-widest">Neural_Interface</span>
              <button onClick={() => setIsChatOpen(false)}>✕</button>
            </div>
            <div className="flex-grow p-4 overflow-y-auto bg-[#F8F9FA] space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`p-2 border border-black text-[10px] uppercase font-bold ${m.role === 'user' ? 'bg-black text-white self-end' : 'bg-gray-200'}`}>
                  {m.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleChat} className="p-2 border-t-2 border-black bg-white">
              <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                className="w-full text-[10px] uppercase font-bold outline-none" 
                placeholder="Type command..." 
              />
            </form>
          </div>
        )}
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-[#FFD700] border-4 border-black p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] font-black text-xs uppercase italic"
        >
          {isChatOpen ? 'Close_Session' : 'Initialize_Chat'}
        </button>
      </div>

      {/* FOOTER - Shrink-0 keeps it at the very bottom of the viewport */}
      <footer className="shrink-0 pt-6 border-t-4 border-black flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
        <p>DO NOT REPLICATE // FOR PROFESSIONAL_AUDIT ONLY</p>
        <p>© 2026 LOREN // NU_CS_DATABASE // 0x87AF61</p>
      </footer>
    </main>
  );
}