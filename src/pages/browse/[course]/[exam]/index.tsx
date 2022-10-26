import Footer from "@components/Footer"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import axios from "@utils/Axios"
import { ExamBody } from "src/interfaces/exam"
import { ThreadBody } from "src/interfaces/thread"

interface ExamProblemProps {
  threads: ThreadBody[]
}

const ExamProblem: NextPage<ExamProblemProps> = ({ threads }) => {
  const router = useRouter()
  const { course, exam } = router.query

  const upvoteThread = async (threadId: string) => {
    await axios
      .post(`http://localhost:3002/thread/upvote/${threadId}`)
      .then(() => {})
      .catch((err) => {
        console.error(err.message)
      })
  }

  const downvoteThread = async (threadId: string) => {
    await axios
      .post(`http://localhost:3002/thread/downvote/${threadId}`)
      .then(() => {})
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <div>
      <div className="min-h-[90vh]">
        <div className="ml-11 mt-20 mb-8">
          <h1 className="font-bold text-4xl">Browse</h1>
          <div className="text-lg flex justify-between w-full pr-12">
            <p>{course}</p>
            <p>{exam}</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {threads.map((thread, idx) => {
            return (
              <div
                key={idx}
                className="relative w-4/5 overflow-hidden border-black border rounded-2xl mb-5 hover:cursor-pointer"
              >
                <div className="px-6 py-4 z-10">
                  <h1 className="font-bold text-xl mb-2">{}</h1>
                  <p className="text-gray-700 text-sm mb-[45px]">{}</p>
                </div>
                <div
                  className="absolute bottom-[11px] right-[98px] hover:cursor-pointer z-10"
                  onClick={() => upvoteThread(thread._id)}
                >
                  <Image src="/graphic/arrow-up.svg" width="24" height="24" />
                </div>
                <div className="absolute bottom-[17px] right-[64px] hover:cursor-pointer z-10">
                  {thread.upvoted + thread.downvoted}
                </div>
                <div
                  className="absolute bottom-[11px] right-[13px] hover:cursor-pointer z-10"
                  onClick={() => downvoteThread(thread._id)}
                >
                  <Image src="/graphic/arrow-down.svg" width="24" height="24" />
                </div>
                <Link href={`${router.asPath}/${thread._id}`}>
                  <div className="absolute top-0 left-0 right-0 bottom-0"></div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const exams: ExamBody[] = await (await axios.get("http://localhost:3002/exam")).data

  const paths = exams.map((exam: ExamBody) => {
    return {
      params: {
        course: `${exam.course_id}`,
        exam: `${exam.year}-${exam.semester}-${exam.term}`,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const examProperties = String(params?.exam).split("-")

  const examId = await (
    await axios.get(
      `http://localhost:3002/exam/?year=${examProperties[0]}&semester=${examProperties[1]}&term=${examProperties[2]}`
    )
  ).data._id

  const threads = await (await axios.get(`http://localhost:3002/thread?exam_id=${examId}`)).data

  return {
    props: { threads },
  }
}

export default ExamProblem
