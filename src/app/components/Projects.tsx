import React from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Kiran Jain Portfolio",
    category: "Design & Development",
    image: "/image01.png",
    url: "https://modelortfolio.spinfotechindia.com/",
  },
  {
    title: "Company Website",
    category: "Design & Development",
    image: "/image02.png",
    url: "https://misteredtech.in/",
  },
  {
    title: "Shopping Website",
    category: "UI/UX Design",
    image: "/image04.png",
    url: "https://dawnnrise.com/",
  },
  {
    title: "Fabric & Fragrance Store",
    category: "UI/UX Design",
    image: "/image03.png",
    url: "https://zareenfabricandfragrance.com/",
  },
  {
    title: "Portfolio Website",
    category: "Design & Development",
    image: "/image05.png",
    url: "https://shivansh01-22.github.io/Project01/",
  },
  {
    title: "Glia Tech Mobile App",
    category: "UI/UX Design",
    image: "/image06.jpeg",
    url: "https://play.google.com/store/apps/details?id=com.new_glia.new_glia_tech1",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="bg-[#f8fbff] py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 font-semibold uppercase tracking-wider text-[#0058BC]">
            Projects
          </p>
          <h2 className="text-4xl font-extrabold text-gray-950 md:text-5xl">
            Selected work with thoughtful details.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Portfolio, ecommerce, business, and app projects created with
            responsive layouts, modern visuals, and smooth interactions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group block overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition hover:border-[#0058BC]/25 hover:shadow-xl hover:shadow-gray-100"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#0058BC]">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-gray-950">
                  {project.title}
                </h3>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#0058BC]">
                  View Project
                  <ExternalLink
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
