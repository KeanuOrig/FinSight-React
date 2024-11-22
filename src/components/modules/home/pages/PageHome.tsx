import TemplateMainLayout from "@components/layout/template/TemplateMainLayout";
import React from "react";
import { Link } from "react-router-dom";

const PageHome: React.FC = () => {

  return (
    <TemplateMainLayout>

  
      <div className="font-sans bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <header className="text-center bg-gray-600 text-white py-24 px-6 rounded-lg shadow-lg">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Welcome to Finsight
          </h1>
          <p className="text-xl mb-8">
            The AI-powered tool for comprehensive stock analysis.
          </p>  
          <Link 
            to={'stock/list'} 
            className="bg-yellow-400 text-gray-900 py-2 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-500 transition"
          >
            Get Started
          </Link>
        </header>

        {/* About Section */}
        <section className="py-16 bg-white" id="about">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Finsight</h2>
            <p className="text-lg text-gray-600 mb-8">
              Finsight uses advanced AI algorithms to provide insights, predictions, and real-time analysis of the stock market. Make smarter, data-driven investment decisions today.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-semibold text-gray-700">AI-Driven Insights</h3>
                <p className="text-gray-600 text-sm">Leverage the power of artificial intelligence to make informed investment decisions.</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-semibold text-gray-700">Real-Time Data</h3>
                <p className="text-gray-600 text-sm">Access live market data and instantly receive stock recommendations based on current trends.</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-semibold text-gray-700">Accurate Predictions</h3>
                <p className="text-gray-600 text-sm">Get accurate predictions with the power of machine learning and deep data analysis.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-600">Stock Prediction</h3>
                <p className="text-gray-600 mt-4">Predict future stock prices with high accuracy using historical data.</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-600">Market Trends</h3>
                <p className="text-gray-600 mt-4">Analyze market trends and make data-driven decisions using powerful analytics.</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-600">Investment Strategies</h3>
                <p className="text-gray-600 mt-4">Get personalized investment strategies based on your portfolio and risk tolerance.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </TemplateMainLayout>
  );
};

export default PageHome;
