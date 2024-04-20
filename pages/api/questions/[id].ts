import type { NextApiRequest, NextApiResponse } from "next";
import questions from "../questionsBank";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (typeof req.query.id === "undefined") {
    return res.status(400).json({ error: "Missing ID" });
  }
  const selectedId = +req.query.id;

  const questionOrNothing = questions.filter(question => question.id == selectedId);

  if (questionOrNothing.length === 1) {
    const selectedQuestion = questionOrNothing[0];
    res.status(200).json(selectedQuestion);
  } else {
    res.status(204).send({ msg: "No content" });
  }
}
