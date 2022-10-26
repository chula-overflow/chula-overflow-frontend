export interface ExamBody {
  _id: ObjectId
  course_id: string
  year: number // 2022, 2021, 2020, ...
  semester: string // S1, S2
  term: string // Mid | Final
  thread_ids?: string[]
}
