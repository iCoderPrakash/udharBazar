import React from 'react';

import combinedServicesIcon from '../images/cloud.png';
import userFriendlyIcon from '../images/cloud2.png';
import backendTaskIcon from '../images/cloud3.png';
import easyEarningIcon from '../images/cloud4.png';
import hero from "../images/hero.jpg";

const FeaturesSection = () => {
  return (
    <div className="relative">
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero})` }}
      >
        
        <div className="absolute inset-0 bg-custom-gradient opacity-90"></div>

        <div className="relative max-w-7xl mx-auto py-16 px-6 text-center">
          <h2 className="text-lg font-bold text-gray-800 uppercase mb-4">
            Industries We Serve
          </h2>
          <p className="text-4xl font-bold text-gray-900 mb-12">
            For your very specific industry, <br />
            we have highly-talented IT solutions.
          </p>

       
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white shadow-lg p-6 pb-16 pt-16 rounded-lg hover:bg-green-600 hover:text-white ease-in-out duration-700 overflow-hidden">
              <img
                src={combinedServicesIcon} 
                alt="Combined Services"
                className="mx-auto mb-4 w-36 h-36"
              />
              <h3 className="text-xl font-semibold mb-2">
                Combined Services
              </h3>
              <p className="">
                Aggregates Tools & Services offered by different fintech companies on a single platform.
              </p>
            </div>

         
            <div className="bg-white shadow-lg p-6 pb-16 pt-16 rounded-lg hover:bg-green-600 hover:text-white ease-in-out duration-700 overflow-hidden">
              <img
                src={userFriendlyIcon} 
                alt="User Friendly"
                className="mx-auto mb-4  w-36 h-36"
              />
              <h3 className="text-xl font-semiboldtext-gray-800 mb-2">
                User Friendly
              </h3>
              <p className="">
                Enables groups or individuals to use these tools & services for improving their service delivery.
              </p>
            </div>

          
          
            <div className="bg-white shadow-lg p-6 pb-16 pt-16 rounded-lg hover:bg-green-600 hover:text-white ease-in-out duration-700 overflow-hidden">
              <img
                src={easyEarningIcon} 
                alt="Easy Earning"
                className="mx-auto mb-4  w-36 h-36"
              />
              <h3 className="text-xl font-semibold0 mb-2">
                Easy Earning
              </h3>
              <p className="">
                Platform for everyone to start earning with its ready-to-use training and information content.
              </p>
            </div>

          
            <div className="bg-white shadow-lg p-6 pb-16 pt-16 rounded-lg hover:bg-green-600 hover:text-white ease-in-out duration-700 overflow-hidden">
              <img
                src={backendTaskIcon} 
                alt="Supports Backend Task"
                className="mx-auto mb-4  w-36 h-36"
              />
              <h3 className="text-xl font-semibold  mb-2">
                Supports Backend Task
              </h3>
              <p className="">
                Enables you to focus on growing your business by taking care of your backend tasks.
              </p>
            </div>
           
          </div>
          <h4 className='pt-24 font-semibold text-lg'>Just like aggregators in domains like Food delivery (Swiggy, Zomato), Transport (Ola Cabs & Uber) Loanbazaar is an aggregator in the Fintech domain, enabling existing finance professionals to serve their customers better & providing opportunities to earn more.</h4>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
