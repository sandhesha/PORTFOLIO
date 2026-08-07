import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-4"
        >
          Contact <span className="gradient-text">Me</span>
        </motion.h2>

        <p className="text-center text-gray-400 mb-16">
          Have a project or opportunity? Let's connect.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="card p-8 rounded-3xl"
          >

            <h3 className="text-3xl font-bold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-5">
                <FaEnvelope className="text-cyan-400 text-3xl" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400">
                    yourmail@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaPhoneAlt className="text-cyan-400 text-3xl" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-400">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-cyan-400 text-3xl" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-400">
                    Mangalore, Karnataka
                  </p>
                </div>
              </div>

            </div>

            {/* Social Icons */}

            <div className="flex gap-6 mt-12 text-3xl">

              <a
                href="https://github.com/sandhesha"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500 duration-300"
              >
                <FaInstagram />
              </a>

            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="card p-8 rounded-3xl space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-cyan-400"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-cyan-400 resize-none"
            />

            <button
              type="submit"
              className="primary-btn flex items-center gap-3"
            >
              <FaPaperPlane />
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;