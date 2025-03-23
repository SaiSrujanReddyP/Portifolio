import  { useEffect, useState } from "react";
import { useTrail, animated } from "@react-spring/web";
import '../styles/globals.css';

const text = "Ir0nw0lf".split("");
const titles = ["CTF Player", "Web Enthusiast", "Fullstack Developer"];

const CoolTextAnimation = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [state, setState] = useState(true);

  const [trail] = useTrail(
    text.length,
    () => ({
      opacity: 1,
      y: 0,
      padding: 1,
      color: `rgb(var(--${state ? "primary" : "neutral"}-9))`,
      from: {
        opacity: 0,
        y: state ? -5 : 5,
        padding: state ? 0 : 1,
        color: `rgb(var(--${state ? "neutral" : "primary"}-9))`,
      },
    }),
    [state]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => !prev);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center p-1 w-full h-full">
      <div className="flex items-center gap-2 font-Syncrone font-medium text-3xl lg:text-3xl select-none special">
        {trail.map((props, i) => (
          <animated.span key={i} style={props}>
            {text[i]}
          </animated.span>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-1 mb-8 font-mono text-neutral-10 text-xs text-center">
      <span style={{ color: `rgb(var(--${titleIndex % 2 === 0 ? "neutral" : "primary"}-9))` }}>
          <a
            href="https://github.com/SaiSrujanReddyP"
            className="inline-block transition duration-300 hover:-translate-y-px outline-none hover:text-primary-10 focus-visible:text-primary-10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Developer"
          >
            {titles[titleIndex]}
          </a>
        </span>
      </div>
    </div>
  );
};

export default CoolTextAnimation;
