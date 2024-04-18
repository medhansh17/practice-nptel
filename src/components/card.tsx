import { useRouter } from "next/navigation"
  

export default function Card({
  id,
  courseName,
  courseId
}: {
  id: number;
  courseName: string;
  courseId : number
}) {

  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/startQuiz/${courseId}`)
  }
  return (
    <button
      onClick={() => handleRedirect()}
      key={`${id}`}
      className="border-2 border-white p-4 rounded-lg h-[7rem] w-[14rem] flex items-center justify-center m-4 shadow-lg"
    >
      <h1 className="text-xl ">{courseName}</h1>
    </button>
  );
}
