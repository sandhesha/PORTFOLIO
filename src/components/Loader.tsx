import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 bg-[#030712] flex items-center justify-center z-[9999]">

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >

        <h1 className="text-6xl font-extrabold gradient-text">
          Sandhesha
        </h1>

      </motion.div>

    </div>
  );
}

export default Loader;