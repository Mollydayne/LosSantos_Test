import { useEffect, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      if (top > 100) setVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ${
        visible
          ? "translate-x-0 opacity-100"
          : "-translate-x-20 opacity-0"
      } p-10 flex flex-col items-center text-white bg-gray-800`}
    >
      <img
        src="/your-photo.jpg"
        alt="Molly"
        className="w-48 h-48 object-cover rounded-full mb-4"
      />
      <p className="max-w-xl text-center">
        Hi! I'm Molly. I'm a fullstack developer with a taste for design and
        impact.
      </p>
    </div>
  );
}
