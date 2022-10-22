import Footer from "@components/Footer"
import Menu from "@components/Menu"
import { DescribeRoute } from "@components/Meta/DescribeRoute"
import Nav from "@components/Nav"
import type { NextPage } from "next"
import { useState } from "react"

const Home: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <DescribeRoute title="Chula Overflow" description="chula-overflow">
      <div>
        {/* <Nav openMenu={() => setMenuOpen(true)} menuOpen={menuOpen} />
        <div className={menuOpen ? "" : "hidden"}>
          <Menu
            isLoggedIn={true}
            username="6530000021@student.chula.ac.th"
            logOut={() => {
              console.log("log out")
            }}
            closeMenu={() => setMenuOpen(false)}
          />
        </div> */}
        <main>
          <h1>Next.js App</h1>
          <p>Chula Overflow</p>
          <p>Chula Overflow</p>
          <p>Chula Overflow</p>
          <p>Chula Overflow</p>
          <p>Chula Overflow</p>
          <p>Chula Overflow</p>
          <p>Chula Overflow</p>
          <p>Chula Overflow</p>
          <p>Chula Overflow</p>
          <p>Chula Overflow</p>
          <p>Chula Overflow</p>
          <p>Chula Overflow</p>
          <p>Chula Overflow</p>
          <p>จุฬาโอเวอร์โฟล์ว</p>
          <p className="font-semibold">Chula Overflow </p>
        </main>
        <Footer />
      </div>
    </DescribeRoute>
  )
}

export default Home
