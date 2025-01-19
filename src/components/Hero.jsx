// ./src/components/Hero.jsx

import React from "react";
import ProfileImage from "./Images/profile.gif"

// https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjMzZ3N3MGdldDBiMjBpejE1NXc1Nm80Nzc4bm96dWpqbmg0d2d5ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OJYmB0SL4EVu8REklW/giphy.gif

const Hero = () => {
  return (
    <section className="flex flex-col items-start max-w-2xl mx-auto px-4 pt-8 sm:pt-16 font-roboto">
      <header className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
        <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full overflow-hidden">
          <img
            src={ProfileImage}// Direct URL to the Giphy GIF
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="flex items-center gap-2 text-sm sm:text-base text-white font-poppins">
            Ganesh
            <img
              src="https://cdn3.emoji.gg/emojis/2089-instagram-verified.png"
              alt="Verified"
              className="w-5 sm:w-8 h-5 sm:h-8"
            />
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm">
            Nerdy Tech Explorer
          </p>
        </div>
      </header>

      {/* Bio Section */}
      <p className="text-[#7e89a2] leading-relaxed text-sm sm:text-base">
        I'm a rookie web engineer and design enthusiast who loves creating
        clean, user-friendly interfaces. I enjoy simplifying complex concepts to
        make learning and coding more fun. When I'm not coding, you'll find me
        immersed in anime or lost in music - both of which fuel my creativity
        and provide a fresh perspective on design and development.
      </p>
    </section>
  );
};

export default Hero;