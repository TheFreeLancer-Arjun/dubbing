import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="hidden md:flex flex-1 bg-gradient-to-br from-indigo-500 to-blue-400 justify-center items-center text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to DubbHub</h1>
          <p className="text-lg leading-relaxed">
            Showcase your dubbing talent <br /> Connect with studios worldwide.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center bg-gray-50">
        <div className="w-11/12 max-w-md bg-white shadow-lg rounded-lg p-8">
          {/* Logo */}
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Sign Up
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Join the largest dubbing platform.
          </p>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-blue-400 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:from-blue-400 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="my-4 text-center text-gray-500">OR</div>

          {/* Social Sign-Up */}
          <div className="space-y-3">
            <button
              className="w-full flex items-center justify-center bg-gray-100 py-2 px-4 rounded-md shadow-md hover:bg-gray-200"
            >
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google"
                className="h-6 w-6 mr-2"
              />
              Sign up with Google
            </button>
            <button
              className="w-full flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700"
            >
              <i className="fab fa-facebook-f mr-2"></i>
              Sign up with Facebook
            </button>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 font-medium hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

