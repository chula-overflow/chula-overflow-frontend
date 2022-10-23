import { useContext, useEffect, useState } from "react"
import Footer from "@components/Footer"
import { validateEmail } from "@utils/ValidateEmail"
import { SessionContext } from "@contexts/SessionState"
import Router from "next/router"

const auth = () => {
  const { session, setSession } = useContext(SessionContext)

  const [username, setUsername] = useState("")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!username) {
      setErrorMessage("Please enter your username")
      return
    }

    if (validateEmail(username)) {
      if (validateEmail(username)?.includes("student.chula.ac.th")) {
        setErrorMessage("")
        setSession({ email: username })
        // console.log(`logged in as ${session.email}`)
        Router.back()
      } else {
        setErrorMessage("Please enter a Chula email")
      }
    } else {
      setErrorMessage("Please enter a valid email")
    }
  }

  return (
    <div>
      <div className="flex flex-col justify-start items-center pt-[150px] space-y-8 h-screen">
        <div className="text-[36px] font-semibold">
          <p>Log in</p>
        </div>
        <form onSubmit={onSubmit} className="w-[270px]">
          <div className="flex flex-col justify-between items-center">
            <label htmlFor="" className="self-start">
              Username / Email
            </label>
            <input
              type="text"
              spellCheck="false"
              value={username}
              className={`border-cuof-grey-02 border-[1px] rounded-[5px] w-full p-2 mt-3 mb-5`}
              onChange={(e) => {
                setUsername(e.target.value)
                setErrorMessage("")
              }}
            />
            {errorMessage && <p className="text-red-400 mb-5">{errorMessage}</p>}
            <button
              type="submit"
              className="flex justify-center items-center text-white bg-cuof-gradient-h h-[38px] w-[100px] rounded-[20px]"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default auth
