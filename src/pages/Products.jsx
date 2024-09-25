import React from "react";


import { FaHome, FaCar, FaBriefcase, FaCreditCard } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import { MdRealEstateAgent } from "react-icons/md";

const ProductCard = ({ icon, title }) => {
  return (
    <div className="border border-green-500 rounded-lg shadow-md p-6 flex flex-col items-center hover:bg-green-600 hover:text-white ease-in-out duration-700">
      <div className="text-green-500  text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default function Products() {
  const products = [
    { icon: <FaHome />, title: "Home Loan" },
    { icon: <GiCash />, title: "Personal Loan" },
    { icon: <MdRealEstateAgent />, title: "Loan Against Property" },
    { icon: <FaBriefcase />, title: "Business Loan" },
    { icon: <FaCar />, title: "Car Loan" },
    { icon: <FaCreditCard />, title: "Credit Cards" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-800">OUR PRODUCTS</h2>
        <div className="w-24 h-1 bg-green-500 mx-auto mt-2"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {products.map((product, index) => (
          <ProductCard key={index} icon={product.icon} title={product.title} />
        ))}
      </div>
    </section>
  );
}
