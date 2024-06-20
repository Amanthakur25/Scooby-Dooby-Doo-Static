import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaDog } from 'react-icons/fa';
import MeetNGreet from "../../assets/MeetNGreet.jpg"
import { Link } from 'react-router-dom';
const DoggyDayCare = () => {

  const dogImages = [
    'https://via.placeholder.com/150/FFB6C1/000000?text=Dog1',
    'https://via.placeholder.com/150/FFB6C1/000000?text=Dog2',
    'https://via.placeholder.com/150/FFB6C1/000000?text=Dog3',
    'https://via.placeholder.com/150/FFB6C1/000000?text=Dog4',
    'https://via.placeholder.com/150/FFB6C1/000000?text=Dog5',
    'https://via.placeholder.com/150/FFB6C1/000000?text=Dog6',
  ];


  return (
    <>

     {/* Hero Section */}
     <div className="hero bg-cover bg-center h-96" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/outdoor-scene-with-cartoon-cats-dogs_1308-98251.jpg?t=st=1718868109~exp=1718871709~hmac=bbe5faff14956400b06f7c44828eb93204431e8800f0b6cf4fbbe0897a6a2401&w=826')" }}>
                <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">Luxury boarding and daycare</h1>
                        <p className="text-xl mb-6">
                        Welcome to Scooby Dooby doo, your premier destination for upscale pet boarding and daycare services.<br></br>
                        We offer premium pet boarding and flexible daycare solutions to meet your needs.
                            </p>
                            <Link to="/contactus">
                        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>

      {/* Scooby Dooby Doo Pet Hotel Section */}
      <div className="max-w-6xl mx-auto p-6">
        <header className="text-center my-12">
          <h1 className="text-5xl font-bold">Welcome to Scooby Dooby Doo Pet Hotel!</h1>
          <p className="text-lg text-gray-600 mt-4">
            Your premier destination for upscale pet boarding and daycare services.
          </p>
        </header>

        <section className="my-16">
          <h2 className="text-3xl font-semibold text-orange-700 mb-8">Our Accommodations Include:</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <li className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800">Home-Cooked Meals</h3>
              <p className="text-gray-600 mt-4">
                Your pet will enjoy delicious and nutritious home-cooked meals such as chicken, rice, liver, curd, milk, chapati, and eggs. Have a special request? We’re happy to accommodate any other home-cooked meals your pet prefers.
              </p>
              <blockquote className="mt-4 bg-blue-100 border-l-4 border-orange-500 text-blue-900 p-4 shadow-md rounded">
                “Our meals are designed to make your pet feel at home.”
              </blockquote>
            </li>

            <li className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800">Custom Feeding Plans</h3>
              <p className="text-gray-600 mt-4">
                For dogs accustomed to dedicated pet food, please pack their meals according to their schedule, and we’ll take care of the rest.
              </p>
            </li>

            <li className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800">Comfortable Essentials</h3>
              <p className="text-gray-600 mt-4">
                Each pet will have their own bowls, treats, toys, and a comfortable bed to ensure they feel safe and secure.
              </p>
              <blockquote className="mt-4 bg-blue-100 border-l-4 border-orange-500 text-blue-900 p-4 shadow-md rounded">
                “Comfort is our priority, and we provide everything to make your pet’s stay cozy and enjoyable.”
              </blockquote>
            </li>
          </ul>
        </section>

        <section className="my-16">
          <h2 className="text-3xl font-semibold text-orange-700 mb-8">Individual Attention and Care:</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <li className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800">Personalised Feeding</h3>
              <p className="text-gray-600 mt-4">
                We feed each pet individually to cater to their specific dietary needs and preferences.
              </p>
            </li>

            <li className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800">One-on-One Walks</h3>
              <p className="text-gray-600 mt-4">
                Every dog enjoys individual walks, ensuring they get the exercise and attention they need.
              </p>
            </li>

            <li className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800">Basic Grooming</h3>
              <p className="text-gray-600 mt-4">
                Our grooming services include cleaning eyes, ears, dry bath and combing hair, keeping your pet looking and feeling their best.
              </p>
              <blockquote className="mt-4 bg-blue-100 border-l-4 border-orange-500 text-blue-900 p-4 shadow-md rounded">
                “A clean pet is a happy pet, and our grooming services keep them fresh and tidy.”
              </blockquote>
            </li>

            <li className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800">Daily Video Updates</h3>
              <p className="text-gray-600 mt-4">
                Request a daily video to see how your pet is doing, providing peace of mind while you’re away (11:00am - 6:00 pm).
              </p>
            </li>

            <li className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800">Chat Support</h3>
              <p className="text-gray-600 mt-4">
                Stay updated on your pet’s well-being with our chat support available from 11:00 am to 6:00 pm.
              </p>
            </li>
          </ul>
        </section>

        <section className="my-16">
          <h2 className="text-3xl font-semibold text-orange-700 mb-8">Special Benefits for Extended Stays:</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-gray-600">
              Planning to book for more than 15 days? Enjoy complimentary services and receive exclusive discounted coupons as a token of our appreciation.
            </p>
            <blockquote className="mt-4 bg-blue-100 border-l-4 border-orange-500 text-blue-900 p-4 shadow-md rounded">
              “Extended stays come with special perks to make your pet’s time with us even more delightful.”
            </blockquote>
          </div>
        </section>
      </div>

      {/* Day Boarding */}

      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">Doggy Day Care Process</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Meet & Greet Session</h3>
            <p className='text-black'>Get to know each other</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Physical Check</h3>
            <p className='text-black'>A quick physical check of the dog will be conducted during check-in</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Check-in Form</h3>
            <p className='text-black'>You will be asked to fill in a check-in form where you can also include any special instructions.</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Care Instructions Discussion</h3>
            <p className='text-black'>Care instructions will be discussed prior to making a booking – behavior, allergies, medications, etc.</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Dog is Taken In</h3>
            <p className='text-black'>The dog is then taken in</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Grooming Services</h3>
            <p className='text-black'>On the date of check-out, if you require any grooming services, let us know in advance so that we can schedule it according to the availability. The same will be done prior to the check-out time indicated by you.</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      {/* Day Care and Boarding Quote Section */}
      <div className="get-a-quote mt-5 bg-green-50 py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center mb-6 text-green-900">Get a Quote</h2>
        <p className="text-center mb-4 text-lg text-gray-700">
          The cost of our day care and boarding services varies based on your pet's needs and length of stay. To receive a personalized quote, please reach out to us with your requirements and preferred dates.
        </p>
        <p className="text-center mb-8 text-lg text-gray-700">
          Contact us today to ensure a comfortable and enjoyable stay for your furry friend!
        </p>
        <div className="flex justify-center">
          <Link to="/contactus" className="bg-orange-600 text-white py-3 px-6 rounded-full hover:bg-orange-700 transition duration-300">
            Contact Us
          </Link>
        </div>
      </div>




    </>
  );
};

export default DoggyDayCare;
