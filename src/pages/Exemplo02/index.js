import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.scss";

const Exemplo02 = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <h1>Framer</h1>
      <button onClick={() => setIsVisible(!isVisible)}>CLIQUE</button>
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              // className="box"
              //drag="x"
              //dragConstraints={{ left: 100, right: 400 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              //initial={false}
              //whileInView={{ x: 400 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <div className="box"></div>
            </motion.div>
            {/* <motion.div
              className="box"
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "50%"],
              }}
              transition={{ ease: "easeOut", duration: 1 }}
            /> */}
            <motion.div
              className="box"
              initial={{ opacity: 0.6 }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              whileInView={{ opacity: 1 }}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Exemplo02;
