import { motion } from "framer-motion";
import {
  FaDownload,
  FaEye,
} from "react-icons/fa";

const certificates = [
  {
    title: "React Development",
    issuer: "Udemy",
    image: "/certificates/certificate1.jpg",
    file: "/certificates/certificate1.jpg",
  },
  {
    title: "Python Programming",
    issuer: "Coursera",
    image: "/certificates/certificate2.jpg",
    file: "/certificates/certificate2.jpg",
  },
  {
    title: "Machine Learning",
    issuer: "NPTEL",
    image: "/certificates/certificate3.jpg",
    file: "/certificates/certificate3.jpg",
  },
  {
    title: "Microsoft Azure",
    issuer: "Microsoft",
    image: "/certificates/certificate4.jpg",
    file: "/certificates/certificate4.jpg",
  },
];

function Certificates() {
  return (
    <section id="certificates" className="py-24">
      <div className="container mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-5xl font-bold text-center mb-4"
        >
          My <span className="gradient-text">Certificates</span>
        </motion.h2>

        <p className="text-center text-gray-400 mb-16">
          Certifications and achievements earned throughout my learning journey.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {certificates.map((certificate, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, y:50 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{
                duration:.5,
                delay:index*.1
              }}
              className="card overflow-hidden rounded-2xl hover:scale-105 duration-300"
            >

              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">

                <h3 className="text-xl font-bold">
                  {certificate.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {certificate.issuer}
                </p>

                <div className="flex gap-3 mt-6">

                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl duration-300"
                  >
                    <FaEye />
                    View
                  </a>

                  <a
                    href={certificate.file}
                    download
                    className="flex-1 flex justify-center items-center gap-2 bg-slate-700 hover:bg-slate-600 py-3 rounded-xl duration-300"
                  >
                    <FaDownload />
                    Download
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;