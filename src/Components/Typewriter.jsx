import { useEffect, useState } from "react";

export default function Typewriter({ phrases = [], speed = 80, pause = 1400 }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index >= phrases.length) {
      setIndex(0);
      return;
    }
    if (subIndex === phrases[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), pause);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 1.5 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, phrases, speed, pause]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="text-gray-300 text-lg flex items-center">
      <div className="mr-2">{phrases[index].substring(0, subIndex)}</div>
      <div className="typewriter-caret" style={{ background: `rgb(var(--accent))`, opacity: blink ? 1 : 0 }} />
    </div>
  );
}
