import React, { useState } from 'react';
import Vector from '../assets/Vector 9.png';
import RightArrow from '../assets/right-arrow.png';
import axios from 'axios';

const Enquire = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    studentPhone: '',
    studentCourse: '',
    studentsDefineWell: '',  // You can bind this to a dropdown or input too
    studentsLookingForDemo: ''  // Same here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/institute/studentinformation', null, {
        params: formData,
      });
      console.log('Response:', response.data);
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Error submitting form');
    }
  };

  return (
    <section className="font-['Roboto'] font-medium not-italic bg-white p-6 sm:p-8 w-full max-w-[90%] lg:max-w-[1200px] mx-auto rounded-[25px] shadow-[0_4px_15px_rgba(0,0,0,0.3)] text-center">
      <h1 className="font-bold text-2xl sm:text-3xl font-sans mb-6">Looking for course details? Enquire Now!!</h1>
      <img src={Vector} alt="" className='md:pl-[60%] pl-[20%]'/>

      <section className="flex flex-col mt-10 sm:flex-row sm:justify-between gap-4 mb-6">
        <input type="text" name="studentName" placeholder="Enter Your Name" onChange={handleChange} className="border border-gray-400 rounded px-4 py-2 w-full font-sans placeholder:font-sans" />
        <input type="text" name="studentEmail" placeholder="Enter Your Email" onChange={handleChange} className="border border-gray-400 rounded px-4 py-2 w-full font-sans placeholder:font-sans" />
      </section>

      <section className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">
        <input
          type="text"
          name="studentPhone"
          placeholder="Enter Your Phone"
          onChange={handleChange}
          className="border border-gray-400 rounded px-4 py-2 w-full font-sans placeholder:font-sans"
        />
        <div className="relative w-full">
  <select
    name="studentCourse"
    value={formData.studentCourse}
    onChange={handleChange}
    className="appearance-none border border-gray-400 rounded px-4 py-2 w-full font-sans bg-white placeholder:font-sans"
  >
    <option value="">Select Course</option>
    <option value="UI/UX Design Course">UI/UX Design Course</option>
    <option value="AWS Course">AWS Course</option>
    <option value="SEO Course">SEO Course</option>
    <option value="Digital Marketing Course">Digital Marketing Course</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
    <svg className="w-4 h-4 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
      <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
    </svg>
  </div>
</div>

      </section>


      <section className="flex justify-center">
        <button onClick={handleSubmit} className="bg-mango text-white px-4 py-2 rounded-md flex gap-3 items-center font-sans">
          Get In Touch
          <img src={RightArrow} alt="" className="w-[20px] h-[20px] invert" />
        </button>
      </section>
    </section>
  );
};

export default Enquire;
