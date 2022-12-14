import Link from "next/link"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import { SessionContext } from "@contexts/SessionState"

type MenuProps = {
  menuOpen: boolean
  closeMenu: () => void
}

const Menu = ({ menuOpen, closeMenu }: MenuProps) => {
  const router = useRouter()

  const { session, logout } = useContext(SessionContext)

  useEffect(closeMenu, [router.asPath])

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-menu-bg duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0"
        } z-[96] pointer-events-none`}
      ></div>
      {menuOpen && <div onClick={closeMenu} className={`fixed top-0 left-0 w-screen h-screen z-[98]`}></div>}

      <div
        className={`fixed duration-300 ease-in-out ${
          menuOpen ? "" : "translate-x-full"
        } top-0 right-0 bg-white shadow-menu h-full w-4/5 max-w-[325px] z-[98]`}
      >
        <div className="relative w-full h-full z-[99]">
          <div className="absolute top-0 left-0 w-[3px] h-full bg-cuof-gradient-v"></div>
          <button onClick={closeMenu} className="absolute top-4 right-4 w-[24px] h-[24px]">
            <div className="relative w-full h-full">
              <div className="absolute top-1/2 left-0 bg-cuof-grey-03 w-[24px] h-[4px] rounded-[9px] rotate-45"></div>
              <div className="absolute top-1/2 left-0 bg-cuof-grey-03 w-[24px] h-[4px] rounded-[9px] -rotate-45"></div>
            </div>
          </button>
          <div className="absolute top-[70px] right-10 flex flex-col justify-between h-full">
            <div className="flex flex-col space-y-2 items-end text-[32px] text-cuof-grey-02">
              <Link id="homeBtn" href="/">
                <p className={`hover:cursor-pointer ${router.pathname === "/" ? "text-black" : ""}`}>Home</p>
              </Link>
              <Link id="browseBtn" href="/browse">
                <p className={`hover:cursor-pointer ${router.pathname === "/browse" ? "text-black" : ""}`}>Browse</p>
              </Link>
              <Link id="submitBtn" href="/create">
                <p className={`hover:cursor-pointer ${router.pathname === "/create" ? "text-black" : ""}`}>
                  Submit Problem
                </p>
              </Link>
              <Link id="aboutBtn" href="/about">
                <p className={`hover:cursor-pointer ${router.pathname === "/about" ? "text-black" : ""}`}>About</p>
              </Link>
            </div>
            <div className="flex flex-col items-end mb-[275px]">
              <div className={`text-right text-[15px] ${session.email ? "" : "hidden"}`}>
                <p>Logged in as</p>
                <p>{session.email}</p>
              </div>
              <div className="h-5"></div>
              {session.email ? (
                <button onClick={logout}>
                  <div className="flex justify-center items-center border-[1px] border-black rounded-[20px] text-[24px] px-12 py-1">
                    <p>Log out</p>
                  </div>
                </button>
              ) : (
                <Link href="/auth">
                  <div className="flex justify-center items-center border-[1px] border-black rounded-[20px] text-[24px] px-12 py-1 hover:cursor-pointer">
                    <p>Log in </p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
