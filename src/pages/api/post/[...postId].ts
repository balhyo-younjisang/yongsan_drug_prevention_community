import type { NextApiRequest, NextApiResponse } from "next";
import { doc, getDoc } from "firebase/firestore";
import fireStore from "@/firebase/firestore";

const GetPost = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  try {
    const query = req.query;
    const postId: string = query.postId as string;

    const post = await getDoc(doc(fireStore, "posts", postId[0]));
    res.status(200).json(post.data());
  } catch (err) {
    res.status(500).json(`Server Error ${err}`);
  }
};

export default GetPost;
