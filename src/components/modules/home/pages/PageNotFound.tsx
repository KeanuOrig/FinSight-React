import TemplateMainLayout from "@components/layout/template/TemplateMainLayout";
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound: React.FC = () => {
  return (
    <TemplateMainLayout>
      <div className="font-sans text-gray-800 min-h-screen flex flex-col justify-center">
        <div className="text-center bg-gray-600 text-white py-24 px-6 rounded-lg shadow-lg">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Oops! Page Under Construction
          </h1>
          <p className="text-lg sm:text-xl mb-10">
            It looks like the page you're looking for is currently unavailable. We're working hard to get it ready for you!
          </p>

          <Link 
            to={'/'}
            className=" bg-yellow-400 text-gray-900 py-3 px-8 rounded-lg text-xl font-semibold hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition duration-300"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    </TemplateMainLayout>
  );
};

export default PageNotFound;
