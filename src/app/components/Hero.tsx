import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] overflow-hidden bg-white pb-20 pt-28"
    >
      <div className="absolute inset-y-20 right-0 hidden w-[48%] bg-[url('/profile.jpeg')] bg-cover bg-center opacity-15 lg:block" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_55%,rgba(255,255,255,0.82)_100%)]" />

      <div className="container relative mx-auto px-6">
        <div className="grid min-h-[72vh] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-[#0058BC]/15 bg-[#0058BC]/5 px-4 py-2 text-sm font-semibold text-[#0058BC]">
              <Sparkles size={16} />
              Available for design and frontend projects
            </div>
            <p className="mb-2 text-lg font-semibold text-[#0058BC]">
              Hey, I am Shivansh Bhargava
            </p>
            <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-normal text-gray-950 md:text-4xl">
              UI/UX Designer and Frontend Developer
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
             I design and build modern, responsive websites with clean UI and smooth user experience.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0058BC] px-7 py-3 font-semibold text-white shadow-lg shadow-[#0058BC]/20 transition hover:bg-[#004a9e]"
              >
                View Projects
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="/Shivansh_Bhargava_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-7 py-3 font-semibold text-gray-900 transition hover:border-[#0058BC] hover:text-[#0058BC]"
              >
                Open Resume
                <Download size={18} />
              </motion.a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-gray-100 pt-8">
              {[
                ["10+", "Projects"],
                ["9+", "Core Skills"],
                ["MCA", "Education"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-gray-950">{value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md pb-10 lg:max-w-lg"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-gray-100 bg-gray-50 shadow-2xl shadow-gray-200">
              <img
                src="/profile.jpeg"
                alt="Shivansh Bhargava"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-6 right-6 rounded-lg border border-gray-100 bg-white p-5 shadow-xl shadow-gray-200">
              <p className="text-sm font-semibold text-[#0058BC]">Current focus</p>
              <p className="mt-1 text-gray-800">
                Product interfaces, portfolio websites, brand visuals.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
