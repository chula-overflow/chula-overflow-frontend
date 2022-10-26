import Nav from "./Nav"
import Menu from "./Menu"
import { useContext, useEffect, useState } from "react"
import { SessionContext } from "@contexts/SessionState"

const Header = () => {
  const { session } = useContext(SessionContext) // consume session from SessionContext

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
  }, [menuOpen])

  return (
    <header className="fixed top-0 w-full z-[100]">
      <div>
        <Nav openMenu={() => setMenuOpen(true)} menuOpen={menuOpen} />
        <Menu menuOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
      </div>
    </header>
  )
}

export default Header
