"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface data {
  courseId: string | null;
  mode: string | null;
  syllabus: string | null;
}

export default function Quiz() {
  const [data, setData] = useState<data>();
  const router = useRouter();
  const [remainingQuestions, setRemainingQuestions] = useState<number[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const courseId = params.get("courseId");
    const mode = params.get("mode");
    const syllabus = params.get("syllabus");
    const data = {
      courseId: courseId,
      mode: mode,
      syllabus: syllabus,
    };
    setData(data);
  }, []);

  useEffect(() => {
    if (data === undefined) {
      return;
    }
    if (
      data?.mode === null ||
      data?.syllabus === null ||
      data?.courseId === null
    ) {
      router.replace("/");
    }

    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div>
      <h1>Quiz {data?.courseId}</h1>
    </div>
  );
}
