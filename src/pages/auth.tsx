import Footer from "@components/Footer"
import { useState } from "react"

const auth = () => {
  const [username, setUsername] = useState("")

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!username) {
      alert("Please enter your username")
      return
    }

    console.log(`logged in as ${username}`)
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
              className="border-cuof-grey-02 border-[1px] rounded-[5px] w-full p-2 mt-3 mb-10"
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="flex justify-center items-center text-white bg-cuof-gradient-h h-[38px] w-[100px] rounded-[20px]">
              <input type="submit" value="Log in" className="" />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default auth
