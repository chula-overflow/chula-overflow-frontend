import Header from "@components/Header"
import "@styles/tailwind.css"
import type { AppProps } from "next/app"
import SessionState from "src/contexts/SessionState"

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
