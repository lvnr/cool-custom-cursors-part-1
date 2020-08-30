import { useEffect } from "react";
import Head from "next/head";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Home() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="App">
      <Head>
        <title>Cool Custom Cursors - Part 1</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <h1>
        Cool
        <br />
        Custom
        <br />
        Cursors
      </h1>
      <motion.div
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
    </div>
  );
}
