import Header from "@components/Header"
import SessionState from "@contexts/SessionState"
import "@styles/tailwind.css"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* provide SessionContext to all child */}
      <SessionState>
        <Header />
        <Component {...pageProps} />
      </SessionState>
    </>
  )
}
export default MyApp
