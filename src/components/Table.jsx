import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { Edit, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Table = () => {
  // Sample data for the table
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://studentcurd-api.onrender.com/student/getAllStudents"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(
        `https://studentcurd-api.onrender.com/student/deleteOneStudent/${id}`
      );
      toast.success("Student deleted successfully");
      fetchData();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredArray = data.filter((student) => {
    return (
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.grade.toLowerCase().includes(search.toLowerCase())
    );
  });
  // console.log(filteredArray);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-6 bg-white rounded-lg shadow-md overflow-x-auto">
          {/* Table Title */}
          <div className="flex justify-around items-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">User List</h2>
            <input
              type="text"
              className="w-68 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Students..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>

          {/* Table */}
          <table className="min-w-full bg-white border border-gray-200 divide-y divide-gray-200">
            {/* Table Header */}
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Grade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200">
              {filteredArray.map((student) => (
                <tr
                  key={student._id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.age}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.grade}
                  </td>
                  <td className="flex gap-3 py-4 px-6">
                    <Link to="/edit-student" state={{student:student}}>
                      <Edit className="text-blue-400 "  />
                    </Link>
                    <button
                      onClick={() => deleteStudent(student._id)}
                    >
                      <Trash2 className="text-red-500 " />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Table;
