import cookie from "cookie"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize(req.body.cookie, "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        expires: new Date(0),
        sameSite: "strict",
        path: "/",
      })
    )
    res.statusCode = 200
    res.json({ success: true })
  } else {
    // Response for other than POST method
    res.status(500).json({ message: "Route not valid" })
  }
}
