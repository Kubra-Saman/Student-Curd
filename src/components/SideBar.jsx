import { Home, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="">
      {/* Sidebar */}
      <aside className="w-64 h-full bg-white shadow-lg overflow-y-auto transition-all duration-300 md:w-64 lg:w-72">
        <div className="p-6">
          {/* Logo or Branding */}
          <div className="flex items-center justify-center mb-8">
            <span className="text-2xl font-bold text-indigo-600">MyApp</span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            <Link
              to="/"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors duration-200"
            >
              <Home />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/add-student"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors duration-200"
            >
              <Users />
              <span>Add Students</span>
            </Link>
            <Link
              to="/"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors duration-200"
            >
              <Home />
              <span>Settings</span>
            </Link>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
