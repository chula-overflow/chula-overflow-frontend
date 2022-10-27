import axios from "@utils/Axios"
import Footer from "@components/Footer"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { ExamBody } from "src/interfaces/exam"
import { ThreadBody } from "src/interfaces/thread"

interface ExamAnswerProps {
  thread: ThreadBody
}

const upvoteProblem = async (problemId: string) => {
  await axios
    .post(`http://localhost:3002/thread/problem/upvote/${problemId}`)
    .then(() => {})
    .catch((err) => {
      console.error(err.message)
    })
}

const downvoteProblem = async (problemId: string) => {
  await axios
    .post(`http://localhost:3002/thread/problem/downvote/${problemId}`)
    .then(() => {})
    .catch((err) => {
      console.error(err.message)
    })
}

const upvoteAnswer = async (answerId: string) => {
  await axios
    .post(`http://localhost:3002/thread/answer/upvote/${answerId}`)
    .then(() => {})
    .catch((err) => {
      console.error(err.message)
    })
}

const downvoteAnswer = async (answerId: string) => {
  await axios
    .post(`http://localhost:3002/thread/answer/downvote/${answerId}`)
    .then(() => {})
    .catch((err) => {
      console.error(err.message)
    })
}

const ExamAnswer: NextPage<ExamAnswerProps> = ({ thread }) => {
  const router = useRouter()
  const { course, exam } = router.query

  return (
    <div>
      <div className="min-h-[90vh]">
        <div className="ml-11 mt-20 mb-8">
          <h1 className="font-bold text-3xl">Browse Problem</h1>
          <p className="">
            {course} {exam}
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-4/5 overflow-hidden border-black border rounded-2xl mb-8 hover:cursor-pointer">
            <div className="px-6 py-4">
              <h1 className="font-bold text-xl mb-4">{thread.problems[0].title}</h1>
              <p className="text-gray-700 text-sm">{thread.problems[0].body}</p>
            </div>
          </div>
          {thread?.answers?.map((answer, idx) => {
            return <AnswerCard key={idx} answer={answer} />
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

interface AnswerCardProps {
  answer: {
    id: string
    body: string
    upvoted: number
    downvoted: number
  }
}

const AnswerCard: React.FC<AnswerCardProps> = ({ answer }) => {
  const [click, setClick] = useState<string>("")

  return (
    <div className="relative w-4/5 overflow-hidden border-black border rounded-2xl mb-5 hover:cursor-pointer">
      <div className="px-6 py-4">
        <p className="text-gray-700 mb-[45px]">{answer.body}</p>
      </div>
      <div
        className={`absolute bottom-[11px] right-[98px] hover:cursor-pointer z-10 ${
          click === "up" ? "" : "opacity-20"
        }`}
        onClick={() => {
          if (click === "up") {
            setClick("")
            downvoteAnswer(answer.id)
          } else {
            setClick("up")
            upvoteAnswer(answer.id)
          }
        }}
      >
        <Image src="/graphic/arrow-up.svg" width="24" height="24" />
      </div>
      <div className="absolute bottom-[17px] right-[64px] hover:cursor-pointer z-10">
        {click === ""
          ? answer.upvoted + answer.downvoted
          : click === "up"
          ? answer.upvoted + answer.downvoted + 1
          : answer.upvoted + answer.downvoted - 1}
      </div>
      <div
        className={`absolute bottom-[11px] right-[13px] hover:cursor-pointer z-10 ${
          click === "down" ? "" : "opacity-20"
        }`}
        onClick={() => {
          if (click === "down") {
            setClick("")
            upvoteAnswer(answer.id)
          } else {
            setClick("down")
            downvoteAnswer(answer.id)
          }
        }}
      >
        <Image src="/graphic/arrow-down.svg" width="24" height="24" />
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const exams: ExamBody[] = await (await axios.get("/exam")).data

  const paths = exams.reduce((prev: any[], exam: ExamBody, idx) => {
    exam?.thread_ids?.forEach((problemId) => {
      prev.push({
        params: {
          course: `${exam.course_id}`,
          exam: `${exam.year}-${exam.semester}-${exam.term}`,
          problem: problemId,
        },
      })
    })

    return prev
  }, [])

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const thread: ThreadBody = await (await axios.get(`http://localhost:3002/thread/${params?.problem}`)).data

  return {
    props: { thread },
    revalidate: 10,
  }
}

export default ExamAnswer
