import React from 'react';

export default function Contact() {
  return (
    <div className='bg-white w-full min-h-96 flex justify-around items-center'>
      <div className='w-6/12 py-28'>
        <h1 className='text-5xl font-medium mb-6'>Obtaining more information by <span className='text-green-700'>making contact</span> with our experienced Loan professionals.</h1>
        <h4 className='text-xl'>We’re available for you within the office hours,during the sales and also after - sales supports !
        Contact to inquire about detailed process and assessment of your loan type.</h4>
      </div>
      <div className='mr-7 py-28 text-center'>
        <h4 className='text-xl text-green-600 mb-2'>icons</h4>
        <p className='text-xl mb-2'>Reach Now!</p>
        <h4 className='text-xl mb-2'>info@loanbazaaronline.com</h4>
        <button className='text-xl bg-green-600 text-white px-4 py-2 rounded-lg items-center'>contact us</button>
      </div>
    </div>
  )
}
