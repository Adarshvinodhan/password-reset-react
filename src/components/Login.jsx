import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //api url
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(apiUrl, { email, password })
        .then((res) => {
          console.log(res.data);
          toast.success(res.data.message);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-sm text-gray-600">Sign in to continue to your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
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
              placeholder="your@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Link to={"forgotpassword"} className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </div>
          <p className="text-center text-sm text-gray-600">
            Don&#x27;t have an account yet?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Create an account
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
