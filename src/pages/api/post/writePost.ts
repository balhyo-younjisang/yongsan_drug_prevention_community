import type { NextApiRequest, NextApiResponse } from "next";
import fireStore from "@/firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { changeErrorMessageToString } from "@/utils/changeErrorToString";

interface userInputBase {
  title: string;
  content: string;
}

const WritePost = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { title, content }: userInputBase = req.body;
  const toDay = new Date().toLocaleString();

  try {
    await addDoc(collection(fireStore, "posts"), {
      title,
      content,
      like: 0,
      views: 0,
      date: toDay,
      comment: [],
    });

    res.status(200).json("Writing success");
  } catch (err) {
    res.status(500).json(`Server Error ${err}`);
  }
};

export default WritePost;
