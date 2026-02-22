'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GitHubCalendar } from 'react-github-calendar';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false); 
  const [input, setInput] = useState(''); 
  const [messages, setMessages] = useState([
    { role: 'system', text: 'Hi there! 👋 Thanks for visiting my website. Feel free to ask me anything about programming, web development, or my experiences in tech.' }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // MANUALLY ADJUST SIZE HERE
  const chatWidth = "280px";
  const chatHeight = "450px";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isChatOpen]);

  const handleChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input;
    setMessages([...messages, { role: 'user', text: userMsg }]);
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'system', text: "UPLINK_STATUS: UI_DEMO_ACTIVE. Use the Gmail link in the sidebar for real inquiries." }]);
    }, 1000);
  };

  return (
    <main className="min-h-screen overflow-auto bg-[#F8F9FA] p-6 md:p-12 w-full max-w-none text-[#212529] font-mono flex flex-col relative">
      
      {/* 1. STUDENT DOSSIER HEADER */}
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

      {/* 2. MAIN DASHBOARD CONTENT */}
      <div className="flex-grow flex overflow-hidden gap-12 text-black relative">
        
        {/* LEFT COLUMN: SIDEBAR */}
        <div className="hidden lg:flex lg:w-1/4 flex-col overflow-y-auto pr-4 custom-scrollbar">
          <section className="space-y-8">
            {/* Bio */}
            <div>
              <h3 className="text-xs font-black uppercase mb-4 bg-gray-200 inline-block px-2 border border-black italic">Subject_Bio</h3>
              <p className="text-sm leading-relaxed border-l-4 border-black pl-4 py-2 bg-white italic shadow-sm">
                "Computer Science student at National University specializing in Machine Learning and data-driven analysis."
              </p>
            </div>
            {/* Socials */}
            <div>
              <h3 className="text-xs font-black uppercase mb-4 bg-gray-200 inline-block px-2 border border-black italic text-black">Social_Connect // Links</h3>
              <div className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-3">
                <a href="https://github.com/vallefasli" target="_blank" className="flex items-center justify-between border border-black p-2 hover:bg-black hover:text-white transition-all group">
                  <span className="text-[10px] font-black uppercase tracking-widest">GitHub</span>
                  <img src="https://img.shields.io/badge/-000?style=flat&logo=github&logoColor=white" alt="GH" className="h-4 invert group-hover:invert-0 shrink-0" />
                </a>
                <a href="https://www.linkedin.com/in/lorenzo-miguel-vallefas-829a9b393/" target="_blank" className="flex items-center justify-between border border-black p-2 hover:bg-black hover:text-white transition-all group">
                  <span className="text-[10px] font-black uppercase tracking-widest">LinkedIn</span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="h-5 w-5 grayscale invert group-hover:invert-0 shrink-0" />
                </a>
                <a href="https://www.instagram.com/vllfsmigs_/" target="_blank" className="flex items-center justify-between border border-black p-2 hover:bg-black hover:text-white transition-all group">
                  <span className="text-[10px] font-black uppercase tracking-widest">Instagram</span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="IG" className="h-5 w-5 grayscale invert group-hover:invert-0 shrink-0" />
                </a>
                <a href="mailto:vallefasli@gmail.com" target="_blank" className="flex items-center justify-between border border-black p-2 hover:bg-black hover:text-white transition-all group">
                  <span className="text-[10px] font-black uppercase tracking-widest">Gmail_Direct</span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" className="h-4 w-5 grayscale invert group-hover:invert-0 shrink-0" />
                </a>
              </div>
            </div>
            {/* Activity Log */}
            <div>
              <h3 className="text-xs font-black uppercase mb-4 bg-gray-200 inline-block px-2 border border-black italic text-black">Activity_Log // Heatmap</h3>
              <div className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden text-black min-h-[150px] flex items-center justify-center">
                {mounted ? (
                  <GitHubCalendar username="vallefasli" blockSize={10} blockMargin={4} fontSize={10} theme={{ light: ['#f0f0f0', '#cccccc', '#999999', '#666666', '#000000'] }} />
                ) : (
                  <p className="text-[8px] uppercase animate-pulse">Synchronizing Activity...</p>
                )}
              </div>
            </div>
            {/* Tech Stack */}
            <div>
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
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: PROJECT CARDS */}
        <div className="flex-grow lg:w-3/4 h-full overflow-y-auto pr-2 custom-scrollbar pb-10">
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

      {/* FOOTER */}
      <footer className="shrink-0 pt-6 border-t-4 border-black flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
        <p>DO NOT REPLICATE // FOR PROFESSIONAL_AUDIT ONLY</p>
        <p>© 2026 LOREN // NU_CS_DATABASE</p>
      </footer>

      {/* --- THE ABSOLUTE FIX --- */}
      {/* This container is FIXED to the viewport. It will NOT affect anything inside the <main> flex flow. */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
        {isChatOpen && (
          <div
            style={{ width: chatWidth, height: chatHeight, maxHeight: '90vh', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', position: 'fixed', zIndex: 110 }}
            className="bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] border-2 border-black overflow-hidden flex flex-col pointer-events-auto"
          >
            {/* Chat Header */}
            <div className="p-3 bg-white/20 border-b border-black/5 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 relative overflow-hidden border border-black/5">
                  <Image src="/profile1.png" alt="Miguel" fill className="object-cover" />
                </div>
                <div className="font-sans">
                  <h3 className="font-bold text-xs text-black leading-none">Miguel V.</h3>
                  <p className="text-[9px] text-green-600 font-bold uppercase mt-1">Active Now</p>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-black/40 hover:text-black transition-colors">
                ✕
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 p-4 space-y-4 font-sans custom-scrollbar"
              style={{ overflowY: 'auto', maxHeight: `calc(${chatHeight} - 110px)` }}
            >
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-2.5 rounded-2xl text-[11px] shadow-sm ${m.role === 'user' ? 'bg-[#0084ff] text-white rounded-tr-none' : 'bg-white text-black rounded-tl-none border border-black/5'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleChat} className="p-3 border-t border-black/5 pointer-events-auto">
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Aa" 
                  className="flex-grow bg-black/5 rounded-full px-4 py-2 text-[11px] focus:outline-none font-sans"
                />
                <button type="submit" className="text-[#0084ff]">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
                </button>
              </div>
            </form>
          </div>
        )}

        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-[#0084ff] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-all text-2xl pointer-events-auto fixed bottom-6 right-6 z-[120]"
        >
          {isChatOpen ? "✕" : "💬"}
        </button>
      </div>
    </main>
  );
}