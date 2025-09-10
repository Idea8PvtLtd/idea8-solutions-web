import React from "react";

const PhotoCarousel = () => {
  // Sample images - replace with your actual image URLs
  const images = [
    "/images/team_1.jpg",
    "/images/team_2.jpg",
    "/images/team_3.jpg",
    "/images/team_4.jpg",
    "/images/team_5.jpg",
    "/images/team_6.jpg",
    "/images/team_7.jpg",
    "/images/internal.jpg",
    "/images/internal_2.jpg",
  ];

  // Double the images for seamless loop
  const topRowImages = [...images, ...images];
  const bottomRowImages = [...images, ...images];

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
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
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
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
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
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll-left {
            animation: scroll-left 40s linear infinite;
          }

          .animate-scroll-right {
            animation: scroll-right 40s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default PhotoCarousel;
