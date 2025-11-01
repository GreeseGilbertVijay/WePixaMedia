import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeadingIcons = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const headings = [
    {
      title: "Innovation",
      leftImages: [
        "/lovable-uploads/headings-icons-one.png",
        "/lovable-uploads/headings-icons-two.png",
        "/lovable-uploads/headings-icons-three.png",
      ],
      rightImages: [
        "/lovable-uploads/headings-icons-four.png",
        "/lovable-uploads/headings-icons-two.png",
        "/lovable-uploads/headings-icons-five.png",
      ],
    },
    {
      title: "Creativity",
      leftImages: [
        "/lovable-uploads/headings-icons-one.png",
        "/lovable-uploads/headings-icons-two.png",
        "/lovable-uploads/headings-icons-three.png",
      ],
      rightImages: [
        "/lovable-uploads/headings-icons-four.png",
        "/lovable-uploads/headings-icons-two.png",
        "/lovable-uploads/headings-icons-five.png",
      ],
    },
    {
      title: "Sustainability",
      leftImages: [
        "/lovable-uploads/headings-icons-one.png",
        "/lovable-uploads/headings-icons-two.png",
        "/lovable-uploads/headings-icons-three.png",
      ],
      rightImages: [
        "/lovable-uploads/headings-icons-four.png",
        "/lovable-uploads/headings-icons-two.png",
        "/lovable-uploads/headings-icons-five.png",
      ],
    },
    {
      title: "Collaboration",
      leftImages: [
        "/lovable-uploads/headings-icons-one.png",
        "/lovable-uploads/headings-icons-two.png",
        "/lovable-uploads/headings-icons-three.png",
      ],
      rightImages: [
        "/lovable-uploads/headings-icons-four.png",
        "/lovable-uploads/headings-icons-two.png",
        "/lovable-uploads/headings-icons-five.png",
      ],
    },
    {
      title: "Growth",
      leftImages: [
        "/lovable-uploads/headings-icons-one.png",
        "/lovable-uploads/headings-icons-two.png",
        "/lovable-uploads/headings-icons-three.png",
      ],
      rightImages: [
        "/lovable-uploads/headings-icons-four.png",
        "/lovable-uploads/headings-icons-two.png",
        "/lovable-uploads/headings-icons-five.png",
      ],
    },
  ];

  useEffect(() => {
    if (hoveredIndex !== null) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % headings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [hoveredIndex, headings.length]);

  const displayIndex = hoveredIndex ?? activeIndex;

  const imageVariants = {
    initial: { opacity: 0, scale: 0.6, y: -15 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 25 },
  };

  return (
    <div className="flex flex-col items-center py-10 px-4 relative">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">
        Our Vision
      </h1>

      <div className="relative w-full max-w-[500px] text-center">
        {/* === LEFT IMAGES (Desktop) === */}
        <div className="hidden sm:flex absolute -left-28 top-1/2 -translate-y-1/2 flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={displayIndex + "-left-top"}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex space-x-2 mb-2"
            >
              {headings[displayIndex].leftImages.slice(0, 2).map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="icon"
                  className="w-8 h-8 object-contain"
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </motion.div>
            <motion.img
              key={displayIndex + "-left-bottom"}
              src={headings[displayIndex].leftImages[2]}
              alt="icon"
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-8 h-8 object-contain"
              whileHover={{ scale: 1.2 }}
            />
          </AnimatePresence>
        </div>

        {/* === RIGHT IMAGES (Desktop) === */}
        <div className="hidden sm:flex absolute -right-28 top-1/2 -translate-y-1/2 flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={displayIndex + "-right-top"}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex space-x-2 mb-2"
            >
              {headings[displayIndex].rightImages.slice(0, 2).map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="icon"
                  className="w-8 h-8 object-contain"
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </motion.div>
            <motion.img
              key={displayIndex + "-right-bottom"}
              src={headings[displayIndex].rightImages[2]}
              alt="icon"
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-8 h-8 object-contain"
              whileHover={{ scale: 1.2 }}
            />
          </AnimatePresence>
        </div>

        {/* === MOBILE IMAGES (Under Text) === */}
        <div className="flex sm:hidden flex-col items-center mb-4 transition-all duration-500 ease-in-out">
          <AnimatePresence mode="wait">
            <motion.div
              key={displayIndex + "-mobile-icons"}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex justify-center flex-wrap gap-2"
            >
              {[...headings[displayIndex].leftImages, ...headings[displayIndex].rightImages].map(
                (img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt="icon"
                    className="w-7 h-7 object-contain"
                    whileHover={{ scale: 1.2 }}
                  />
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* === HEADINGS === */}
        <p className="text-base sm:text-lg text-white flex flex-wrap justify-center gap-2 transition-colors duration-500">
          {headings.map((item, index) => (
            <span
              key={index}
              className={`relative inline-block cursor-pointer transition-colors duration-500 ${
                hoveredIndex === index
                  ? "text-yellow-400"
                  : displayIndex === index
                  ? "text-blue-400"
                  : "hover:text-yellow-400"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.title}
              {index < headings.length - 1 && ","}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default HeadingIcons;
