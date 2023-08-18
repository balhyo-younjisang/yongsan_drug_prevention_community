import type { NextApiRequest, NextApiResponse } from "next";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import fireStore from "@/firebase/firestore";

const GetPost = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { method } = req;
  const query = req.query;
  const postId: string = query.postId as string;

  const post = doc(fireStore, "posts", postId[0]);
  const getPost = await getDoc(post);

  if (!getPost) res.status(404).json("Not Found");

  try {
    switch (method) {
      case "GET":
        await updateDoc(doc(fireStore, "posts", postId[0]), {
          views: getPost.data()!.views + 1,
        });

        const updatedPost = await getDoc(post);

        res.status(200).json(updatedPost.data());
        break;
      case "PATCH":
        await updateDoc(doc(fireStore, "posts", postId[0]), {
          like: getPost.data()!.like + 1,
        });
        res.status(200).json({});
        break;
    }
  } catch (err) {
    res.status(500).json(`Server Error ${err}`);
  }
};

export default GetPost;
