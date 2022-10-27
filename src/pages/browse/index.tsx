import Footer from "@components/Footer"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { GetStaticProps, NextPage } from "next"
import axios from "@utils/Axios"
import { CourseBody } from "src/interfaces/course"

interface CoursesProps {
  courses: CourseBody[]
}

const Courses: NextPage<CoursesProps> = ({ courses }) => {
  const router = useRouter()

  return (
    <div className="">
      <div className="min-h-[90vh]">
        <div className="ml-11 mt-20 mb-8">
          <h1 className="font-bold text-4xl">Browse</h1>
          <p className="text-2xl">Courses</p>
        </div>
        <div className="flex flex-wrap justify-center">
          {courses.map((course, idx) => {
            if (course.exam_ids?.length) {
              return (
                <div
                  key={idx}
                  className="w-4/5 overflow-hidden border-black border rounded-2xl mb-5 hover:cursor-pointer"
                  onClick={() => router.push(`/browse/${course.course_id}`)}
                  // onClick={() => router.push(`/browse/${course.course_id}-${course.course_name.replace(/\s+/g, "-")}`)}
                >
                  <div className="px-6 py-4">
                    <h1 className="font-bold text-xl mb-2">
                      {course.course_id} {course.course_name.toUpperCase()}
                    </h1>
                    <p className="text-gray-700 text-sm">{course.exam_ids?.length} Problems</p>
                  </div>
                </div>
              )
            } else return null
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const courses: CourseBody[] = await (await axios.get("/course")).data

  return {
    props: { courses },
    revalidate: 60,
  }
}

export default Courses
