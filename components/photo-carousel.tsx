import React, { useState, useEffect } from "react";

const PhotoCarousel = () => {
  // Sample images - replace with your actual image URLs
  const topRowBaseImages = [
    "/images/team_1.jpg",
    "/images/team_2.jpg",
    "/images/team_3.jpg",
    "/images/team_4.jpg",
    "/images/team_5.jpg",
  ];

  const bottomRowBaseImages = [
    "/images/team_6.jpg",
    "/images/team_7.jpg",
    "/images/internal.jpg",
    "/images/internal_2.jpg",
    "/images/2nd_image.jpg",
    "/images/service_1.jpg",
    "/images/header.jpg",
  ];

  const [topRowImages, setTopRowImages] = useState<string[]>([]);
  const [bottomRowImages, setBottomRowImages] = useState<string[]>([]);

  // Shuffle array function
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Initialize carousel with shuffled images
  useEffect(() => {
    const shuffledTop = shuffleArray(topRowBaseImages);
    const shuffledBottom = shuffleArray(bottomRowBaseImages);

    // Create seamless loops with tripled images for infinite scrolling
    setTopRowImages([...shuffledTop, ...shuffledTop, ...shuffledTop]);
    setBottomRowImages([
      ...shuffledBottom,
      ...shuffledBottom,
      ...shuffledBottom,
    ]);
  }, []);

  // Rotate images between rows periodically
  useEffect(() => {
    const rotateImages = () => {
      // Shuffle top row images
      const newShuffledTop = shuffleArray(topRowBaseImages);
      setTopRowImages([
        ...newShuffledTop,
        ...newShuffledTop,
        ...newShuffledTop,
      ]);

      // Shuffle bottom row images
      const newShuffledBottom = shuffleArray(bottomRowBaseImages);
      setBottomRowImages([
        ...newShuffledBottom,
        ...newShuffledBottom,
        ...newShuffledBottom,
      ]);
    };

    // Rotate images every 40 seconds (half of animation duration)
    const rotationInterval = setInterval(rotateImages, 40000);

    return () => clearInterval(rotationInterval);
  }, []);

  return (
    <div className="wrapper">
      <div className="relative w-full overflow-hidden section-padding-sm bg-background">
        {/* Top Row - Moving Left */}
        <div className="relative mb-4">
          <div className="flex animate-scroll-left">
            {topRowImages.map((src, index) => (
              <div
                key={`top-${index}`}
                className="flex-none w-80 h-60 mx-2 rounded-md overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 cursor-grab"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Moving Right */}
        <div className="relative">
          <div className="flex animate-scroll-right">
            {bottomRowImages.map((src, index) => (
              <div
                key={`bottom-${index}`}
                className="flex-none w-80 h-60 mx-2 rounded-md overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 cursor-grab"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Left Gradient Overlay */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />

        {/* Right Gradient Overlay */}
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10" />

        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          @keyframes scroll-right {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll-left {
            animation: scroll-left 80s linear infinite;
          }

          .animate-scroll-right {
            animation: scroll-right 80s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default PhotoCarousel;
