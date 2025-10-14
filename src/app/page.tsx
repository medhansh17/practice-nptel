"use client";

import Card from "@/components/card";
import Footer from "@/components/footer";
import { courses } from "@/utils/course";
import { useState } from "react";
import { BiSupport } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

type SupportModalProps = {
  onClose: () => void;
};

const SupportModal = ({ onClose }: SupportModalProps) => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative flex flex-col gap-4 rounded-lg bg-gray-800 p-8 shadow-xl text-white w-11/12 max-w-md">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          <IoClose size={20} />
        </button>
        <h2 className="text-2xl font-bold">Support & Feedback</h2>
        <p className="text-gray-300">
          Facing an issue, want to request a new feature, or suggest a new
          course? Your feedback is valuable!
        </p>
        <p className="text-gray-300">
          Please raise an issue on the GitHub repository.
        </p>
        <a
          href="https://github.com/medhansh17/practice-nptel"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
        >
          <FaGithub />
          Go to GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const CourseCards = () => {
    return (
      <div className="flex w-full flex-wrap">
        {courses.map((course, index) => (
          <Card
            key={index}
            courseId={course.id}
            courseName={course.name}
            semester={course.semester}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col bg-gray-900 min-h-screen text-white w-full">
      <div className="h-14 flex flex-row items-center justify-around bg-gray-900 border-b-2 z-[999] w-full">
        <h1 className="text-[1.5rem]">NPTEL Practice App</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="hover:bg-gray-800 rounded-full p-2"
        >
          <BiSupport size={24} />
        </button>
      </div>
      <div className="flex flex-col flex-wrap mx-auto px-4 gap-[20px] mt-4">
        <h1 className="text-2xl px-4">Select a Course :</h1>
        <div className="flex flex-row">
          <CourseCards />
        </div>
      </div>
      <Footer />
      {isModalOpen && <SupportModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
