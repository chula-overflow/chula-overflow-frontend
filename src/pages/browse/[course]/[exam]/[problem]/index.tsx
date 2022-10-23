import Footer from "@components/Footer"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"

const problem = {
    question:"Find margin of error",
    detail:"A sphere is measured to have a radius of 10m with an error of +- 0.5m, find the margin error of the volume of that sphere."
}
const answer = [
    {
        detail: "A sphere is measured to have a radius of 10m with an error of +- 0.5m, find the margin error of the volume of that sphere."
    }
]
const exam_answer = () => {
    const router =useRouter()
    const { course , exam } = router.query
    const [answers, setAnswers] = useState([{detail:""}]);

  function getAnswer() {
    // const res = await fetch('...');
    // const resJson = await res.json();
    setAnswers(answer);
  }

  useEffect(() => {
    getAnswer();
  }, []);

  console.log(problem)
  const [count,setCount] = useState(0);
  const postElements = answers.map(answer => {
    return (
        <div  className="relative w-4/5 overflow-hidden border-black border rounded-2xl mb-5 hover:cursor-pointer" >
          <div className="px-6 py-4">
            <p className="text-gray-700 text-sm text-base">
                The solution is
            </p>
            <p className="text-gray-700 text-sm text-base mb-[45px]">
                {answer.detail}
            </p>
          </div>
          <div className="absolute bottom-[11px] right-[98px] hover:cursor-pointer" onClick={()=>setCount(count+1)} >
            <Image src="/graphic/arrow-up.svg" width="24" height="24"/>
          </div>
          <div className="absolute bottom-[17px] right-[64px] hover:cursor-pointer">
            {count}
          </div>
          <div className="absolute bottom-[11px] right-[13px] hover:cursor-pointer" onClick={()=>setCount(count-1)}>
            <Image src="/graphic/arrow-down.svg" width="24" height="24"/>
          </div>
        </div>
    )
  });

    return(
        <div>
        <div className="ml-11 mt-20 mb-8">
            <h1 className="font-bold text-4xl">Browse</h1>
            <p className="text-2xl">{course} {exam}</p>
        </div>
        <div className="flex flex-wrap justify-center">
            <div  className="w-4/5 overflow-hidden border-black border rounded-2xl mb-8 hover:cursor-pointer" >
                <div className="px-6 py-4">
                    <h1 className="font-bold text-xl mb-4 mt-4">
                        {problem.question}
                    </h1>
                    <p className="text-gray-700 text-sm text-base">
                        {problem.detail}
                    </p>
                </div>
            </div>
            {postElements}
        </div>
        <Footer />
        </div>
    )
}

export default exam_answer