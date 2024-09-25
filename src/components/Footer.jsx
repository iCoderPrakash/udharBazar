import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="max-w-6xl mx-auto text-white grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Address */}
        <div className="col-span-1">
          <img
            src="https://via.placeholder.com/150x50" // Replace with your logo
            alt="LoanBazaar Logo"
            className="mb-4"
          />
          <p>402 A, A-wing, Sumeet Samrath Arcade, Aarey Rd, Goregaon (W), Mumbai 400104</p>
          <p>Email: <a href="mailto:info@loanbazaaronline.com" className="text-orange-400">info@loanbazaaronline.com</a></p>
          <p>Website: <a href="https://loanbazaaronline.com" className="text-orange-400">www.loanbazaaronline.com</a></p>
        </div>

        {/* Our Products Section */}
        <div className="col-span-1">
          <h3 className="font-bold mb-4">Our Products</h3>
          <ul>
            <li><a href="#" className="hover:text-orange-400">Business Loan</a></li>
            <li><a href="#" className="hover:text-orange-400">Personal Loan</a></li>
            <li><a href="#" className="hover:text-orange-400">Credit Card</a></li>
            <li><a href="#" className="hover:text-orange-400">Home Loan</a></li>
            <li><a href="#" className="hover:text-orange-400">Loan Against Property</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="col-span-1">
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#" className="hover:text-orange-400">Pay In Login</a></li>
            <li><a href="#" className="hover:text-orange-400">Admin Login</a></li>
            <li><a href="#" className="hover:text-orange-400">EMI Calculator</a></li>
            <li><a href="#" className="hover:text-orange-400">DSA Code List</a></li>
            <li><a href="#" className="hover:text-orange-400">Documents Required</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="col-span-1">
          <h3 className="font-bold mb-4">Support</h3>
          <ul>
            <li><a href="#" className="hover:text-orange-400">About Us</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-orange-400">Career</a></li>
            <li><a href="#" className="hover:text-orange-400">Nearest Branch Locator</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar with Social Icons and Play Store Button */}
      <div className="max-w-6xl mx-auto mt-12 border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#"><img src="https://via.placeholder.com/50" alt="Google Play" className="h-12" /></a>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex space-x-4 text-gray-400">
          <a href="#"><i className="fab fa-facebook-f hover:text-white"></i></a>
          <a href="#"><i className="fab fa-twitter hover:text-white"></i></a>
          <a href="#"><i className="fab fa-instagram hover:text-white"></i></a>
          <a href="#"><i className="fab fa-linkedin hover:text-white"></i></a>
        </div>
      </div>

      {/* Bottom Credits */}
      <div className="text-center text-gray-500 mt-8">
        <p>© 2024 Loanbazaar. All Rights Reserved | Design by Loanbazaar | <a href="#" className="hover:text-white">Terms Of Use</a> | <a href="#" className="hover:text-white">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
