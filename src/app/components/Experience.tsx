import React from "react";
import { motion } from "motion/react";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "Experience",
    title: "UI/UX Designer and Frontend Developer",
    place: "Freelance / Project Work / Job",
    period: "2023 - Present",
    description:
      "Designing interfaces, brand visuals, responsive websites, and portfolio experiences for real business needs.",
    icon: BriefcaseBusiness,
  },
  {
    type: "Education",
    title: "Master of Computer Applications",
    place: "MCA",
    period: "Complete",
    description:
      "Building a stronger foundation in software development, web technologies, and problem solving.",
    icon: GraduationCap,
  },
  {
    type: "Practice",
    title: "Design Systems and Frontend Skills",
    place: "Figma, React",
    period: "Ongoing",
    description:
      "Improving workflows with reusable components, consistent spacing, accessibility, and performance-minded implementation.",
    icon: BriefcaseBusiness,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 font-semibold uppercase tracking-wider text-[#0058BC]">
            Experience and education
          </p>
          <h2 className="text-4xl font-extrabold text-gray-950 md:text-5xl">
            A growing blend of design and technology.
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="grid gap-5 rounded-lg border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[auto_1fr_auto] md:items-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0058BC]/10 text-[#0058BC]">
                <item.icon size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#0058BC]">
                  {item.type}
                </p>
                <h3 className="mt-1 text-2xl font-bold text-gray-950">
                  {item.title}
                </h3>
                <p className="mt-1 font-medium text-gray-700">{item.place}</p>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <p className="rounded-lg bg-[#0058BC]/10 px-4 py-2 text-sm font-semibold text-[#0058BC]">
                {item.period}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
