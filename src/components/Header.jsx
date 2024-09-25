import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { MdKeyboardArrowDown, MdArrowForwardIos } from "react-icons/md";
import Navbar from "./Navbar";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null); 
  const headerRef = useRef(null);
  const loanMenuRef = useRef(null);
  const cardMenuRef = useRef(null);
  const investmentMenuRef = useRef(null);

  const handleMouseEnter = (menuType) => {
    setOpenMenu(menuType);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null); 
  };

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(headerRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power1.in",
          position: "sticky",
        });
      } else {
        gsap.to(headerRef.current, {
          y: -200,
          opacity: 1,
          duration: 0,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const menus = {
      loan: loanMenuRef,
      card: cardMenuRef,
      investment: investmentMenuRef,
    };

    Object.keys(menus).forEach((key) => {
      const menuRef = menus[key];
      if (openMenu === key) {
        gsap.to(menuRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.2,
          display: "block",
        });
      } else {
        gsap.to(menuRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.2,
          display: "none",
        });
      }
    });
  }, [openMenu]);

  return (
    <>
      <Navbar />
      <nav
        ref={headerRef}
        className="w-full h-20 text-white bg-white flex justify-between items-center z-50"
        style={{ position: "sticky", top: "0" }}
      >
        <div>
          <h1 className="text-green-500 pl-14 font-bold">
            <span>Udhar</span>Bazar
          </h1>
        </div>
        <div
          className="bg-gradient-to-r from-green-800 via-green-700 to-green-600 h-full flex justify-around items-center rounded-bl-full"
          style={{ width: "83%" }}
        >
          <div className="relative inline-block">
            <ul className="flex space-x-7 items-center">
              
              <div
                onMouseEnter={() => handleMouseEnter("loan")}
                onMouseLeave={handleMouseLeave}
                className="relative cursor-pointer"
              >
                <span className="flex justify-center items-center gap-1">
                  Loans <MdKeyboardArrowDown className="text-xl" />
                </span>
                <div
                  ref={loanMenuRef}
                  className="absolute left-0 mt-2 w-52 bg-white rounded-md shadow-lg opacity-0 transition-all"
                  style={{ display: "none" }}
                >
                  <Link className="flex justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Personal Loan <MdArrowForwardIos />
                  </Link>
                  <Link className="flex justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Home Loan <MdArrowForwardIos />
                  </Link>
                  <Link className="flex justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Business Loan <MdArrowForwardIos />
                  </Link>
                </div>
              </div>

              <div
                onMouseEnter={() => handleMouseEnter("card")}
                onMouseLeave={handleMouseLeave}
                className="relative cursor-pointer"
              >
                <span className="flex justify-center items-center gap-1">
                  Cards <MdKeyboardArrowDown className="text-xl" />
                </span>
                <div
                  ref={cardMenuRef}
                  className="absolute left-0 mt-2 w-52 bg-white rounded-md shadow-lg opacity-0 transition-all"
                  style={{ display: "none" }}
                >
                  <Link className="flex justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Personal Loan <MdArrowForwardIos />
                  </Link>
                  <Link className="flex justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Home Loan <MdArrowForwardIos />
                  </Link>
                  <Link className="flex justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Business Loan <MdArrowForwardIos />
                  </Link>
                </div>
              </div>

              <Link className="">Insurance</Link>

              <div
                onMouseEnter={() => handleMouseEnter("investment")}
                onMouseLeave={handleMouseLeave}
                className="relative cursor-pointer"
              >
                <span className="flex justify-center items-center gap-1">
                  Investment <MdKeyboardArrowDown className="text-xl" />
                </span>
                <div
                  ref={investmentMenuRef}
                  className="absolute left-0 mt-2 w-52 bg-white rounded-md shadow-lg opacity-0 transition-all"
                  style={{ display: "none" }}
                >
                  <Link className="flex justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Gold Loan <MdArrowForwardIos />
                  </Link>
                  <Link className="flex justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Mortgage Loan <MdArrowForwardIos />
                  </Link>
                  <Link className="flex justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Business Loan <MdArrowForwardIos />
                  </Link>
                </div>
              </div>

              <Link className="">Our Team</Link>
              <Link className="">Contact us</Link>
            </ul>
          </div>
          <div className="border-none bg-green-500 px-5 py-2 rounded-lg hover:translate-y-1 ease-in">
            <button>Digital Loan Distribute</button>
          </div>
        </div>
      </nav>
    </>
  );
}
