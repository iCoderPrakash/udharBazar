import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gsap } from "gsap";

const banks = [
  { id: 1, imgSrc:"https://www.loanbazaaronline.com/images/brand/kmb-logo-hover.png", alt: "IDBI Bank" },
  { id: 2, imgSrc:"https://www.loanbazaaronline.com/images/brand/lic-logo-hover.html", alt: "IDBI Bank" },
  { id: 3, imgSrc:'https://www.loanbazaaronline.com/images/brand/iifl-logo-hover.png', alt: "IDBI Bank" },
  { id: 4, imgSrc:'https://www.loanbazaaronline.com/images/brand/pnb-logo-hover.html', alt: "IDBI Bank" },
  { id: 5, imgSrc:'https://www.loanbazaaronline.com/images/brand/rbl-logo-hover.html', alt: "IDBI Bank" },
];

const BanksSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const logos = document.querySelectorAll(".bank-logo");

    logos.forEach((logo) => {
      gsap.set(logo, { filter: "grayscale(100%)" });

      
      logo.addEventListener("mouseenter", () => {
        gsap.to(logo, { filter: "grayscale(0%)", duration: 0.5 });
      });

      logo.addEventListener("mouseleave", () => {
        gsap.to(logo, { filter: "grayscale(100%)", duration: 0.5 });
      });
    });
  }, []);

  return (
    <div className="my-8 px-4">
      <h4 className="text-center font-bold text-xl mb-7">
        Our Authorized Banks & Financial Institutions
      </h4>
      <h2 className="text-center font-bold text-4xl mb-4">
        We Work With India's Top <span className="text-orange-500">Banks & NBFCs</span>
      </h2>
      <Slider {...settings}>
        {banks.map((bank) => (
          <div key={bank.id} className="flex justify-center items-center">
            <img
              src={bank.imgSrc}
              alt={bank.alt}
              className="h-16 bank-logo" 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BanksSlider;
