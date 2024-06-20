import React from "react";
import BgAboutUs from "../../assets/BgAboutUs.webp"

function AboutUsHeader() {
  return (
    <div className="bg-white">
      <div className="relative w-full">
        <img
          src={BgAboutUs}
          alt="header"
          className="w-full object-cover"
        />
        <div className="absolute  flex-col top-0 left-0 w-full h-full flex items-center">
          <h1 className=" text-[60px] text-[#e87200] font-bold mt-14 font-gochi-hand text-shadowText">
            About Us
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-[#e87200] pt-10 ">
      <div className=' flex justify-center items-center'>
        <img src={dog} alt="Dog" className=" w-[408px] h-[376px]" />
      </div>
      <div className="flex items-center justify-center">
        <div className=' w-[60%]'>
          <h1 className="text-[30px] font-bold text-white">Cageless boarding service, a family of care providers, providing cuddles not cages.</h1>
          <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded">Explore Our Services</button>
        </div>
      </div>
        </div>

      <div className=" flex justify-center items-center text-justify">
        <div className=" py-40">
          <p className=" text-center text-[20px] font-bold">
            Are you tired of leaving your furry friends in small, cramped cages
            while you’re away? <br />
            <span className=" text-gray-600 text-[15px]">
              Look no further than Pet Hotel brought you by
            </span>{" "}
            <br />
            <span className=" text-3xl text-[#e87200]">Scooby-Dooby-Doo!</span>
          </p>
        </div>
      </div>

      <div>
        <div className=" p-8">
          <div className="flex flex-col lg:flex-row justify-center items-center ">
            <div className="relative  flex justify-center items-center mb-8 lg:mb-0">
              <img
                src="https://i.pinimg.com/564x/3e/39/4a/3e394aa91a338a3c4fc653ca66954a29.jpg"
                alt="Dog Walking"
                className="relative z-10 w-[360px] mx-auto lg:mx-0  lg:ml-auto shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-16 ">
              <div className=" w-[40%] h-[2px] bg-[#e87200]"></div>
              <h1 className="font-bold text-gray-800 mb-4 mt-2">
                <span className="text-[30px]">Introducing</span> <br></br>
                <span className=" text-[25px] text-[#e87200]">
                  Scooby Dooby Pet Hotel –
                </span>{" "}
                <br />
              </h1>
              <p className="text-gray-700 mb-6">
                The ultimate pet vacation destination. Our hotel hosts are
                on-site 24×7. We also offer convenient drop & pick-up times to
                fit your schedule.
              </p>
              <p className="text-gray-700 mb-6">
                Your pet will enjoy playtime daily with our pet-loving staff and
                we even offer medication administering if needed. Unlimited
                relief walks under surveillance to ensure maximum safety. Have
                peace of mind while you are away that your furry friend is
                having a blast at our premium cageless boarding facility. Simply
                book a slot for your dog and watch them have the time of their
                life.
              </p>
              <div className=" w-[40%] h-[2px] bg-[#e87200]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHeader;
