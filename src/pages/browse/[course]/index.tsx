import Footer from "@components/Footer"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"

interface Exam {
  year: number
  semester: string
  midorfinal: string
}

let current_year = 2022
let semester = ["S1", "S2"]
let midorfinal = ["Mid", "Final"]

const Exams = () => {
  const router = useRouter()
  const { course } = router.query
  const Elements = []

  for (let i = current_year; i >= 2014; i--) {
    for (let j = 1; j >= 0; j--) {
      for (let k = 1; k >= 0; k--) {
        Elements.push(
          <div
            className="w-4/5 overflow-hidden border-black border rounded-2xl mb-5 hover:cursor-pointer"
            onClick={() => router.push(`${course}/${i}${semester[j]}${midorfinal[k]}`)}
          >
            <div className="px-6 py-4">
              <h1 className="font-bold text-xl mb-2">
                {i} - {semester[j]} - {midorfinal[k]}
              </h1>
              <p className="text-gray-700 text-sm text-base">30 Problems</p>
            </div>
          </div>
        )
      }
    }
  }

  return (
    <div>
      <div className="ml-11 mt-20 mb-8">
        <h1 className="font-bold text-4xl">Browse</h1>
        <p className="text-2xl">{course}</p>
      </div>
      <div className="flex flex-wrap justify-center">{Elements}</div>
      <Footer />
    </div>
  )
}

export default Exams
