import Footer from "@components/Footer"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"

const problem = [
  {
    question: "Find margin of error",
    detail: "A sphere is measured to have a radius of 10m with an error of ...",
  },
  {
    question: "Find margin of error",
    detail: "A sphere is measured to have a radius of 10m with an error of ...",
  },
  {
    question: "Find margin of error",
    detail: "A sphere is measured to have a radius of 10m with an error of ...",
  },
  {
    question: "Find margin of error",
    detail: "A sphere is measured to have a radius of 10m with an error of ...",
  },
]

const ExamProblem = () => {
  const router = useRouter()
  const { course, exam } = router.query
  const [problems, setProblems] = useState([{ question: "", detail: "" }])

  function getProblem() {
    // const res = await fetch('...');
    // const resJson = await res.json();
    setProblems(problem)
  }

  useEffect(() => {
    getProblem()
  }, [])

  const [count, setCount] = useState(0)
  const postElements = problems.map((problem) => {
    return (
      <Link
        href={{
          pathname: "/browse/[course]/[exam]/[problem]",
          query: { course: `${course}`, exam: `${exam}`, problem: `${problem.question}` },
        }}
        key={problem.question}
      >
        <div className="relative w-4/5 overflow-hidden border-black border rounded-2xl mb-5 hover:cursor-pointer">
          <div className="px-6 py-4 ">
            <h1 className="font-bold text-xl mb-2">{problem.question}</h1>
            <p className="text-gray-700 text-sm mb-[45px]">{problem.detail}</p>
          </div>
          <div className="absolute bottom-[11px] right-[98px] hover:cursor-pointer" onClick={() => setCount(count + 1)}>
            <Image src="/graphic/arrow-up.svg" width="24" height="24" />
          </div>
          <div className="absolute bottom-[17px] right-[64px] hover:cursor-pointer">{count}</div>
          <div className="absolute bottom-[11px] right-[13px] hover:cursor-pointer" onClick={() => setCount(count - 1)}>
            <Image src="/graphic/arrow-down.svg" width="24" height="24" />
          </div>
        </div>
      </Link>
    )
  })

  return (
    <div>
      <div className="min-h-[90vh]">
        <div className="ml-11 mt-20 mb-8">
          <h1 className="font-bold text-4xl">Browse</h1>
          <p className="text-2xl">
            {course} {exam}
          </p>
        </div>
        <div className="flex flex-wrap justify-center">{postElements}</div>
      </div>
      <Footer />
    </div>
  )
}

export default ExamProblem
