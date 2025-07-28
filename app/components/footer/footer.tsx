"use client";

const navLinks = [
  { label: "About", to: "about" },
  { label: "Mission", to: "mission" },
  { label: "Service", to: "service" },
  { label: "Process", to: "process" },
  { label: "Clients", to: "clients" },
  { label: "Team", to: "team" },
  { label: "Contact", to: "contact" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#565253] flex items-center" style={{minHeight: 126}}>
      <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4" style={{height: 'auto'}}>
        {/* Left: Copyright */}
        <div className="flex items-center w-full md:w-[442px] h-[30px] justify-center md:justify-start mb-2 md:mb-0">
          <span
            className="text-white"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '17.9px',
              lineHeight: '30.08px',
              verticalAlign: 'middle',
            }}
          >
            © {year} Bermuda Marketing. All rights reserved.
          </span>
        </div>
        {/* Right: Navigation */}
        <div className="flex items-center w-full md:w-[600px] h-[30px] justify-center md:justify-end">
          <nav className="flex flex-wrap gap-2 rounded px-4 py-2 w-full justify-center md:justify-between">
            {navLinks.map(link => (
              <button
                key={link.to}
                onClick={() => scrollToSection(link.to)}
                className="text-[#D1D5DB] font-medium px-2 py-1 rounded hover:bg-[#565253] transition"
                style={{fontFamily: 'Inter, sans-serif', fontSize: '17.9px', lineHeight: '30.08px'}}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
