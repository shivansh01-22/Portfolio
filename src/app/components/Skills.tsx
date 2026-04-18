import React from "react";
import { motion } from "motion/react";
import {
  Code2,
  Figma,
  Palette,
  PenTool,
  Smartphone,
} from "lucide-react";

const WordPressIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-8.98 10c0-1.3.28-2.54.78-3.65l4.28 11.72A9.02 9.02 0 0 1 3.02 12Zm8.98 8.98c-.88 0-1.73-.13-2.53-.37l2.7-7.85 2.77 7.58c.02.04.04.08.06.11-.94.34-1.95.53-3 .53Zm1.24-13.2c.54-.03 1.03-.09 1.03-.09.48-.06.42-.77-.06-.74 0 0-1.46.12-2.41.12-.9 0-2.42-.12-2.42-.12-.48-.03-.54.71-.06.74 0 0 .47.06.96.09l1.43 3.92-2.01 6.03L6.35 7.78c.54-.03 1.03-.09 1.03-.09.48-.06.42-.77-.06-.74 0 0-1.46.12-2.41.12-.17 0-.37 0-.59-.01A8.97 8.97 0 0 1 12 3.02c2.3 0 4.4.87 5.98 2.29-.04 0-.08-.01-.13-.01-.9 0-1.53.78-1.53 1.61 0 .75.43 1.38.9 2.13.35.61.76 1.38.76 2.5 0 .77-.29 1.67-.69 2.95l-.9 3.01-3.15-9.72Zm3.29 11.97 2.75-7.94c.52-1.3.69-2.35.69-3.29 0-.33-.02-.64-.06-.93A8.97 8.97 0 0 1 21 12a8.98 8.98 0 0 1-4.47 7.75Z" />
  </svg>
);

const skills = [
  { name: "UI/UX Design", level: 92, icon: Figma },
  { name: "Responsive Web Design", level: 90, icon: Smartphone },
  { name: "React.js", level: 50, icon: Code2 },
  { name: "WordPress", level: 60, icon: WordPressIcon },
  { name: "Graphic Design", level: 45, icon: Palette },
  { name: "Wireframing", level: 86, icon: PenTool },
];

export const Skills = () => {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 font-semibold uppercase tracking-wider text-[#0058BC]">
            Skills
          </p>
          <h2 className="text-4xl font-extrabold text-gray-950 md:text-5xl">
            Tools and abilities I use every day.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            A practical mix of design thinking, visual craft, and frontend
            development for clean portfolio and business websites.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition hover:border-[#0058BC]/25 hover:shadow-xl hover:shadow-gray-100"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0058BC]/10 text-[#0058BC]">
                  <skill.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-950">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.level}% proficiency
                  </p>
                </div>
              </div>

              {/* Progress bar gives a quick visual scan of strength per skill. */}
              <div className="h-2 overflow-hidden rounded-lg bg-gray-100">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="h-full rounded-lg bg-[#0058BC]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
