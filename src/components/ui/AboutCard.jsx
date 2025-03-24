import React, { useRef } from "react";
import card1 from "../../assets/images/cards/card-1.webp";
import card2 from "../../assets/images/cards/card-2.webp";
import card3 from "../../assets/images/cards/card-3.webp";
import card4 from "../../assets/images/cards/card-4.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// Register plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Card = ({ title, copy, index }) => {
  const images = [card1, card2, card3, card4];
  const bgColors = [
    "bg-[#81d9ff]",
    "bg-[#ff8181]",
    "bg-[#81ff81]",
    "bg-[#ff81ff]",
  ];

  return (
    <div className="card relative w-full" id={`card-${index + 1}`}>
      <div className={`card-inner relative will-change-transform w-full h-full p-8 flex flex-col md:flex-row gap-8 md:gap-16 items-center ${bgColors[index]}`}>
        <div className="flex-[3] w-full">
          <h1 className="text-4xl md:text-6xl font-semibold leading-none mb-6 md:mb-10">{title}</h1>
          <p className="text-xl md:text-2xl font-medium">{copy}</p>
        </div>
        <div className="flex-1 w-full aspect-video rounded-xl overflow-hidden">
          <img src={images[index]} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

function AboutCard() {
  const cards = [
    {
      title: "About Us",
      copy: "Nayona Consultancy is a leading provider of IT services and solutions. We are a team of professionals who are passionate about what we do.",
    },
    {
      title: "Our Mission",
      copy: "Our mission is to provide the best IT services and solutions to our clients. We are committed to delivering high-quality services that meet their needs.",
    },
    {
      title: "Our Vision",
      copy: "Our vision is to be the leading provider of IT services and solutions worldwide. We strive to deliver innovative solutions to help our clients achieve their goals.",
    },
    {
      title: "Our Values",
      copy: "Our values are the foundation of our company. We believe in honesty, integrity, and transparency in delivering the best services to our clients.",
    },
  ];

  const container = useRef();

  useGSAP(() => {
  
    // Ensure the container is properly sized
    gsap.set(container.current, { height: "auto" });

    const cardElements = gsap.utils.toArray(".card");

    // Main pinning animation
    ScrollTrigger.create({
      trigger: cardElements[0],
      start: "top 35%",
      endTrigger: cardElements[cardElements.length - 1],
      end: "top 30%",
            pin: ".intro",
      pinSpacing: false,
      markers: true, // Add markers for debugging
    });

    // Card animations
    cardElements.forEach((card, index) => {
      const isLastCard = index === cardElements.length - 1;
      const cardInner = card.querySelector(".card-inner");
      
      if (!isLastCard) {
        ScrollTrigger.create({
            trigger: card,
            start: "top 35%",
            endTrigger: ".outro",
            end: "top 60%",
            pin: true,
            pinSpacing: false,
          markers: true, // Add markers for debugging
        });

        gsap.to(cardInner, {
          y: `-${(cardElements.length - index) * 14}vh`,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 35%",
                        endTrigger: ".outro",
                        end: "top 65%",
                        scrub: true,
         
          },
        });
      }
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, { scope: container });

  return (
    <div className="w-full overflow-hidden" ref={container}>
      <section className="intro w-full h-screen p-8 bg-white flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-semibold">About Us</h1>
      </section>
      
      <section className="cards w-full">
        {cards.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </section>
      
      <section className="outro w-full h-screen p-8 bg-white flex items-center justify-center">

        <p>
            This is the outro section. Scroll back up to see the intro section.
            nayona consultancy
        </p>
      </section>
    </div>
  );
}

export default AboutCard;