import { useContext, useState } from "react"
import Router from "next/router"
import { CreateContext } from "@contexts/CreateState"
import { NextPage } from "next"

const Title: NextPage = () => {
  const { create, titles, setSelectedTitle } = useContext(CreateContext)

  const [titleSelection, setTitleSelection] = useState("-1")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const onSubmit = async () => {
    if (titleSelection === "-1") {
      setErrorMessage("Please select a title")
      return
    }
    setErrorMessage("")

    // exec
    setSelectedTitle(titles[parseInt(titleSelection) - 1])
    await create()
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
            {titles.map((title, idx) => {
              return (
                <button
                  id={`option${idx + 1}`}
                  onClick={() => handleClick(`${idx + 1}`)}
                  // style={{
                  //   border: titleSelection === `${idx + 1}` ? "3px solid #000000" : "",
                  //   color: titleSelection === `${idx + 1}` ? "#000000" : "",
                  // }}
                  className={`ring-cuof-grey-02 duration-200 rounded-[20px] w-full px-6 py-6 mt-6 ${
                    titleSelection === `${idx + 1}` ? "ring-[3px]" : "ring-1"
                  }`}
                >
                  <p className="text-left">{title}</p>
                </button>
              )
            })}
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
