import Nav from "./Nav"
import Menu from "./Menu"
import { useContext, useEffect, useState } from "react"
import { SessionContext } from "src/contexts/SessionState"

const Header: React.FC = () => {
  const { session } = useContext(SessionContext) // consume session from SessionContext

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
          username={session.email} // session.email from SessionContext
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
