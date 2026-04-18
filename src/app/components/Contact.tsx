import React, { useState } from "react";
import { motion } from "motion/react";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shivansh-bhargava-504938243",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/shivansh02_22",
    icon: Instagram,
  },
  {
    label: "GitHub",
    href: "https://github.com/shivansh01-22",
    icon: Github,
  },
];

export const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (form.message.trim().length < 10) {
      nextErrors.message = "Please write at least 10 characters.";
    }
    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setStatus("");
      return;
    }

    // Mailto keeps the form functional without needing a backend service.
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.email}`);
    window.location.href = `mailto:shivanshbhargava411@gmail.com?subject=${subject}&body=${body}`;
    setStatus("Your email app is ready with the message.");
    setForm(initialForm);
  };

  return (
    <section id="contact" className="bg-[#f8fbff] py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-3 font-semibold uppercase tracking-wider text-[#0058BC]">
              Contact
            </p>
            <h2 className="text-4xl font-extrabold leading-tight text-gray-950 md:text-5xl">
              Let us build a polished digital experience.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Share your project idea, portfolio requirement, or website update.
              I will respond with a clear next step.
            </p>

            <div className="mt-10 grid gap-4">
              {[
                [Mail, "Email", "shivanshbhargava411@gmail.com"],
                [Phone, "Phone", "+91 9340262220"],
                [MapPin, "Location", "Indore, Madhya Pradesh"],
              ].map(([Icon, label, value]) => (
                <div
                  key={label as string}
                  className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0058BC]/10 text-[#0058BC]">
                    {React.createElement(Icon as typeof Mail, { size: 22 })}
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      {label as string}
                    </p>
                    <p className="font-bold text-gray-950">{value as string}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0058BC] text-white transition hover:-translate-y-1 hover:bg-[#004a9e]"
                >
                  <link.icon size={19} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-lg border border-gray-100 bg-white p-6 shadow-xl shadow-gray-100"
            noValidate
          >
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-semibold text-gray-800">
                Name
                <input
                  value={form.name}
                  onChange={(event) =>
                    setForm({ ...form, name: event.target.value })
                  }
                  className="rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#0058BC] focus:ring-4 focus:ring-[#0058BC]/10"
                  placeholder="Your name"
                />
                {errors.name && (
                  <span className="text-sm text-red-600">{errors.name}</span>
                )}
              </label>

              <label className="grid gap-2 text-sm font-semibold text-gray-800">
                Email
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm({ ...form, email: event.target.value })
                  }
                  className="rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#0058BC] focus:ring-4 focus:ring-[#0058BC]/10"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <span className="text-sm text-red-600">{errors.email}</span>
                )}
              </label>

              <label className="grid gap-2 text-sm font-semibold text-gray-800">
                Message
                <textarea
                  value={form.message}
                  onChange={(event) =>
                    setForm({ ...form, message: event.target.value })
                  }
                  className="min-h-36 resize-y rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#0058BC] focus:ring-4 focus:ring-[#0058BC]/10"
                  placeholder="Tell me about your project"
                />
                {errors.message && (
                  <span className="text-sm text-red-600">
                    {errors.message}
                  </span>
                )}
              </label>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-lg bg-[#0058BC] px-7 py-3 font-semibold text-white shadow-lg shadow-[#0058BC]/20 transition hover:bg-[#004a9e]"
              >
                Send Message
              </motion.button>

              {status && (
                <p className="rounded-lg bg-[#0058BC]/10 p-3 text-sm font-semibold text-[#0058BC]">
                  {status}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
