import { ISession } from "@components/interfaces/session"
import React, { createContext, useEffect, useState } from "react"
import axios from "@utils/Axios"
import { useRouter } from "next/router"

export const SessionContext = createContext({
  session: {
    email: "",
  },
  login: (email: string) => {},
  logout: () => {},
})

const SessionState: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter()

  const [session, setSession] = useState<ISession>({
    email: "",
  })

  const getSession = async () => {
    await axios
      .get("/auth/me")
      .then((res) => {
        setSession(res.data.user)
      })
      .catch((err) => {})
  }

  const login = async (email: string) => {
    await axios
      .post("/auth/login", {
        email: email,
      })
      .then((res) => {
        router.push("/")
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  const logout = async () => {
    await axios
      .get("/auth/revoke")
      .then(() => {})
      .catch((err) => {
        console.error(err.message)
      })

    await axios.post("http://localhost:4000/api/cookie/erase", { cookie: "sid" }) // require cookie name

    router.reload()
  }

  useEffect(() => {
    getSession()
  }, [])

  return <SessionContext.Provider value={{ session, login, logout }}>{children}</SessionContext.Provider>
}

export default SessionState
