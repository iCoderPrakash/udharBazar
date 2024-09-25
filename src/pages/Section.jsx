import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const elements = section.querySelectorAll(".animate");

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          x: 500, 
          opacity: 0,
          display: "none",
        },
        {
          display: "",
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top 80%", 
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="w-full min-h-96 bg-gradient-to-r from-green-400 to-green-700 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center animate">
        <div style={{ width: "55%" }} className="mt-24 mb-20 animate">
          <h4 className="text-xl mb-5 font-semibold">APPLY IN THREE EASY STEPS</h4>
          <h1 className="text-4xl font-bold">
            Our Expert Professional, Will Ensure Minimum Documentation and
            Maximum Loan for You.
          </h1>
        </div>
        <div className="flex mt-24 mb-20 animate">
          <h1 className="text-9xl text-gray-400 font-bold relative">
            03
            <span className="text-lg text-black absolute top-16 left-8">
              <span className="relative">steps</span>
              <span className="absolute top-3 right-12 bg-green-900 h-1 w-8"></span>
            </span>
          </h1>
        </div>
      </div>
      <div className="container mx-auto flex w-4/5 justify-around items-center animate">
        <div className="relative mb-10 md:mb-0 animate">
          <div className="bg-white absolute top-2 left-10" style={{ height: "1px", width: "90%" }}></div>
          <div className="mb-16">
            <span className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black ease-in-out duration-700">
              1
            </span>
          </div>
          <div className="mb-16">
            <h3>01. Complete the application</h3>
            <p>Firstly, let us know a bit about you and requirements of the credit.</p>
            <p>—</p>
          </div>
        </div>
        <div className="relative mb-10 md:mb-0 animate">
          <div className="bg-white absolute top-2 left-10" style={{ height: "1px", width: "90%" }}></div>
          <div className="mb-16">
            <span className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black ease-in-out duration-700">
              2
            </span>
          </div>
          <div className="mb-16">
            <h3>02. Getting approval</h3>
            <p>It gets certified within few working hours of submitting your data.</p>
            <p>—</p>
          </div>
        </div>
        <div className="relative animate">
          <div className="mb-16">
            <span className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black ease-in-out duration-700">
              3
            </span>
          </div>
          <div className="mb-16">
            <h3>03. Secure Your Funds</h3>
            <p>We sent money instantly after the approval and a quick work out of details.</p>
            <p>—</p>
          </div>
        </div>
      </div>
    </div>
  );
}
