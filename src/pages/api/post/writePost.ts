import bcrypt from "bcrypt";
import type { NextApiRequest, NextApiResponse } from "next";
import fireStore from "@/firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { MongoClient } from "mongodb";

interface userInputBase {
  title: string;
  content: string;
  id: string;
  password: string;
}

const WritePost = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { title, content, id, password }: userInputBase = req.body;
  const toDay = new Date().toLocaleString();

  try {
    if (!id || !password)
      return res.status(402).json("id or password input area is empty");

    const client = await MongoClient.connect(process.env.MONGODB_URI!);
    const db = client.db();
    const userCollection = db.collection("users");

    const user = await userCollection.findOne({ id }); // ID를 통해 유저가 존재하는지 확인
    if (!user)
      return res.status(402).json("An account with this id does not exists");

    const ok = await bcrypt.compare(password, user.password!); // 비밀번호가 일치하는지 확인
    if (!ok) res.status(402).json("Wrong password");

    await addDoc(collection(fireStore, "posts"), {
      title,
      content,
      like: 0,
      views: 0,
      date: toDay,
      comment: [],
      author: id,
    });

    res.status(200).json("Writing success");
  } catch (err) {
    console.log(err);
    res.status(500).json(`Server Error ${err}`);
  }
};

export default WritePost;
