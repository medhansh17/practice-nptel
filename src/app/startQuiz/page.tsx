/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useRouter } from "next/navigation";
import { courses } from "@/utils/course";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface courseType {
  id: number;
  name: string;
  totalModules: number;
}

export default function StartQuiz() {
  const searchParams = useSearchParams();

  const courseId = searchParams.get("courseId");
  // const courseId = 1;
  const [mode, setMode] = useState("test");
  const [syllabusOption, setSyllabusOption] = useState("full");
  const [course, setCourse] = useState<courseType>();
  const router = useRouter();

  const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const mode = formData.get("mode");
    const syllabus = formData.get("syllabus");
    router.push(`/quiz?courseId=${courseId}&mode=${mode}&syllabus=${syllabus}`);
    // console.log(`/quiz?courseId=${courseId}&mode=${mode}&syllabus=${syllabus}`);
  };

  useEffect(() => {
    const courseFilter = courses.filter(
      (course) => course.id === Number(courseId)
    )[0];
    setCourse(courseFilter);
    console.log(courseFilter);
  }, [courseId]);

  return (
    <div className="min-h-screen p-4 flex justify-center items-center">
      {courseId && <form
        id="form"
        className="flex flex-col gap-4 w-full max-w-[400px]"
        action="/some-action"
        onSubmit={handleSubmission}
      >
        {course && (
          <h1 className="w-full max-w-[400px] text-[1.5rem] font-semibold text-center mb-10">
            {course?.name}
          </h1>
        )}
        <input type="hidden" name="courseId" value={courseId} />
        <input type="hidden" name="syllabusOption" value={syllabusOption} />
        <label htmlFor="mode">Mode:</label>
        <select
          id="mode"
          name="mode"
          className="text-black p-2 rounded-md cursor-hover"
          value={mode}
          required
          defaultValue={"test"}
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="test">Test</option>
          <option value="practice">Practice</option>
        </select>
        <label htmlFor="syllabus">Syllabus:</label>
        <select
          id="syllabus"
          name="syllabus"
          value={syllabusOption}
          defaultValue={"full"}
          className="text-black p-2 rounded-md cursor-hover"
          required
          onChange={(e) => setSyllabusOption(e.target.value)}
        >
          <option value="full">Full</option>
          {course &&
            Array.from({ length: Number(course.totalModules) }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                Module {index + 1}
              </option>
            ))}
        </select>
        <button
          className="p-2 px-4 my-4 border rounded-md hover:bg-gray-800"
          type="submit"
        >
          Start Quiz
        </button>
      </form>}
    </div>
  );
}
