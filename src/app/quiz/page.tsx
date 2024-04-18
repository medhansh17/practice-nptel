"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Quiz(){

    const searchParams = useSearchParams()
 
    const courseId = searchParams.get('courseId')
    const mode = searchParams.get('mode')
    const syllabus = searchParams.get('syllabus')
    const router = useRouter();

    useEffect(() => {  
        if(mode === undefined || syllabus === undefined || courseId === undefined){
            router.replace("/");
        }



    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mode, syllabus, courseId]);

    return (
        <div >
            <h1>Quiz {courseId}</h1>
        </div>
    );

}