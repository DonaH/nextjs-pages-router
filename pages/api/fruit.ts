// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  fruits: { fruit: string; season: string }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({
    fruits: [
      { fruit: "Watermelon", season: "Summer" },
      { fruit: "Apple", season: "Fall" },
      { fruit: "Orange", season: "Winter" },
      { fruit: "Strawberry", season: "Spring" }
    ]
  });
}
