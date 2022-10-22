import Link from "next/link"
import Image from "next/image"

type NavProps = {
  openMenu: () => void
  menuOpen: boolean
}

const Nav = ({ openMenu, menuOpen }: NavProps) => {
  return (
    <div className="flex items-center justify-center h-[44px] bg-white shadow-nav z-30">
      <div className="flex flex-row justify-between items-center mx-[25px] w-full max-w-[800px]">
        <Link href="/">
          <div className="flex justify-center items-center h-full hover:cursor-pointer">
            <Image src="/graphic/cuof-text.svg" width="125" height="24" />
          </div>
        </Link>
        <button onClick={openMenu} className={menuOpen ? "hidden" : ""}>
          <div className="flex flex-col justify-between w-[20px] h-[18px]">
            <div className="bg-cuof-grey-03 w-[20px] h-[4px] rounded-[9px]"></div>
            <div className="bg-cuof-grey-03 w-[20px] h-[4px] rounded-[9px]"></div>
            <div className="bg-cuof-grey-03 w-[20px] h-[4px] rounded-[9px]"></div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Nav
