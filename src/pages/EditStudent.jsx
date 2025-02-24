import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";
import toast from "react-hot-toast";

const EditStudent = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    const data = location.state
    const {student} = data || {}

    console.log(student);

    const [FormData, setFormData] = useState({
      name: student?.name,
      email: student?.email,
      age: student?.age,
      grade: student?.grade,
    });
  
    const handleChange = (e) => {
      setFormData({ ...FormData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      try {
          await axios.put(
          `https://studentcurd-api.onrender.com/student/updateOneStudent/${student._id}`,
          FormData
        );
        setIsLoading(false);
        navigate("/");
        toast.success("Student updated successfully");
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={FormData.name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Your Name..."
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={FormData.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Your Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={FormData.age}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="20+"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Your Grade
              </label>
              <input
                type="text"
                id="grade"
                name="grade"
                value={FormData.grade}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="A+...."
                required
              />
            </div>
  
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        )}
      </>
    );
}

export default EditStudent