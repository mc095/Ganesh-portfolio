// ./src/components/Footer.jsx

import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Github",
      href: "https://github.com/mc095",
    },
    
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ganesh097/",
    },
    {
      name: "Spotify ✨",
      href: "https://open.spotify.com/user/31eiobsw6mvowylhyokvhodph6tu",
    },
  ];

  return (
    <footer className="w-full py-8 mt-1">
      <div className="container mx-auto flex justify-center items-center gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-400 hover:text-gray-300 transition-colors text-sm sm:text-sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
