import Nav from "./Nav"
import Menu from "./Menu"
import { useState } from "react"

type HeaderProps = {
  isLoggedIn: boolean
  username: string
  logOut: () => void
}

const Header = ({ isLoggedIn, username, logOut }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

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
