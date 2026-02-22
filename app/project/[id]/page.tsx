import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default async function ProjectExhibit({ params }: { params: Promise<{ id: string }> }) {
  
  const resolvedParams = await params;
  const projectID = resolvedParams.id.toUpperCase();

  const projectDatabase: Record<string, any> = {
    'FILE-001': {
      title: "JJK_VISION_PROJECT",
      status: "EXPERIMENTAL",
      transcript: "Testing real-time hand gesture recognition for 'Unlimited Void' and 'Malevolent Shrine' triggers using MediaPipe landmark detection.",
      context: "Computer vision exploration using OpenCV to trigger dynamic environment changes based on specific hand signs.",
      tech: ["Python", "OpenCV", "MediaPipe"],
      stats: { threat: "MODERATE", env: "GOOGLE COLAB" },
      repo: "https://github.com/vallefasli",
      images: [] 
    },
    'FILE-002': {
      title: "FURRNITURE",
      status: "ACTIVE_ENTRY",
      transcript: "Furrniture is an interactive Android app built to turn stray cat photos into stylized 8-bit stickers through an AI-driven pipeline. It creates a virtual safe space where community cats can be appreciated and remembered.",
      context: "Developed using Kotlin and Jetpack Compose. System architecture uses Room (SQLite) for persistence and handles API timeouts through optimized network calls.",
      tech: ["Kotlin", "Jetpack Compose", "Gemini API", "Room", "Pollinations.ai", "OkHttp3"],
      stats: { threat: "NEUTRAL", env: "ANDROID / KOTLIN" },
      repo: "https://github.com/vallefasli/Furrniture",
      images: [
        "/IMG_01.png", "/IMG_02.png", "/IMG_03.png", "/IMG_04.png", 
        "/IMG_05.png", "/IMG_06.png", "/IMG_07.png"
      ],
      details: {
        abstract: "The app automatically checks if a photo contains a cat and attempts to identify its breed before processing. Users can identify cats, remove backgrounds, or transform photos into 8-bit digital art stickers for themed rooms.",
        features: [
          "Verification: AI checks if photo contains a cat before processing.",
          "AI Art Styles: Generates stylized 8-bit stickers.",
          "Interactive Rooms: Move and organize cats in themed environments.",
          "Scrapbook Gallery: Photo-style collection for saved cat memories.",
          "Easy Sharing: Export clean snapshots of decorated rooms."
        ],
        testing: [
          { case: "Feline Check", result: "Rejected Dog Photos", status: "PASS" },
          { case: "Multi-Room", result: "Auto-Unlock at 7 Residents", status: "PASS" },
          { case: "Dragging", result: "Smooth Pager Swipe", status: "PASS" },
          { case: "Sharing", result: "UI-Free PNG Generation", status: "PASS" }
        ]
      }
    },
    'FILE-003': {
      title: "SECURITY_LOG_AUDIT",
      status: "VERIFIED",
      transcript: "Risk assessment of manual security logging standards at National University. Identified vulnerabilities in data sovereignty and recommended digital auditing transitions.",
      context: "Institutional audit focusing on the transition from manual log sheets to standardized digital tracking systems.",
      tech: ["Audit", "Data Sovereignty", "Compliance"],
      stats: { threat: "LOW", env: "INSTITUTIONAL RESEARCH" },
      repo: "https://github.com/vallefasli",
      images: []
    }
  };

  const project = projectDatabase[projectID] || {
    title: "UNKNOWN_FILE",
    status: "VOID",
    transcript: "Evidence not found in the current archive.",
    context: "N/A",
    tech: [],
    stats: { threat: "UNKNOWN", env: "N/A" },
    images: [],
    repo: "https://github.com/vallefasli"
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA] p-4 font-mono text-black">
      {/* CASE HEADER */}
      <div className="flex justify-between border-b-2 border-black pb-2 mb-8 text-[10px] font-black uppercase">
        <Link href="/" className="bg-black text-white px-3 py-1 hover:bg-gray-800 transition-colors italic">
          ← RETURN_TO_ARCHIVE
        </Link>
        <div className="flex gap-6 items-center">
          <span>CASE STATUS: <span className="text-green-600">● OPEN/REVIEW</span></span>
          <span className="opacity-30">|</span>
          <span>ACCESS LEVEL: <span className="underline italic">SECURE_PUBLIC</span></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-[1600px] mx-auto">
        
        {/* LEFT COLUMN: PROFILE, PERSONNEL, GALLERY, & EXTERNAL ACCESS */}
        <div className="lg:col-span-3 space-y-6">
          <div className="border-2 border-black p-5 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="bg-black text-white text-center text-[10px] font-black py-1 mb-6 uppercase tracking-widest italic">Subject Profile</h3>
            <div className="text-center mb-8 border-b border-black pb-4 text-black">
              <h2 className="text-2xl font-black uppercase tracking-tighter leading-none italic">Lorenzo Miguel Vallefas</h2>
              <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-widest">Lead Investigator / PM</p>
            </div>
            <div className="space-y-4 text-[10px] font-bold uppercase text-black">
              <div className="flex justify-between"><span>File_Title:</span><span>{project.title}</span></div>
              <div className="flex justify-between"><span>Classification:</span><span>{project.status}</span></div>
              <div className="flex justify-between text-red-600"><span>Threat:</span><span>{project.stats.threat}</span></div>
            </div>
          </div>

          <div className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="text-[10px] font-black uppercase mb-4 border-b border-black italic">Assigned_Personnel</h3>
            <p className="text-[10px] font-black uppercase">Lorenzo Miguel Vallefas</p>
            <p className="text-[8px] text-gray-500 uppercase italic">Project Manager</p>
          </div>

          {/* GALLERY SECTION */}
          {project.images.length > 0 && (
            <div className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h3 className="text-[10px] font-black uppercase mb-4 border-b border-black italic">Evidence_Gallery // UI_Visuals</h3>
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {project.images.map((src: string, index: number) => (
                  <div key={index} className="relative aspect-[9/16] w-full border border-black bg-[#E5E5E5] group overflow-hidden">
                    <Image 
                      src={src} 
                      alt={`Evidence ${index + 1}`} 
                      fill 
                      className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 right-0 bg-black text-white text-[8px] px-2 py-1 font-bold">
                      {src.replace('/', '').replace('.png', '')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EXTERNAL EVIDENCE ACCESS */}
          <div className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="text-[10px] font-black uppercase mb-4 border-b border-black italic">Evidence_Access // External</h3>
            <div className="space-y-2">
              {projectID === 'FILE-002' && (
                <a 
                  href="/FURRNITURE_DOSSIER.pdf" 
                  download="Vallefas_Furrniture_Documentation.pdf"
                  className="border-2 border-black px-3 py-2 bg-yellow-400 hover:bg-yellow-500 transition-colors flex items-center justify-between font-black text-[9px] uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
                >
                  Download_Full_Dossier.pdf <span>⬇</span>
                </a>
              )}
              <a 
                href={project.repo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-black px-3 py-2 bg-white hover:bg-black hover:text-white transition-all flex items-center justify-between font-black text-[9px] uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
              >
                Source_Code_Repository <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: PRIMARY EXHIBITS */}
        <div className="lg:col-span-6 space-y-8">
          <div className="border-2 border-black p-8 bg-white relative text-black">
            <div className="absolute -top-4 left-6 bg-[#F8F9FA] px-3 font-black text-2xl italic uppercase tracking-tighter">Exhibit A</div>
            <div className="bg-gray-50 p-10 border border-black italic text-xl leading-relaxed relative shadow-inner">
              <span className="absolute top-2 left-4 text-6xl text-gray-200 select-none">"</span>
              <p className="relative z-10">{project.transcript}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-black">
              {project.tech.map((t: string) => (
                <span key={t} className="border border-black px-3 py-1 text-[10px] font-black bg-yellow-50 uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] italic">{t}</span>
              ))}
            </div>
          </div>

          <div className="border-2 border-black p-8 bg-white relative text-black">
            <div className="absolute -top-4 left-6 bg-[#F8F9FA] px-3 font-black text-2xl italic uppercase tracking-tighter">Exhibit B</div>
            <div className="text-xs space-y-4 leading-relaxed text-black">
              <div className="bg-gray-100 p-4 border border-black italic">
                <p className="font-black uppercase text-[10px] mb-2 underline">System_Overview:</p>
                {project.details?.abstract || project.context}
              </div>
              {project.details?.features && (
                <div className="pt-2 text-black font-black">
                  <p className="underline mb-3 tracking-widest uppercase">System_Capabilities:</p>
                  <ul className="space-y-3">
                    {project.details.features.map((f: string) => (
                      <li key={f} className="text-[10px] font-bold uppercase border-l-2 border-black pl-3">{f}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {project.details?.testing && (
            <div className="border-2 border-black p-8 bg-white relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <div className="absolute -top-4 left-6 bg-[#F8F9FA] px-3 font-black text-2xl italic uppercase tracking-tighter">Exhibit C</div>
              <table className="w-full text-left text-[10px] uppercase font-bold text-black">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="pb-2">Test_Case</th><th className="pb-2">Outcome</th><th className="pb-2 text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {project.details.testing.map((t: any) => (
                    <tr key={t.case} className="border-b border-dotted border-gray-400">
                      <td className="py-2">{t.case}</td><td className="py-2 italic text-gray-500">{t.result}</td><td className="py-2 text-right text-green-600 font-black">[{t.status}]</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: RELATED ARCHIVE */}
        <div className="lg:col-span-3 text-black">
          <div className="border-2 border-black p-5 bg-white text-black">
            <h3 className="text-xs font-black uppercase mb-6 flex items-center gap-2 italic">
              <span className="w-2 h-2 bg-black rounded-full"></span> Related_Archive
            </h3>
            <div className="space-y-4 text-black font-black">
              {Object.keys(projectDatabase).filter(id => id !== projectID).map(id => (
                <Link key={id} href={`/project/${id}`} className="group block border border-black p-3 hover:bg-black transition-all">
                  <p className="text-[9px] font-bold text-gray-400 uppercase">{id}</p>
                  <p className="text-[11px] font-black uppercase group-hover:text-white italic">{projectDatabase[id].title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}