import React from 'react';

const About = () => {
  return (
    <>
      <div id='about' className="flex items-center justify-center min-h-screen py-4 ">
        <div className="w-full max-w-[800px] mx-4 rounded-lg shadow-lg p-6">
          <marquee className="text-6xl  shadow-lg shadow-pink-600 font-bold text-center text-white mb-14">About Me!</marquee>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-shrink-0">
              <img
                className="h-[300px] w-[300px] border-2 rounded-full border-pink-700 object-cover"
                src="https://avatar.iran.liara.run/public/62"
                alt="Profile"
              />
            </div>
            <div className="flex flex-col text-white">
              <p className="text-lg mb-4">
                I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft Excel and Apple.
              </p>
              <div className="space-y-2">
                {['HTML', 'CSS', 'Javascript', 'React.js'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2 hover:scale-105 transform">
                    <p className="text-xl font-bold">{skill}</p>
                    <div className="flex-1 h-2 bg-gradient-to-r from-orange-700 to-pink-700 rounded-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex my-20 gap-12 flex-wrap justify-center">
            {[
              { label: 'Years of Experience!', value: '10+' },
              { label: 'Projects Completed!', value: '90+' },
              { label: 'Happy Clients!', value: '15+' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center mx-4">
                <p className="text-[50px] font-bold text-pink-700">{item.value}</p>
                <p className="text-white">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
