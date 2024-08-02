import React from 'react';

const Boxes: React.FC = () => {

  return (
    <React.Fragment>
      <div className="flex relative flex-col md:flex-row items-center justify-center w-4/5 bg-[#fff] my-20 border-[1px] border-[#243c5a]" data-aos="zoom-in-up">
        <div className="text-center py-8 md:px-4 md:py-12">
          <div className="text-6xl text-slate-50" style={{ textShadow: '2px 2px 0 #ff4b2c, -2px -2px 0 #ff4b2c, 2px -2px 0 #ff4b2c, -2px 2px 0 #ff4b2c' }}>
            <span>15</span>+
          </div>
          <h1 className="text-2xl font-bold my-4 md:my-10">Years Experience</h1>
          <p className="text-lg leading-9">
            We’ve experienced more than <span className="font-semibold">15+ years</span> with success.
          </p>
        </div>
        <div className="text-center md:px-4 md:border-x-[1px] md:border-y-[0px] border-y-[1px] border-[#243c5a] py-8 md:py-12">
          <div className="text-6xl text-slate-50" style={{ textShadow: '2px 2px 0 #ff4b2c, -2px -2px 0 #ff4b2c, 2px -2px 0 #ff4b2c, -2px 2px 0 #ff4b2c' }}>
            <span>03</span>+
          </div>
          <h1 className="text-2xl font-bold my-4 md:my-10">Verticals</h1>
          <p className="text-lg leading-9">
            Diversified IT Solution Provider In Hardware, Networking, and Software.
          </p>
        </div>
        <div className="text-center md:px-4 py-8 md:py-12">
          <div className="text-6xl text-slate-50" style={{ textShadow: '2px 2px 0 #ff4b2c, -2px -2px 0 #ff4b2c, 2px -2px 0 #ff4b2c, -2px 2px 0 #ff4b2c' }}>
            <span>300</span>+
          </div>
          <h1 className="text-2xl font-bold my-4 md:my-10">Satisfied Clients</h1>
          <p className="text-lg leading-9">
            We’ve experienced more than <span className="font-semibold">300+ clients</span> with success.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Boxes;



