import Footer from "@components/Footer"
import { DescribeRoute } from "@components/Meta/DescribeRoute"
import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <DescribeRoute title="Next.js boilerplate" description="by betich">
      <div>
        <main>
          <h1>Next.js App</h1>
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
