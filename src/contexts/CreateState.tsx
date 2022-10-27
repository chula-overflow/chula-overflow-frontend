import axios from "@utils/Axios"
import { useRouter } from "next/router"
import React, { createContext, useState } from "react"
import { ThreadCreateBody } from "src/interfaces/thread"

export const CreateContext = createContext({
  create: async () => {},

  threadBody: {
    course_id: "",
    year: 0,
    semester: "",
    term: "",
    uploaded_user: "",
    question: "",
  },
  setThreadBody: (threadBody: ThreadCreateBody) => {},

  titles: [""],
  setTitles: (setTitles: any[]) => {},

  selectedTitle: "",
  setSelectedTitle: (selectedTitle: string) => {},
})

const CreateState: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter()

  const [titles, setTitles] = useState<any[]>([])

  const [selectedTitle, setSelectedTitle] = useState<string>("")

  const [threadBody, setThreadBody] = useState<ThreadCreateBody>({
    course_id: "",
    year: 0,
    semester: "",
    term: "",
    uploaded_user: "",
    question: "",
  })

  const create = async () => {
    console.log({ ...threadBody, question_title: selectedTitle })

    await axios
      .post("http://localhost:3002/thread", { ...threadBody, question_title: selectedTitle })
      .then((res) => {
        console.log(res.data)
        router.push(`/browse/${res.data.course_id}`)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <CreateContext.Provider
      value={{ create, threadBody, setThreadBody, titles, setTitles, selectedTitle, setSelectedTitle }}
    >
      {children}
    </CreateContext.Provider>
  )
}

export default CreateState
