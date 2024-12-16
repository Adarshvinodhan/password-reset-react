import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Forget() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(apiUrl + "/forgotpassword", { email });
      toast.success(res.data.message);
      console.log("received email:", email);
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Reset Your Password
        </h1>
        <p className="text-sm text-center text-gray-600 mb-8">
          Enter your email address below and we’ll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 shadow-md"
          >
            Send Reset Link
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Remember your password? 
            <button
              onClick={() => navigate("/")}
              className="text-indigo-500 hover:underline focus:outline-none"
            >
              Log in
            </button>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Forget;
