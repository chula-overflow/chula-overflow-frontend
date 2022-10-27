import Header from "@components/Header"
import CreateState from "@contexts/CreateState"
import SessionState from "@contexts/SessionState"
import "@styles/tailwind.css"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* provide SessionContext to all child */}
      <SessionState>
        <CreateState>
          <Header />
          <Component {...pageProps} />
        </CreateState>
      </SessionState>
    </>
  )
}
export default MyApp
