// src/pages/learnmore.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const LearnMore = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              About Our Platform
            </h1>

            <div className="prose prose-lg text-gray-700 text-left">
              <p className="mb-4">
                Giving should be simple. Our platform makes donating fast, 
                transparent, and hassle-free so you can focus on making an impact.
              </p>

              <p className="mb-4">
                With just a few clicks, you can contribute to meaningful causes 
                and instantly see your support acknowledged. Whether big or small, 
                every donation matters — and our clean, user-friendly design ensures 
                the process is smooth from start to finish.
              </p>

              <p className="mb-4">
                Stay connected with your giving through a secure login system that 
                helps you track past donations and manage your contributions with ease.
              </p>

              <p className="mb-8">
                We believe in building trust, simplicity, and a better way to give. 
                Donate today — make a difference in seconds.
              </p>
            </div>

            <Link
              to="/"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md"
            >
              Back to Landing Page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnMore;
