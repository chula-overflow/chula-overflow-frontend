import { DescribeRoute } from "@components/Meta/DescribeRoute"
import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <DescribeRoute title="Next.js boilerplate" description="by betich">
      <main>
        <h1>Next.js App</h1>
        <p>Chula Overflow</p>
        <p>จุฬาโอเวอร์โฟล์ว</p>
        <p className="font-semibold">Chula Overflow </p>
        <div className="w-full h-6 bg-cuof-gradient-h"></div>
      </main>
    </DescribeRoute>
  )
}

export default Home
