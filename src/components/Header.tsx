import Nav from "./Nav"
import Menu from "./Menu"
import { useEffect, useState } from "react"

type HeaderProps = {
  isLoggedIn: boolean
  username: string
  logOut: () => void
}

const Header = ({ isLoggedIn, username, logOut }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
  }, [menuOpen])

  return (
    <header>
      <Nav openMenu={() => setMenuOpen(true)} menuOpen={menuOpen} />
      <div className={menuOpen ? "" : "hidden"}>
        <Menu
          isLoggedIn={true}
          username="6530000021@student.chula.ac.th"
          logOut={() => {
            console.log("log out")
          }}
          closeMenu={() => setMenuOpen(false)}
        />
      </div>
    </header>
  )
}

export default Header
