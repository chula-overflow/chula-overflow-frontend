export interface ThreadBody {
  _id: ObjectId
  exam_id: string
  course_id: string
  upvoted: number
  downvoted: number
  problems: {
    id: string
    title: string // generated from nlp
    body: string
    uploaded_user: string
    upvoted: number
    downvoted: number
  }[]
  answers?: {
    id: string
    body: string
    upvoted: number
    downvoted: number
  }[]
}

export interface ThreadCreateBody {
  course_id: string
  year: number
  semester: string
  term: string
  uploaded_user: string
  question: string
  question_title?: string
  answer?: string
}
