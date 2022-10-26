export interface CourseBody {
  _id: ObjectId
  course_id: string
  course_name: string
  course_codename: string
  exam_ids?: string[]
}
