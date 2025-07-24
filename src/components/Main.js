import { Facebook, Github, Instagram, Link, Linkedin, Phone } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Main = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      id: "1",
      src: "https://www.jamshidelmi.me/wp-content/uploads/2022/11/firos-nv-Z2c6ounF-iE-unsplash-1200x800.jpg"
    },
    {
      id: "2",
      src: "https://www.jamshidelmi.me/wp-content/uploads/2022/11/20210106_221044.png"
    },
    {
      id: "3",
      src: "https://www.jamshidelmi.me/wp-content/uploads/2022/11/clement-helardot-95YRwf6CNw8-unsplash-1200x800.jpg"
    },
    {
      id: "4",
      src: "https://www.jamshidelmi.me/wp-content/uploads/2022/11/mohammad-rahmani-lPKIb8dJ8kw-unsplash-1200x800.jpg"
    }
  ];

  // ✅ This useEffect runs every 5 seconds to update activeIndex
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds per image

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main">
      <div className="image-slider">
        {images.map((img, i) => (
          <img
            key={img.id}
            height="100%"
            width="100%"
            src={img.src}
            alt={`slide-${i}`}
            className={`slider-img ${i === activeIndex ? "active" : ""}`}
          />
        ))}
      </div>
      <div className="myimage">
        <div className="img">
        <img src ="./profileimg.jpg" alt="/" height="100%" width="100%" />
        </div>
      </div>
      <span className="name">Mohammad Ziya</span>
      <span className ="typewriter">
          <Typewriter
        words={['Full Stack Developer', 'Frontend Developer', 'Coder']}
        loop={true}
        cursor
        cursorStyle='|'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
      </span>
      <div className="logos">
        <Instagram  fill ="white" size="28px"/>
        <Github  fill ="white" size="28px"/>
        <Facebook  fill ="white" size="28px"/>
        <Linkedin  fill ="white" size="28px"/>
      </div>
      <div className = "aboutbuttons">
        <button className ="button1">Download CV<Link fill="white" size="20px"/></button>
        <button className ="button2">Contact me <Phone fill="white" size="20px"/></button>
      </div>
    </div>
  );
};

export default Main;
