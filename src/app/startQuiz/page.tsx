/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useRouter } from "next/navigation";
import { courses } from "@/utils/course";
import { useState, useEffect } from "react";

interface courseType {
  id: number;
  name: string;
  totalModules: number;
}

export default function StartQuiz() {
  const [mode, setMode] = useState("test");
  const [syllabusOption, setSyllabusOption] = useState("full");
  const [course, setCourse] = useState<courseType>();
  const [courseId, setCourseId] = useState<string>();
  const router = useRouter();

  const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const mode = formData.get("mode");
    const syllabus = formData.get("syllabus");
    router.push(`/quiz?courseId=${courseId}&mode=${mode}&syllabus=${syllabus}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const courseId = params.get("courseId") || "";
    setCourseId(courseId);
  }, []);

  useEffect(() => {
    const courseFilter = courses.filter(
      (course) => course.id === Number(courseId)
    )[0];
    setCourse(courseFilter);
  }, [courseId]);

  return (
    <div className="min-h-screen p-4 flex justify-center items-center">
      <button
        onClick={() => {
          router.push("/");
        }}
        className="absolute top-[20px] left-[20px] border border-gray-400 p-2 rounded-md cursor-hover"
      >
        Back
      </button>
      {courseId && (
        <form
          id="form"
          className="flex flex-col gap-4 w-full max-w-[400px]"
          action="/some-action"
          onSubmit={handleSubmission}
        >
          {course && (
            <>
              <h1 className="w-full max-w-[400px] text-[1.5rem] font-semibold text-center">
                {course?.name}
              </h1>
              <p className="text-sm mb-10 w-full text-[#FFD700] text-center">
                **New modes and syllabus options added !!!
              </p>
            </>
          )}
          <input type="hidden" name="courseId" value={courseId} />
          <input type="hidden" name="syllabusOption" value={syllabusOption} />
          <label htmlFor="mode">Mode:</label>
          <select
            id="mode"
            name="mode"
            className="text-gray-200 p-2 rounded-md  bg-gray-900 border border-gray-200"
            value={mode}
            required
            defaultValue={"test"}
            onChange={(e) => setMode(e.target.value)}
          >
            <option value="test">Test</option>
            <option value="practice">Practice (beta)</option>
          </select>
          {mode === "practice" && (
            <p className="text-sm text-red-500">
              *Wrong questions repeat in the test until you get them right
            </p>
          )}
          <label htmlFor="syllabus">Syllabus:</label>
          <select
            id="syllabus"
            name="syllabus"
            value={syllabusOption}
            defaultValue={"full"}
            className="text-gray-200 p-2 rounded-md  bg-gray-900 border border-gray-200"
            required
            onChange={(e) => setSyllabusOption(e.target.value)}
          >
            <option value="full">Full Portions</option>
            <option value="first-half">Module 1-6</option>
            <option value="second-half">Module 7-12</option>
            {course &&
              Array.from(
                { length: Number(course.totalModules) },
                (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    Module {index + 1}
                  </option>
                )
              )}
          </select>
          <button
            className="p-2 px-4 my-4 border rounded-md hover:bg-gray-800"
            type="submit"
          >
            Start Quiz
          </button>
        </form>
      )}
    </div>
  );
}
