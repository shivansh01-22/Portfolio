import React from "react";
import { motion } from "motion/react";
import { Award, Download, MapPin, UserRound } from "lucide-react";

const highlights = [
  { icon: UserRound, label: "Role", value: "UI/UX Designer" },
  { icon: MapPin, label: "Based in", value: "Indore, India" },
  { icon: Award, label: "Learning", value: "MCA + modern web" },
];

export const About = () => {
  return (
    <section id="about" className="bg-[#f8fbff] py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="mb-3 font-semibold uppercase tracking-wider text-[#0058BC]">
              About me
            </p>
            <h2 className="text-4xl font-extrabold leading-tight text-gray-950 md:text-5xl">
              Designing simple experiences for real people.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I am Shivansh Bhargava, a UI/UX Designer, Frontend Developer, and
              Graphic Designer based in Indore. I focus on creating clean,
              user-friendly digital products that balance visual quality,
              usability, and performance.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              My workflow combines Figma, Canva, Photoshop, HTML, CSS,
              Bootstrap, Tailwind CSS, JavaScript, React.js, WordPress, and AI
              tools to move from idea to launch with clarity.
            </p>
            <motion.a
              href="/Shivansh_Bhargava_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#0058BC] px-7 py-3 font-semibold text-white shadow-lg shadow-[#0058BC]/20 transition hover:bg-[#004a9e]"
            >
              Open Resume
              <Download size={19} />
            </motion.a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#0058BC]/10 text-[#0058BC]">
                  <item.icon size={22} />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-2 text-xl font-bold text-gray-950">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
