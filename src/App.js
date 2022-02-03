import { useRef, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { motion } from "framer-motion";
import images from "./images";

function App() {
  const [width, setWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    setWidth(ref.current.scrollWidth - ref.current.offsetWidth);
  }, []);

  return (
    <div className="App">
      <motion.div ref={ref} className="carousel">
        <motion.div
          drag="x"
          // whileTap={{ cursor: "grabbing" }}
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((img, i) => (
            <motion.div key={i} className="item">
              <img src={img} alt="" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
