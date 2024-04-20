// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { error } from "console";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (typeof req.query.id === "undefined") {
    res.status(400).json({ error: "Missing id parameter" });
    return;
  }

  res.status(200).json({
    id: +req.query.id,
    name: "Pedro #02",
  });
}
