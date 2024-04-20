import { shuffle } from "../../../functions/arrays";
import questions from "../questionsBank";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const ids = questions.map(question => question.id);

  res.status(200).json(shuffle(ids));
}
