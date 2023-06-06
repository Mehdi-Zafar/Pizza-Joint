import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const btnVariants = {
  hidden: { y: "100vh" },
  visible: { y: "0", transition: { duration: "1" } },
  hover: {
    scale: "1.1",
    boxShadow: "2px 2px 12px silver",
    textShadow: "2px 2px 12px white",
    transition: { duration: 0.3 },
  },
  tap: { scale: "0.9" },
};

const Home = () => {
  return (
    <motion.div className="home container">
      <motion.h2
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
        transition={{ duration: "1" }}
        exit={{ y: "-100vh" }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={btnVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          exit={{ y: "100vh" }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
