import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";

interface Certificate {
  title: string;
  organization: string;
  date: string;
  description: string;
  image: string;
  link?: string;
}

const certificates: Certificate[] = [
  {
    title: "Artificial Intelligence & Machine Learning",
    organization: "Your Organization",
    date: "2025",
    description:
      "Certificate related to artificial intelligence, machine learning and practical AI concepts.",
    image: "/certificates/ai-ml.png",
  },
  {
    title: "Web Development",
    organization: "Your Organization",
    date: "2025",
    description:
      "Certificate covering modern web development technologies and application development.",
    image: "/certificates/web-development.png",
  },
  {
    title: "Python Programming",
    organization: "Your Organization",
    date: "2025",
    description:
      "Certificate demonstrating knowledge of Python programming and development fundamentals.",
    image: "/certificates/python.png",
  },
];

function Certificates() {
  return (
    <section
      id="certificates"
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
            Certificates
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <h2 className="section-title max-w-3xl">
              Learning that
              <span> counts.</span>
            </h2>

            <p className="text-gray-500 max-w-md leading-7">
              Certifications and achievements that represent my
              continuous learning and technical growth.
            </p>

          </div>
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                bg-[#111111]
                border
                border-[#252525]
                rounded-3xl
                overflow-hidden
                hover:border-[#ff3b30]
                transition-all
                duration-300
              "
            >

              {/* Certificate Image */}
              <div className="relative h-56 bg-[#181818] overflow-hidden">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                {/* Fallback icon */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    pointer-events-none
                  "
                >
                  <div
                    className="
                      w-20
                      h-20
                      rounded-full
                      bg-[#ff3b30]/10
                      border
                      border-[#ff3b30]/30
                      flex
                      items-center
                      justify-center
                      text-[#ff3b30]
                    "
                  >
                    <FaCertificate size={30} />
                  </div>
                </div>

                {/* Gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#111111]
                    via-transparent
                    to-transparent
                  "
                />

                {/* Number */}
                <span
                  className="
                    absolute
                    top-5
                    left-5
                    w-9
                    h-9
                    rounded-full
                    bg-black/70
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-xs
                    font-semibold
                  "
                >
                  0{index + 1}
                </span>

              </div>

              {/* Content */}
              <div className="p-7">

                <div className="flex items-center justify-between gap-3 mb-4">

                  <span className="text-[#ff3b30] text-xs uppercase tracking-wider">
                    Certificate
                  </span>

                  <span className="text-xs text-gray-600">
                    {certificate.date}
                  </span>

                </div>

                <h3 className="text-xl font-bold leading-7">
                  {certificate.title}
                </h3>

                <p className="text-[#ff3b30] text-sm mt-2">
                  {certificate.organization}
                </p>

                <p className="text-gray-500 text-sm leading-7 mt-4">
                  {certificate.description}
                </p>

                {/* Button */}
                {certificate.link && (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      mt-6
                      text-sm
                      font-semibold
                      text-white
                      hover:text-[#ff3b30]
                      transition
                    "
                  >
                    View Certificate
                    <FaExternalLinkAlt size={11} />
                  </a>
                )}

              </div>

            </motion.article>
          ))}

        </div>

        {/* Bottom */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-8
            rounded-3xl
            border
            border-[#252525]
            bg-[#111111]
            p-8
            md:p-10
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-6
          "
        >

          <div>
            <p className="text-gray-600 text-sm mb-2">
              Continuous learning
            </p>

            <h3 className="text-2xl font-bold">
              More certifications
              <span className="text-[#ff3b30]">
                {" "}coming soon.
              </span>
            </h3>
          </div>

          <a
            href="#resume"
            className="orange-button"
          >
            View Resume
            <FaArrowRight size={12} />
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Certificates;