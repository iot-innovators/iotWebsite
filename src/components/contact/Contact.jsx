import React from "react";

const ContactPage = () => {
  return (
    <div className="py-36 bg-gray-100 flex flex-col items-center justify-center p">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mb-6">
          We would love to hear from you. Feel free to reach out!
        </p>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Address:</h2>
            <p className="text-gray-600">Bhagwati Bahal Road, Naxal, Kathmandu</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Email:</h2>
            <a
              href="mailto:iot.innovators@heraldcollege.edu.np"
              className="text-blue-500 hover:underline"
            >
              iot.innovators@heraldcollege.edu.np
            </a>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default ContactPage;
