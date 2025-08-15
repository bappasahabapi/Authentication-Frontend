
import Image from 'next/image';
import React from 'react';

const WhoWeAre= () => {
  return (
    <section id="who-we-are" className=" py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
        <h2 className="text-sm font-extrabold text-[#F55F11] text-start mb-8">
          <span>_____</span>Who We Are
        </h2>
            <h3 className="text-2xl font-bold text-gray-800">
            Refunds and Relationships <br />
            Tailored with Care
            </h3>
            <p className="text-gray-600 mt-4">
              To simplify your financial journey with reliable accounting and
              tax filing services. We ensure accuracy, compliance, and
              personalized solutions that empower your financial success and
              peace of mind.
            </p>
               <hr  className=" mt-10 border-1 border-slate-900"/>
                <div className='flex justify-between mt-5'>
                  <div >
                    <h3 className='text-2xl font-bold text-gray-800'>780+</h3>
                    <small>Happy Client</small>
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold text-gray-800'>10+</h3>
                    <small>Happy Client</small>
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold text-gray-800'>1405+</h3>
                    <small>Happy Client</small>
                  </div>

                  
                </div>
                <button className="mt-10 bg-[#FE5F0F] text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#FE5F0F]">
             Contact Us Now
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://via.placeholder.com/500x400"
              alt="Who We Are"
              className="rounded-lg shadow-lg"
              width={500}
              height={600}

            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
