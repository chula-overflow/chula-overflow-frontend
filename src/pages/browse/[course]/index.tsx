import Footer from "@components/Footer"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import axios from "@utils/Axios"
import { CourseBody } from "src/interfaces/course"
import { ExamBody } from "src/interfaces/exam"
import Link from "next/link"

interface Exam {
  year: number
  semester: string
  midorfinal: string
}

interface ExamsProps {
  exams: ExamBody[]
}

const Exams: NextPage<ExamsProps> = ({ exams }) => {
  const router = useRouter()
  const { course } = router.query

  return (
    <div>
      <div className="min-h-[90vh]">
        <div className="ml-11 mt-20 mb-8">
          <h1 className="font-bold text-4xl">Browse</h1>
          <p className="text-2xl">{course}</p>
        </div>
        <div className="flex flex-wrap justify-center">
          {exams.map((exam, idx) => {
            if (exam.thread_ids?.length) {
              return (
                <Link key={idx} href={`${router.asPath}/${exam.year}-${exam.semester}-${exam.term}`}>
                  <a className="w-4/5 overflow-hidden border-black border rounded-2xl mb-5 cursor-pointer">
                    <div className="px-6 py-4">
                      <h1 className="font-bold text-xl mb-2">
                        {exam.year} - {exam.semester} - {exam.term}
                      </h1>
                      <p className="text-gray-700 text-sm">{exam.thread_ids?.length} Problems</p>
                    </div>
                  </a>
                </Link>
              )
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const courses: CourseBody[] = await (await axios.get("http://localhost:3002/course")).data

  const paths = courses.map((course: CourseBody) => {
    return {
      params: {
        course: `${course.course_id}`,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const courseId = params?.course

  const exams: ExamBody[] = await (await axios.get(`http://localhost:3002/exam?course_id=${courseId}`)).data

  return {
    props: {
      exams,
    },
    revalidate: 60,
  }
}

export default Exams
