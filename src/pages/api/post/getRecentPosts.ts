import type { NextApiRequest, NextApiResponse } from "next";
import { collection, getDocs } from "firebase/firestore";
import fireStore from "@/firebase/firestore";
import { BasePostData } from "@/interface/BasePostData";

const GetRecentPost = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  try {
    const posts = await getDocs(collection(fireStore, "posts"));

    let recentPostsList: BasePostData[] = [];
    posts.forEach((doc: any) => {
      if (recentPostsList.length > 10) return;

      const data = doc.data();
      recentPostsList.push({ ...data, docId: doc.id });
    });

    res.status(200).json(recentPostsList);
  } catch (err) {
    console.log(`Server Error : ${err}`);
    res.status(500).json(`Server Error ${err}`);
  }
};

export default GetRecentPost;
