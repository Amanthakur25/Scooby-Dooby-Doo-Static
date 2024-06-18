import React from "react";
import { GiDogHouse, GiDogBowl, GiSittingDog, GiPawPrint } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section className="bg-gray-100 mt-10 mb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl text-center font-bold sm:text-4xl">
            Welcome to Scooby Dooby Doo
          </h2>
          <p className=" ml-64 text-lg text-white bg-orange-400 rounded-xl px-5 py-2 inline-block mt-5">
            Cageless boarding service, a family of care providers, providing
            cuddles not cages.
          </p>
          <div className="mt-4 text-lg flex flex-wrap gap-10 justify-center">
  <div className="flex gap-5 items-center flex-col justify-center mt-4 w-80">
    <GiDogHouse size={50} className="text-orange-500 mr-2" />
    <p className="text-wrap">
      Are you tired of leaving your furry friends in small, cramped cages while you’re away? Look no further than Scooby Dooby Doo Pet Hotel. Introducing Scooby-Dooby-Doo Pet Hotel - The ultimate pet vacation destination.
    </p>
  </div>

  <div className="flex gap-5 items-center flex-col justify-center mt-4 w-80">
    <GiDogBowl size={50} className="text-orange-500 mr-2" />
    <p className="text-wrap">
      Join our Scooby Dooby Doo family today and treat your pet to the ultimate getaway. Contact us to schedule a tour and see firsthand why we’re not just a pet hotel—we’re a sanctuary for your beloved companion. Because at Scooby Dooby Doo, every pet is family.
    </p>
  </div>

  <div className="flex gap-5 items-center flex-col justify-center mt-4 w-80">
    <GiSittingDog size={50} className="text-orange-500 mr-2" />
    <p className="text-wrap">
      Nestled in Hyderabad, our luxurious haven offers more than just boarding—it’s a vacation destination for your furry friends. Imagine a place where your dog can lounge in plush suites, enjoy gourmet meals, and romp freely in our expansive play areas.
    </p>
  </div>
  <div className="flex gap-5 items-center flex-col justify-center mt-4 w-80">
    <GiPawPrint size={50} className="text-orange-500 mr-2" />
    <p className=" text-wrap">
      At Scooby Dooby Doo, we believe in indulging your pets with the finest care and attention. Our dedicated team ensures every tail wags with joy, whether it’s through personalized playtime, soothing massages, or bedtime stories under the stars.
    </p>
  </div>
  <div className="flex gap-5 items-center flex-col justify-center mt-4 w-80">
    <GiDogHouse size={50} className="text-orange-500 mr-2" />
    <p className=" text-wrap">
      Rest assured, your pet’s well-being is our top concern. From daily grooming sessions to tailored dietary needs, we go above and beyond to meet their every comfort. With our secure premises and supervision, and our hotel hosts on-site 24x7, you can relax knowing your pet is safe and happy in our care.
    </p>
  </div>
 
  <div className="flex gap-5 items-center flex-col justify-center mt-4 w-80">
    <GiDogBowl size={50} className="text-orange-500 mr-2" />
    <p className="text-wrap">
      We also offer convenient drop & pick-up times to fit your schedule. Welcome to Scooby Dooby Doo Pet Hotel, where pampering your pets is our passion and priority!
    </p>
  </div>


  <div className="flex gap-5 items-center flex-col justify-center mt-4 w-80">
    <GiSittingDog size={50} className="text-orange-500 mr-2" />
    <p className="text-wrap">
      Your pet will enjoy playtime daily with our pet-loving staff and we even offer medication administering if needed. Unlimited relief walks under surveillance to ensure maximum safety.
    </p>
  </div>
  <div className="flex gap-5 items-center flex-col justify-center mt-4 w-80">
    <GiPawPrint size={50} className="text-orange-500 mr-2" />
    <p className=" text-wrap">
      Have peace of mind while you are away that your furry friend is having a blast at our premium cageless boarding facility. Simply book a slot for your dog and watch them have the time of their life.
    </p>
  </div>
</div>

          <div className="flex justify-center items-center mt-5">
            <Link to="/aboutUs">
              <button className="px-6 py-3 flex justify-center items-center bg-white border-2 border-slate-700 text-orange-500 font-semibold rounded-none hover:bg-black hover:text-white transition duration-300 ease-in-out transform hover:scale-105 shadow-xl">
                <span className="mr-2">
                  <IoIosArrowForward />
                </span>
                Read More
              </button>
            </Link>
          </div>
          <div className="flex flex-row justify-center gap-10 mt-10">
            <div className="flex justify-center items-center mt-5 transform transition duration-500 hover:scale-105">
              <div className="bg-black hover:bg-orange-600 w-96 p-4 rounded-2xl shadow-lg">
                <div className="flex flex-col">
                  <div className="flex justify-center items-center text-white">
                    <GiDogHouse size={150} />
                  </div>
                  <div className="flex justify-center items-center text-white text-2xl mt-4">
                    LUXURY BOARDING
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-5 transform transition duration-500 hover:scale-105">
              <div className="bg-black hover:bg-orange-600 w-96 p-4 rounded-2xl shadow-lg">
                <div className="flex flex-col">
                  <div className="flex justify-center items-center text-white">
                    <GiSittingDog size={150} />
                  </div>
                  <div className="flex justify-center items-center text-white text-2xl mt-4">
                    DAYCARE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
