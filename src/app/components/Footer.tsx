import React from "react";
import {
  ArrowUp,
  Copyright,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#f8fbff]">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 py-14 md:py-16 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#home"
                className="inline-flex items-center gap-3 text-gray-950"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0058BC] text-lg font-extrabold text-white">
                  SB
                </span>
                <span>
                  <span className="block text-2xl font-extrabold tracking-normal">
                    Shivansh Bhargava
                  </span>
                  <span className="mt-1 block text-sm font-medium text-muted-foreground">
                    UI/UX Designer and Frontend Developer
                  </span>
                </span>
              </a>

              <p className="mt-6 max-w-md leading-7 text-muted-foreground">
                Clean interfaces, responsive websites, and visual systems made
                with design clarity and frontend precision.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center justify-center rounded-lg bg-[#0058BC] px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#004a9e] hover:shadow-lg hover:shadow-[#0058BC]/20"
              >
                Start a Project
              </a>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-950">
                Quick links
              </h4>
              <nav className="mt-5 grid gap-3">
                {footerLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="w-fit font-medium text-muted-foreground transition hover:translate-x-1 hover:text-[#0058BC]"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-950">
                Contact
              </h4>
              <div className="mt-5 grid gap-4">
                <a
                  href="mailto:shivanshbhargava411@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground transition hover:text-[#0058BC]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#0058BC] shadow-sm">
                    <Mail size={17} />
                  </span>
                  shivanshbhargava411@gmail.com
                </a>
                <p className="flex items-center gap-3 text-muted-foreground">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#0058BC] shadow-sm">
                    <MapPin size={17} />
                  </span>
                  Indore, Madhya Pradesh
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                {[
                  [
                    "LinkedIn",
                    "https://www.linkedin.com/in/shivansh-bhargava-504938243",
                    Linkedin,
                  ],
                  [
                    "Instagram",
                    "https://www.instagram.com/shivansh02_22",
                    Instagram,
                  ],
                  ["GitHub", "https://github.com/shivansh01-22", Github],
                ].map(([label, href, Icon]) => (
                  <a
                    key={label as string}
                    href={href as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label as string}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#0058BC] shadow-sm transition hover:-translate-y-1 hover:bg-[#0058BC] hover:text-white"
                  >
                    {React.createElement(Icon as typeof Linkedin, {
                      size: 18,
                    })}
                  </a>
                ))}
              </div>
            </div>
          </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-[#0058BC]/10 py-5 text-sm text-muted-foreground md:flex-row">
            <p className="flex items-center gap-2">
              <Copyright size={16} />
              2026 Shivansh Bhargava. All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#0058BC] text-white shadow-lg shadow-[#0058BC]/20 transition hover:-translate-y-1 hover:bg-[#004a9e]"
            >
              <ArrowUp size={19} />
            </button>
          </div>
      </div>
    </footer>
  );
};
