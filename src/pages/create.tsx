import Footer from "@components/Footer"
import { useContext, useState } from "react"
import Router from "next/router"
import { GetServerSideProps, NextPage } from "next"
import { CourseBody } from "src/interfaces/course"
import axios from "@utils/Axios"
import { SessionContext } from "@contexts/SessionState"
import { ThreadCreateBody } from "src/interfaces/thread"
import { CreateContext } from "@contexts/CreateState"

interface CreateProps {
  courses: CourseBody[]
}

const Create: NextPage<CreateProps> = ({ courses }) => {
  const { session } = useContext(SessionContext)
  const { setThreadBody, setTitles } = useContext(CreateContext)

  const [subject, setSubject] = useState("")
  const [year, setYear] = useState("2022")
  const [semester, setSemester] = useState("1")
  const [subSemester, setSubSemester] = useState("Mid")
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    let createThreadBody: ThreadCreateBody
    if (answer) {
      createThreadBody = {
        course_id: subject.split(" ")[0],
        year: parseInt(year),
        semester: semester,
        term: subSemester,
        uploaded_user: "123@student.chula.ac.th", // change to session.email after connected to auth service
        question: question,
        answer: answer,
      }
    } else {
      createThreadBody = {
        course_id: subject.split(" ")[0],
        year: parseInt(year),
        semester: semester,
        term: subSemester,
        uploaded_user: "123@student.chula.ac.th", // change to session.email after connected to auth service
        question: question,
      }
    }

    if (!subject || !year || !semester || !subSemester || !question) {
      setErrorMessage("Please fill in all fields")
      return
    }
    setThreadBody(createThreadBody)
    setErrorMessage("")

    axios
      .post("http://localhost:3003/tokenize", {
        paragraph: question,
      })
      .then((res) => {
        setTitles(res.data.sentences)
        Router.push("/title")
      })
      .catch((err) => {
        console.error(err.message)
      })

    // axios
    //   .post("/thread", {
    //     ...createThreadBody,
    //   })
    //   .then(() => {})
  }

  const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012]

  return (
    <div>
      <div className="min-h-screen max-w-[400px] mx-auto pt-[80px] px-[44px] flex flex-col items-center justify-start">
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
                    {years.map((year, idx) => (
                      <option key={idx} value={year}>
                        {year}
                      </option>
                    ))}
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
  const courses: CourseBody[] = await (await axios.get("/course")).data
  const cookie = context.req.cookies?.sid

  if (!cookie) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    }
  }

  return {
    props: {
      courses,
    },
  }
}

export default Create
