import React from 'react';

const Advantages = () => {
  const advantages = [
    {
      title: 'No Risky Business',
      description:
        'You can run your business within minimum cost and also with a very low risk.',
    },
    {
      title: 'Trustworthy',
      description:
        'Recognition as a channel partner of a National loan Distributor Group.',
    },
    {
      title: 'Safe salary handling',
      description: 'Your sales team salary is handled by LoanBazaar.',
    },
    {
      title: 'Supports Sales & Marketing',
      description: 'Sales & Marketing Support from the Company',
    },
    {
      title: 'Commission benefits',
      description: 'Best Commission & Complete End to End Support.',
    },
    {
      title: 'Flexible Working Hours',
      description:
        'Working hours are comfortable and it allows you to work at your own convenience.',
    },
    {
      title: 'Commission benefits',
      description: 'Best Commission & Complete End to End Support.',
    },
    {
      title: 'Flexible Working Hours',
      description:
        'Working hours are comfortable and it allows you to work at your own convenience.',
    },
    {
      title: 'Flexible Working Hours',
      description:
        'Working hours are comfortable and it allows you to work at your own convenience.',
    },
  ];

  return (
    <div className="bg-white py-28">
      <h2 className="text-center text-lg text-gray-500 font-semibold mb-8 relative pb-10">
        Advantages with LoanBazaar
        <span className='-translate-x-1/2 w-16 bg-green-500 ' style={{ position: 'absolute', left: '40%' ,top:"15px",height:"1px"}}></span>
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {advantages.map((advantage, index) => (
          <div key={index} className="border border-green-300 rounded-lg p-6 pt-28 text-center shadow-sm hover:bg-green-500 hover:text-white ease-in-out duration-700">
            <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
            <p className="">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
