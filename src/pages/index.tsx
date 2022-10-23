import Footer from "@components/Footer"
import { DescribeRoute } from "@components/Meta/DescribeRoute"
import { Gradient } from "@utils/Gradient"
import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useScrollTo } from "react-use-window-scroll"

const Home: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollTo = useScrollTo()

  const gradient = new Gradient()

  useEffect(() => {
    // @ts-ignore
    gradient.initGradient("#gradient-canvas")
  }, [])

  return (
    <DescribeRoute title="Chula Overflow" description="chula-overflow">
      <>
        <main className="scroll-smooth">
          <div className="flex justify-center items-start w-full h-screen overflow-hidden">
            <canvas id="gradient-canvas" className="absolute -z-10 w-full h-screen" data-transition-in />
            <div className="flex flex-col justify-between h-full">
              <div className="mt-[100px] flex flex-col justify-center items-center space-y-20">
                <div className="flex flex-col justify-center items-center space-y-7">
                  <div className="text-[20px]">
                    <p>Welcome to</p>
                  </div>
                  <div>
                    <Image src="/graphic/cuof-logo-text.svg" width="297" height="98" />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-3">
                  <Link href="/browse">
                    <div className="flex justify-center items-center border-[1px] border-black rounded-[20px] text-[24px] px-12 py-1 hover:cursor-pointer">
                      <p className="hover:cursor-pointer">Browse</p>
                    </div>
                  </Link>
                  <p>or</p>
                  <Link href="/create">
                    <div className="flex justify-center items-center border-[1px] border-black rounded-[20px] text-[24px] px-12 py-1 hover:cursor-pointer">
                      <p className="hover:cursor-pointer">Submit a Problem</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div id="learn-more" className="mb-[30px] flex flex-col justify-center items-center space-y-2">
                <button onClick={() => scrollTo({ top: 700, left: 0, behavior: "smooth" })} className="text-[15px]">
                  <p className="over:cursor-pointer">Learn more</p>
                </button>
                <button onClick={() => scrollTo({ top: 700, left: 0, behavior: "smooth" })}>
                  <Image src="/graphic/landing-arrow.svg" width="28" height="28" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center space-x-9 py-8 bg-cuof-grey-01">
            <div>
              <Image src="/graphic/cuof-logo.svg" width="69" height="86" />
            </div>
            <div className="w-[235px] text-[18px] italic">
              <p>Chula Overflow is a platform created and ran by students for students.</p>
            </div>
          </div>
          <div className="flex flex-col justify-evenly items-center h-[1000px]">
            <div className="flex flex-col justify-center items-center border-[1px] border-black rounded-[20px] w-[354px] h-[207px] p-6">
              <div className="self-start text-[32px] font-semibold">
                <p>Browse</p>
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className="text-[20px]">
                  <p>
                    Chula Overflow is a <br /> home to thousands of <br /> past exam questions <br /> and answers.
                  </p>
                </div>
                <div className="w-[100px] flex flex-row justify-center items-start pt-3">
                  <Image src="/graphic/magnifier.svg" width="48" height="48" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center border-[1px] border-black rounded-[20px] w-[354px] h-[207px] p-6">
              <div className="self-end text-[32px] font-semibold">
                <p>Submit a problem</p>
              </div>
              <div className="flex flex-row-reverse justify-between w-full">
                <div className="text-[20px]">
                  <p>
                    Upload a question <br /> you found in a recent <br /> exam for others to <br /> solve.
                  </p>
                </div>
                <div className="w-[100px] flex flex-row justify-center items-start pt-3">
                  <Image src="/graphic/question-mark.svg" width="59" height="59" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center border-[1px] border-black rounded-[20px] w-[354px] h-[207px] p-6">
              <div className="self-start text-[32px] font-semibold">
                <p>Answer</p>
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className="text-[20px]">
                  <p>
                    Solve and submit your <br /> answer. Upvote the <br /> best one so that <br /> others can see.
                  </p>
                </div>
                <div className="w-[100px] flex flex-row justify-center items-start pt-3">
                  <Image src="/graphic/lightbulb.svg" width="50" height="65" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center border-[1px] border-black rounded-[20px] w-[354px] h-[207px] p-6">
              <div className="self-end text-[32px] font-semibold">
                <p>Discuss</p>
              </div>
              <div className="flex flex-row-reverse justify-between w-full">
                <div className="text-[20px]">
                  <p>
                    Talk to other students <br /> about a solution. You <br /> might even find new <br /> ideas here.
                  </p>
                </div>
                <div className="w-[100px] flex flex-row justify-center items-start pt-3">
                  <Image src="/graphic/chat-bubble.svg" width="56" height="56" />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center py-10 space-y-4 bg-[url('../../public/graphic/landing-gradient.jpg')]">
            <p>What are you waiting for?</p>
            <Link href="/browse">
              <div className="flex justify-center items-center border-[1px] border-black rounded-[20px] text-[24px] px-12 py-1 hover:cursor-pointer">
                <p className="hover:cursor-pointer">Discover now</p>
              </div>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    </DescribeRoute>
  )
}

export default Home
