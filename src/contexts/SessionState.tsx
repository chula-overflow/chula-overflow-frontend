import { ISession } from "@components/interfaces/session"
import React, { createContext, useEffect, useState } from "react"

export const SessionContext = createContext({
  session: {
    email: "",
  },
  setSession: (session: ISession) => {},
}) // create and declare what will be in the SessionContext

const SessionState: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<ISession>({
    email: "",
  })

  useEffect(() => {
    setSession({
      email: "",
    })
  }, [])

  return <SessionContext.Provider value={{ session, setSession }}>{children}</SessionContext.Provider>
}

export default SessionState
