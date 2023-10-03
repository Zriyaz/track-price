"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const HeroCarousel = () => {
  const heroImages = [
    { imgUrl: "assets/images/hero-1.svg", alt: "smart-watch" },
    { imgUrl: "assets/images/hero-1.svg", alt: "bag" },
    { imgUrl: "assets/images/hero-3.svg", alt: "lamb" },
    { imgUrl: "assets/images/hero-4.svg", alt: "air fryer" },
    { imgUrl: "assets/images/hero-5.svg", alt: "chair" },
  ];
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        // autoPlay
        infiniteLoop
        // interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages?.map((img) => (
          <Image
            src={img.imgUrl}
            alt={img.alt}
            width={484}
            height={484}
            className="object-contain"
            key={img.alt}
          />
        ))}
      </Carousel>
      <Image
        src="/assets/icons/hand-drawn-arrow.svg"
        height={175}
        width={175}
        alt="arrow"
        className="max-xl:hidden absolute -left-[15%] bottom-0"
      />
    </div>
  );
};

export default HeroCarousel;
