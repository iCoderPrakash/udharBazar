import React from 'react';
import { FaCloudDownloadAlt ,FaUserCircle,FaShareAlt} from 'react-icons/fa';
import phone from '../images/phone.png';

export default function Phone() {
  return (
    <div className="container mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-center">
     
      <div className="flex-1 mb-10 lg:mb-0">
        <img
          src="https://www.loanbazaaronline.com/images/features/lb-Mbapp.png"
          alt="Mobile Mockup"
          className="w-full h-full max-w-sm mx-auto"
        />
      </div>

    
      <div className="flex-1 lg:pl-16 w-10">
        <h1 className="text-xl font-bold text-gray-800 mb-6">What's Great about our App.?</h1>
        <h2 className="text-4xl font-bold mb-6">
          A quick way to
          <span className="text-green-500">Referring Leads</span> process.
        </h2>
        <p className="text-lg mb-8">
          Platform for everyone and anyone to start earning within minutes & with
          no limits.
        </p>

        
        <div className="space-y-8">
          {/* Feature 1 */}
          <div className="flex items-center space-x-4 ">
            <FaCloudDownloadAlt className="text-7xl text-green-500 border border-green-500 px-4 py-3 rounded-full" />
            <div>
              <h4 className="text-xl font-semibold">Download it for free.</h4>
              <p className="text-base">
                You can download our application from the play store, which is
                absolutely free of any charges.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center space-x-4">
            <FaUserCircle className="text-7xl text-green-500 border border-green-500 px-4 py-3 rounded-full" />
            <div>
              <h4 className="text-xl font-semibold">Make a Profile.</h4>
              <p className="text-base">
                Signup as DSA, E2E partner, or simply start referring leads as a
                referral partner.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center space-x-4">
            <FaShareAlt className="text-7xl text-green-500 border border-green-500 px-4 py-3 rounded-full" />
            <div>
              <h4 className="text-xl font-semibold">Develop more acquire more.</h4>
              <p className="text-base">
                Using our app you can grow your current business and start earning
                within a few minutes after downloading the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
