import Footer from "@components/Footer"
import { useState } from "react"
import Router from "next/router"
import { GetServerSideProps, NextPage } from "next"
import { CourseBody } from "src/interfaces/course"
import axios from "@utils/Axios"

interface CreateProps {
  courses: CourseBody[]
}

const Create: NextPage<CreateProps> = ({ courses }) => {
  const [subject, setSubject] = useState("")
  const [year, setYear] = useState("2022")
  const [semester, setSemester] = useState("1")
  const [subSemester, setSubSemester] = useState("Mid")
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!subject || !year || !semester || !subSemester || !question) {
      setErrorMessage("Please fill in all fields")
      return
    }
    console.log(subject, year, semester, subSemester, question, answer)
    setErrorMessage("")
    Router.push("/title")
  }

  console.log(courses)

  return (
    <div>
      <div className="h-screen max-w-[400px] mx-auto pt-[80px] px-[44px] flex flex-col items-center justify-start">
        <div className="w-full ">
          <div className="text-[36px] font-semibold">
            <p>Add a problem</p>
          </div>
          <div className="mx-5 mt-5 text-[16px]">
            <form onSubmit={onSubmit} className="flex flex-col flex-start items-center space-y-6">
              <div className="w-full">
                <label>Select course</label>
                <input
                  type="text"
                  spellCheck="false"
                  value={subject}
                  className={`border-cuof-grey-02 border-[1px] rounded-[5px] w-full px-2 py-1 mt-2 `}
                  onChange={(e) => {
                    setSubject(e.target.value)
                    setErrorMessage("")
                  }}
                  list="course"
                />
                <datalist id="course">
                  {courses.map((course, idx) => (
                    <option key={idx} value={`${course.course_id} ${course.course_name}`} />
                  ))}
                </datalist>
              </div>
              <div className="w-full">
                <label>Select semester</label>
                <div className="flex flex-row justify-between space-x-6 h-[42px]">
                  <select
                    name=""
                    id=""
                    className="border-cuof-grey-02 border-[1px] rounded-[5px] w-full px-2 py-1 mt-2 "
                    value={year}
                    onChange={(e) => {
                      setYear(e.target.value)
                      setErrorMessage("")
                    }}
                  >
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                  </select>
                  <select
                    name=""
                    id=""
                    className="border-cuof-grey-02 border-[1px] rounded-[5px] w-full px-2 py-1 mt-2 "
                    value={semester}
                    onChange={(e) => {
                      setSemester(e.target.value)
                      setErrorMessage("")
                    }}
                  >
                    <option value="1">S1</option>
                    <option value="2">S2</option>
                  </select>
                  <select
                    name=""
                    id=""
                    className="border-cuof-grey-02 border-[1px] rounded-[5px] w-full px-2 py-1 mt-2 "
                    value={subSemester}
                    onChange={(e) => {
                      setSubSemester(e.target.value)
                      setErrorMessage("")
                    }}
                  >
                    <option value="Mid">Mid</option>
                    <option value="Final">Final</option>
                  </select>
                </div>
              </div>
              <div className="w-full">
                <label>Question</label>
                <textarea
                  spellCheck="false"
                  value={question}
                  className={`border-cuof-grey-02 border-[1px] rounded-[5px] w-full min-h-[90px] px-2 py-1 mt-2 box-border`}
                  onChange={(e) => {
                    setQuestion(e.target.value)
                    setErrorMessage("")
                  }}
                />
              </div>{" "}
              <div className="w-full">
                <label>Answer (optional)</label>
                <textarea
                  spellCheck="false"
                  value={answer}
                  className={`border-cuof-grey-02 border-[1px] rounded-[5px] w-full min-h-[90px] px-2 py-1 mt-2 box-border`}
                  onChange={(e) => {
                    setAnswer(e.target.value)
                    setErrorMessage("")
                  }}
                />
              </div>
              {errorMessage && <p className="text-red-400 mb-5">{errorMessage}</p>}
              <div className="self-end flex flex-row justify-end space-x-3">
                <button
                  className="flex justify-center items-center border-black border-[1px] h-[38px] w-[100px] rounded-[20px]"
                  onClick={Router.back}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex justify-center items-center text-white bg-cuof-gradient-h h-[38px] w-[100px] rounded-[20px]"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const courses: CourseBody[] = await (await axios.get("http://localhost:3002/course")).data
  const cookie = context.req.cookies?.sid

  // if (!cookie) {
  //   return {
  //     redirect: {
  //       destination: "/auth",
  //       permanent: false,
  //     },
  //   }
  // }

  return {
    props: {
      courses,
    },
  }
}

export default Create
