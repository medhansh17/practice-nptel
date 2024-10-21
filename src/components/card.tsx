import { useRouter } from "next/navigation";

export default function Card({
  courseName,
  courseId,
  semester,
}: {
  courseName: string;
  courseId: number;
  semester: string;
}) {
  const router = useRouter();

  const handleRedirect = (courseId: number) => {
    router.push(`/startQuiz?courseId=${courseId}`);
  };

  return (
    <button
      onClick={() => handleRedirect(courseId)}
      className="border-2 border-white p-4 rounded-lg min-h-[7rem] w-[19rem] flex flex-col gap-4 items-center justify-between m-4 shadow-lg hover:bg-slate-800"
    >
      <h1 className="text-xl">{courseName}</h1>
      <h1 className="text-xs w-full text-left">{semester}</h1>
    </button>
  );
}
