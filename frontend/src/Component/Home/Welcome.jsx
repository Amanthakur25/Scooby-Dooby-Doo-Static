// ScoobySection.js
import React from "react";
import { GiDogHouse } from "react-icons/gi";
import { GiSittingDog } from "react-icons/gi";
const ScoobySection = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className="">
          <h2 className="text-3xl text-center text-gray-900 sm:text-4xl">
            Welcome to Scooby Dooby Doo
          </h2>
          <p className="text-center text-lg  text-white bg-orange-400 rounded-xl pl-5 pr-5 inline-block p-1 ml-72 justify-center items-center mt-5">
            Cageless boarding service, a family of care providers, providing
            cuddles not cages.
          </p>
          <p className="mt-4 text-lg text-gray-600 text-center">
            Are you tired of leaving your furry friends in small, cramped cages
            while you’re away? Look no further than Scooby Dooby Doo brought to
            you by Scooby-Dooby-Doo! Introducing Scooby Dooby Doo – The ultimate
            pet vacation destination. Our hotel hosts are on-site 24×7. We also
            offer convenient drop & pick-up times to fit your schedule.
          </p>
          <div className="flex justify-center items-cente mt-5">
            <button className="px-6 py-3 bg-white border-2 border-slate-700 text-orange-500 font-semibold rounded-md  hover:bg-slate-200 r  shadow-2xl">
              > Read More
            </button>
          </div>

          <div className=" flex flex-row justify-center gap-40 mt-10">
            <div className="flex justify-center items-center mt-5">
              <div className=" bg-slate-400 w-96 p-4 rounded-2xl ">
                <div className="flex justify-center items-center">
                  <GiDogHouse size={150} />
                </div>
              </div>
            </div>

            <div className=" bg-slate-400 w-96 p-4 rounded-2xl ">
                <div className="flex justify-center items-center">
                  <GiSittingDog size={150} />
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScoobySection;
