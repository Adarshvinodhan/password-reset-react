import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:underline">
            PassResetFlow
          </Link>
        </div>
        {/* Buttons */}
        <div className="flex space-x-4">
          <Link
            to="/"
            className="px-4 py-2 bg-white text-blue-500 rounded-md hover:bg-gray-200 transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            to="/Register"
            className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors duration-200"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
