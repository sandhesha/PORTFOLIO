import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative z-10 bg-[#050505] text-white py-28 px-6 lg:px-16"
    >
      <div className="container-main">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label mb-4">
            Contact Me
          </p>

          <h2 className="section-title max-w-4xl">
            Let's build something
            <span> together.</span>
          </h2>

          <p className="text-gray-500 max-w-xl mt-6 leading-7">
            Have a project idea, collaboration opportunity, or
            simply want to say hello? Send me a message and I'll
            get back to you.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-6">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >

            <div className="h-full bg-[#111111] border border-[#252525] rounded-3xl p-8">

              <p className="text-gray-500 text-sm mb-8">
                Get in touch
              </p>

              {/* Email */}
              <a
                href="mailto:sandeshsandu1010@gmail.com"
                className="group flex items-start gap-5 mb-8"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#ff3b30]/10 border border-[#ff3b30]/20 flex items-center justify-center text-[#ff3b30] group-hover:bg-[#ff3b30] group-hover:text-white transition">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider">
                    Email
                  </p>

                  <p className="text-gray-300 mt-1 group-hover:text-[#ff3b30] transition break-all">
                    sandeshsandu1010@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-5 mb-8">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#ff3b30]/10 border border-[#ff3b30]/20 flex items-center justify-center text-[#ff3b30]">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider">
                    Location
                  </p>

                  <p className="text-gray-300 mt-1">
                    AJ institute of engineering and technology,
                  </p>
                  <h1>  Karnataka, India</h1>
                </div>
              </div>

              {/* Availability */}
              <div className="border-t border-[#252525] pt-8 mt-8">

                <div className="flex items-center gap-3">

                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3b30] opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff3b30]" />
                  </span>

                  <span className="text-sm text-gray-400">
                    Open to opportunities
                  </span>

                </div>

                <p className="text-gray-600 text-sm leading-6 mt-4">
                  I'm always interested in interesting projects,
                  collaborations and opportunities to learn and
                  build something useful.
                </p>

              </div>

              {/* Socials */}
              <div className="border-t border-[#252525] pt-8 mt-8">

                <p className="text-xs text-gray-600 uppercase tracking-wider mb-4">
                  Follow me
                </p>

                <div className="flex gap-3">

                  <a
                    href="https://github.com/sandhesha"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="w-11 h-11 rounded-full border border-[#303030] flex items-center justify-center text-gray-400 hover:bg-[#ff3b30] hover:border-[#ff3b30] hover:text-white transition"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sandhesha/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-11 h-11 rounded-full border border-[#303030] flex items-center justify-center text-gray-400 hover:bg-[#ff3b30] hover:border-[#ff3b30] hover:text-white transition"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="https://instagram.com/sandeshhhh._"
                    aria-label="Instagram"
                    className="w-11 h-11 rounded-full border border-[#303030] flex items-center justify-center text-gray-400 hover:bg-[#ff3b30] hover:border-[#ff3b30] hover:text-white transition"
                  >
                    <FaInstagram />
                  </a>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >

            <form
              onSubmit={handleSubmit}
              className="bg-[#111111] border border-[#252525] rounded-3xl p-8 md:p-10"
            >

              <div className="grid md:grid-cols-2 gap-5">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-gray-500 mb-2"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full bg-[#181818] border border-[#292929] rounded-xl px-4 py-3.5 text-white placeholder:text-gray-700 focus:border-[#ff3b30] transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-500 mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full bg-[#181818] border border-[#292929] rounded-xl px-4 py-3.5 text-white placeholder:text-gray-700 focus:border-[#ff3b30] transition"
                  />
                </div>

              </div>

              {/* Subject */}
              <div className="mt-5">

                <label
                  htmlFor="subject"
                  className="block text-sm text-gray-500 mb-2"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  required
                  className="w-full bg-[#181818] border border-[#292929] rounded-xl px-4 py-3.5 text-white placeholder:text-gray-700 focus:border-[#ff3b30] transition"
                />

              </div>

              {/* Message */}
              <div className="mt-5">

                <label
                  htmlFor="message"
                  className="block text-sm text-gray-500 mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-none bg-[#181818] border border-[#292929] rounded-xl px-4 py-3.5 text-white placeholder:text-gray-700 focus:border-[#ff3b30] transition"
                />

              </div>

              {/* Submit */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-5">

                <button
                  type="submit"
                  className="orange-button"
                >
                  {submitted ? (
                    <>
                      Message Sent
                      <FaArrowRight size={12} />
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane size={12} />
                    </>
                  )}
                </button>

                {submitted && (
                  <p className="text-sm text-[#ff3b30]">
                    Thanks! Your message has been submitted.
                  </p>
                )}

              </div>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;