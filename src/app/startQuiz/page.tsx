"use client";
import { useRouter } from "next/navigation";
import { courses } from "@/utils/course";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function StartQuiz() {
  const params = useParams();
  const courseId = params.courseId;
  const [mode, setMode] = useState("test");
  const [syllabusOption, setSyllabusOption] = useState("full");

  const handleSubmission: (e: any) => void = (e: any) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <form id="form" action={(e) => handleSubmission(e)}>
        <input type="hidden" name="courseId" value={params.courseId} />
        <input type="hidden" name="syllabusOption" value={syllabusOption} />
        <label htmlFor="mode">Mode:</label>
        <select
          id="mode"
          name="mode"
          value={mode}
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
          onChange={(e) => setSyllabusOption(e.target.value)}
        >
          <option value="full">Full</option>
          {}
        </select>
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
}
