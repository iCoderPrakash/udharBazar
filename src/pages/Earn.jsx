import React from 'react';
import globe from '../images/globe.png';
import '../css/Earn.css';

const ReferAndEarn = () => {
  return (
    
   <>
  
    <div className=" w-full  min-h-80  bg-gray-50 pt-12 px-6 md:px-24 overflow-hidden">
        <h1 className='text-center text-4xl font-bold pb-32'>Become A Loanbazaar <span className='text-green-600'> Business Associate</span>
        </h1>
    <div className='flex justify-between items-center '>
    <div className="md:w-2/5">
        <h2 className="text-green-600 font-bold text-xl mb-4">REFER & EARN</h2>
        <ul className="space-y-3 text-gray-600 text-xl">
          <li>➞ Earn big and be your own boss.</li>
          <li>➞ Opportunity to create a new source of income for life long.</li>
          <li>
            ➞ Chance to be a DSA [Direct Selling Agent] / partner / referral -
            advisor and work like professional for a bank or NBFC.
          </li>
        </ul>
        <p className="mt-6 text-gray-500 text-lg">
          Looking for specific terms and conditions? View our
          <a href="/" className="text-orange-500 underline">
            Terms Of Use
          </a>
          &
          <a href="/" className="text-orange-500 underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
      <div
        className="md:w-1/2 mt-10 md:mt-0 relative overflow-hidden"
      >
        <img
          src={globe}
          alt="Person with phone"
          className=" absolute top-20 right-0 w-full h-full object-cover animate-spin-slow "
        />
        <img
          src='https://www.loanbazaaronline.com/images/hero/slider-processing-slide-01-image-02.html'
          alt="Person with phone"
          className="relative bottom-0 top-0 w-full h-full object-cover" 
        />
      </div>
    </div> 
    </div>
   </>
  );
};

export default ReferAndEarn;
