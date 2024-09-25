import React from 'react';
import dataanalyse from '../images/dataanalyse.png';
import download from '../images/download.png';
import images from '../images/images.png';
import image from '../images/images.jpeg';

export default function CompanyInfo() {
  return (
    <div>
      <section className="bg-green-600 text-white  text-center py-10">
      <h2 className="text-sm uppercase text-white">Discover Our Company</h2>
      <h1 className="text-4xl font-bold my-4">We've been thriving in 15 years</h1>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-6 text-lg">
        <button className="bg-white text-green-500 px-9 py-2 border border-transparent hover:border-red-500">Our Mission</button>
        <button className=" text-white px-9 py-2 border border-black hover:bg-green-500">Why People Choose Us</button>
        <button className=" text-white  px-9 py-2 border border-black hover:bg-green-500">Our Product</button>
        <button className=" text-white  px-9 py-2 border border-black hover:bg-green-500">Our Achievements</button>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mx-auto">
        <div className="flex justify-center">
          <img
            src={dataanalyse}
            alt="Teamwork"
            className="w-3/4 object-cover"
          />
        </div>
        <div className="text-left w-3/4">
          <h3 className="text-xl font-bold mb-4">Your Data is Our Priority</h3>
          <p className="mb-8 text-lg text-white">
            A protective layering between your data and the world, Loanzabazaar is secured by Digicert Wildcard SSL Protection and hosted on AWS. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet fugiat laborum magni vel, ratione eum sapiente, laboriosam modi incidunt quidem quae tempora cum?
          </p>
          <div className="flex mb-9">
            <img src={download} alt="Digicert" className="w-20" />
            <img src={images} alt="AWS" className="w-20" />
            <img src={image} alt="ISO" className="w-20" />
          </div>
          <p className='underline text-center text-white'>* All trademarks are the property of their respective owners!</p>
        </div>
      </div>
    </section>
    </div>
  )
}
