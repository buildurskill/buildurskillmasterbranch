import React, { useState } from 'react';
import axios from 'axios'; // Ensure this is installed: npm install axios

const RegistrationPage = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    definesYou: '',
    lookingForDemo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/institute/studentinformation', null, {
        params: {
          studentName: formData.name,
          studentPhone: formData.phone,
          studentEmail: formData.email,
          studentCourse: formData.course,
          studentsDefineWell: formData.definesYou,
          studentsLookingForDemo: formData.lookingForDemo
        }
      });
      alert('Successfully submitted!');
      console.log(response.data);
      onClose(); // Close modal on success
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-6 overflow-y-auto h-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl font-bold text-gray-600 hover:text-black transition"
        >×</button>

        <div className="mt-12 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center">Connect with our Admission Team</h2>
          <p className="text-center text-gray-600 mt-2">Get Free Consultation From Experts</p>

          <form className="mt-8 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            <input
              name="name"
              className="border-b border-gray-500 p-3 outline-none font-sans placeholder:font-sans"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              name="email"
              className="border-b border-gray-500 p-3 outline-none font-sans placeholder:font-sans"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              name="phone"
              className="border-b border-gray-500 p-3 outline-none font-sans placeholder:font-sans"
              placeholder="Contact number"
              value={formData.phone}
              onChange={handleChange}
            />
            <select
              name="course"
              className="border-b border-gray-500 p-3 outline-none font-sans placeholder:font-sans"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Select Course</option>
              <option value="Fullstack">UI/UX Design Course</option>
              <option value="Data Science">AWS Course</option>
              <option value="Data Science">SEO  Course</option>
              <option value="Data Science">Digital Marketing Course</option>

              {/* Add more options */}
            </select>
            <select
              name="definesYou"
              className="border-b border-gray-500 p-3 outline-none font-sans placeholder:font-sans"
              value={formData.definesYou}
              onChange={handleChange}
            >
              <option value="">What Defines you well?</option>
              <option value="Student">Student</option>
              <option value="Working Professional">Working Professional</option>
              {/* Add more options */}
            </select>
            <select
              name="lookingForDemo"
              className="border-b border-gray-500 p-3 outline-none font-sans placeholder:font-sans"
              value={formData.lookingForDemo}
              onChange={handleChange}
            >
              <option value="">Looking for a Demo?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </form>

          <div className="mt-10">
            <button
              onClick={handleSubmit}
              className="bg-mango text-white px-8 py-3 rounded hover:bg-orange-600 transition"
            >
              Get in Touch →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
