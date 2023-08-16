import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const client_id = process.env.NAVER_CLIENT_ID;
const client_secret = process.env.NAVER_CLIENT_SECRET;

const GetRecentNews = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  try {
    const { query } = req.query;
    const api_url = `https://openapi.naver.com/v1/search/news?query=${query}&display=5`;
    const options = {
      headers: {
        "X-Naver-Client-Id": client_id,
        "X-Naver-Client-Secret": client_secret,
      },
    };

    const {
      data: { items },
    } = await axios.get(api_url, options);

    res.status(200).json(items);
  } catch (err) {
    console.log(`Server Error : ${err}`);
    res.status(500).json(`Server Error ${err}`);
  }
};

export default GetRecentNews;
