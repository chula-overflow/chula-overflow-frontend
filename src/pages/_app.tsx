import Header from "@components/Header"
import "@styles/tailwind.css"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header
        isLoggedIn={true}
        username="6530000021@student.chula.ac.th"
        logOut={() => {
          console.log("log out")
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
