import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

type MenuProps = {
  isLoggedIn: boolean
  username: string
  logOut: () => void
  closeMenu: () => void
}

const Menu = ({ isLoggedIn, username, logOut, closeMenu }: MenuProps) => {
  const router = useRouter()

  useEffect(closeMenu, [router.asPath])

  return (
    <div>
      <button onClick={closeMenu} className="fixed top-0 left-0 w-screen h-screen bg-menu-bg z-[97]"></button>
      <div className="fixed top-0 right-0 bg-white shadow-menu h-full w-4/5 max-w-[325px] z-[98]">
        <div className="relative w-full h-full z-[99]">
          <div className="absolute top-0 left-0 w-[3px] h-full bg-cuof-gradient-v"></div>
          <button onClick={closeMenu} className="absolute top-5 right-5 w-[24px] h-[24px]">
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
              <div className={`text-right text-[15px] ${isLoggedIn ? "" : "hidden"}`}>
                <p>Logged in as</p>
                <p>{username}</p>
              </div>
              <div className="h-5"></div>
              {isLoggedIn ? (
                <button onClick={logOut}>
                  <div className="flex justify-center items-center border-[1px] border-black rounded-[20px] text-[24px] px-12 py-1">
                    <p>Log out</p>
                  </div>
                </button>
              ) : (
                <Link href="/auth">
                  <div className="flex justify-center items-center border-[1px] border-black rounded-[20px] text-[24px] px-12 py-1">
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
