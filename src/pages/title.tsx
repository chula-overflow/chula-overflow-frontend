import { useState } from "react"
import Router from "next/router"

const Title = () => {
  const [titleSelection, setTitleSelection] = useState("-1")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const titles = {
    option1: "title option 1",
    option2: "title option 2",
    option3: "title option 3",
  }

  const onSubmit = () => {
    if (titleSelection === "-1") {
      setErrorMessage("Please select a title")
      return
    }
    setErrorMessage("")

    console.log("selected title: ", titleSelection)

    Router.push("/")
  }

  const handleClick = (option: string) => {
    setTitleSelection(option)
    setErrorMessage("")
  }

  return (
    <div>
      <div className="h-screen max-w-[400px] mx-auto pt-[80px] px-[44px] flex flex-col items-center justify-start">
        <div className="w-full ">
          <div className="text-[36px] font-semibold">
            <p>Select a title</p>
          </div>
          <div className="mx-2 mt-5 text-[16px]">
            <p>Choose the best title for your problem</p>
          </div>
          <div className="flex flex-col justify-start items-center mt-4 mb-10 text-[18px] text-cuof-grey-02">
            <button
              id="option1"
              onClick={() => handleClick("1")}
              style={{
                border: titleSelection === "1" ? "2px solid #000000" : "",
                color: titleSelection === "1" ? "#000000" : "",
              }}
              className="border-cuof-grey-02 border-[1px] rounded-[20px] w-full px-6 py-6 mt-6 "
            >
              <p className="text-left">{titles.option1}</p>
            </button>
            <button
              id="option2"
              onClick={() => handleClick("2")}
              style={{
                border: titleSelection === "2" ? "2px solid #000000" : "",
                color: titleSelection === "2" ? "#000000" : "",
              }}
              className="border-cuof-grey-02 border-[1px] rounded-[20px] w-full px-6 py-6 mt-6 "
            >
              <p className="text-left">{titles.option2}</p>
            </button>
            <button
              id="option3"
              onClick={() => handleClick("3")}
              style={{
                border: titleSelection === "3" ? "2px solid #000000" : "",
                color: titleSelection === "3" ? "#000000" : "",
              }}
              className="border-cuof-grey-02 border-[1px] rounded-[20px] w-full px-6 py-6 mt-6 "
            >
              <p className="text-left">{titles.option3}</p>
            </button>
          </div>
          {errorMessage && <p className="text-red-400 mb-5">{errorMessage}</p>}
          <div className="self-end flex flex-row justify-end space-x-3">
            <button
              className="flex justify-center items-center border-black border-[1px] h-[38px] w-[100px] rounded-[20px]"
              onClick={Router.back}
            >
              Back
            </button>
            <button
              onClick={onSubmit}
              className="flex justify-center items-center text-white bg-cuof-gradient-h h-[38px] w-[100px] rounded-[20px]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Title
