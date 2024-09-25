import React from "react";
import hero from "../images/hero.jpg";
import Products from "./Products";
import Section from "./Section";
import Phone from "./Phone";
import CompanyInfo from "./CompanyInfo";
import BanksSlider from "./BankSlider";
import Advantages from "./Advantage";
import Earn from "./Earn";
import Testimonials from './Testimonals';
import FeatureSection from "./FeatureSection";
import Contact from "./Contact";

export default function Home() {
  return (
   <>
    <div
      className="relative bg-cover bg-center w-full h-screen text overflow-hidden"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-green-500 to-transparent opacity-75"></div>
      <div className=" absolute inset-0 flex justify-around items-center gap-1 ml-16">
       <div className="flex flex-col justify-center w-2/6">
       <h4 className="text-xl mb-5 font-bold">Solution for all your Financial Needs</h4>
        <h2 className="text-3xl font-bold mb-5">
          LoanBazaar is one of the India's Largest{" "}
          <span className="text-green-700">Fintech Loan Distributor</span>
        </h2>
        <h3 className="text-lg mb-5">An ISO 270001: 2013 Certified Company.</h3>
        <div >
          <button className="border-none  bg-green-700 px-5 py-2 rounded-lg text-white hover:bg-green-800 ease-linear">Digital Loan Distribute</button>
        </div>
       </div>
       <div className="inset-0">
        <img
          src="https://www.loanbazaaronline.com/images/hero/home-infotechno-main-slider-slide-01-image-02.html"
          alt=""
        />
      </div>
      </div>
      
    </div>
    <Products/>
    <Section/>
    <Phone/>
    <CompanyInfo/>
    <BanksSlider/>
    <div className="w-full h-56 bg-gradient-to-r from-green-700 to-green-400 flex justify-around items-center text-white">
      <h1 className="text-4xl font-bold">Download LoanBazaar App Now</h1>
      <div>
        <img src="https://www.loanbazaaronline.com/images/icons/aeroland-black-button-google-play.html" alt="" />
      </div>
    </div>
    <Advantages/>
    <FeatureSection/>
    <Earn/>
    <Testimonials/>
    <Contact/>
   </>
  );
}
