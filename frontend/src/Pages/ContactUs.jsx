



import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        requiredservice: 'Boarding',
        otherServices: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to server or perform validation
        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-5xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">General Inquiries and Customer Service:</h3>
                            <p className="mb-2">7702564422</p>
                            <p className="mb-2">9669384613</p>
                            <p className="mb-2">8017447299</p>
                            <p>scoobydoobydoopethouse@gmail.com</p>
                            <h3 className="text-xl font-bold mt-6 mb-4">Book a Tour or Reserve Your Pet Stay:</h3>
                            <p>7702564422</p>
                            <h3 className="text-xl font-bold mt-6 mb-4">Emergency Boarding:</h3>
                            <p>84097589758</p>
                            <h3 className="text-xl font-bold mt-6 mb-4">Address:</h3>
                            <p>New B Block, Prem Nagar, Hafeezpet, Kondapur, Telangana 500094, India.</p>
                            <h3 className="text-xl font-bold mt-6 mb-4">Timing:</h3>
                            <p>We are open from 8.30a.m to 8.30p.m for onboarding & offboarding.</p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-6">Quick Enquiry</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name:</label>
                                    <input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone:</label>
                                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>
                                <div>
                                    <label htmlFor="requiredservice" className="block text-sm font-medium text-gray-700">Required Service:</label>
                                    <select id="requiredservice" name="requiredservice" value={formData.requiredservice} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                                        <option value="Boarding">Boarding</option>
                                        <option value="Daycare">Daycare</option>
                                        <option value="Grooming">Grooming</option>
                                        <option value="Pickup/Drop">Pickup/Drop</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="otherServices" className="block text-sm font-medium text-gray-700">Other Services:</label>
                                    <input type="text" id="otherServices" name="otherServices" value={formData.otherServices} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
                                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
