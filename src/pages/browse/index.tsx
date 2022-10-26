import Footer from "@components/Footer"
import React, { useEffect, useState } from "react"
import Header from "@components/Header"
import { useRouter } from "next/router"

const subject = [
  {
    id: "2301107",
    name: "calculus 1",
    problems: "90",
  },
  {
    id: "2301107",
    name: "calculus 1",
    problems: "90",
  },
  {
    id: "2301107",
    name: "calculus 1",
    problems: "90",
  },
  {
    id: "2301107",
    name: "calculus 1",
    problems: "90",
  },
]

const Courses = () => {
  const router = useRouter()
  const [subjects, setSubjects] = useState([{ id: "", name: "", problems: "" }])

  function getSubject() {
    // const res = await fetch('...');
    // const resJson = await res.json();
    setSubjects(subject)
  }

  useEffect(() => {
    getSubject()
  }, [])

  console.log(subject)

  const postElements = subjects.map((subject) => {
    return (
      <div
        key={subject.id}
        className="w-4/5 overflow-hidden border-black border rounded-2xl mb-5 hover:cursor-pointer"
        onClick={() => router.push(`browse/${subject.id} ${subject.name}`)}
      >
        <div className="px-6 py-4">
          <h1 className="font-bold text-xl mb-2">
            {subject.id} {subject.name.toUpperCase()}
          </h1>
          <p className="text-gray-700 text-sm">{subject.problems} Problems</p>
        </div>
      </div>
    )
  })

  return (
    <div className="">
      <div className="min-h-[90vh]">
        <div className="ml-11 mt-20 mb-8">
          <h1 className="font-bold text-4xl">Browse</h1>
          <p className="text-2xl">Courses</p>
        </div>
        <div className="flex flex-wrap justify-center">{postElements}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Courses
