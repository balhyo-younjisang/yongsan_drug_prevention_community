import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import router from "next/router";

import withHead from "@/components/hoc/withHead";
import CommunityWritePostTemplate from "@/components/template/Community/write";

const CommunityWritePage = () => {
  const [postData, setPostData] = useState({
    title: "",
    content: "",
  });

  const [res, callApi] = useFetch({
    url: "/post/writePost",
    headers: { "Content-Type": "application/json" },
    params: {},
    method: "POST",
    datas: postData,
  });

  const changePostTitleHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPostData((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const changePostContentHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPostData((prevState) => {
      return { ...prevState, content: event.target.value };
    });
  };

  const submitPostHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    callApi();
    router.push("/community");
  };

  return (
    <CommunityWritePostTemplate
      postInfo={{ postData, changePostTitleHandler, changePostContentHandler }}
      submitPostHandler={submitPostHandler}
    />
  );
};

export default withHead(CommunityWritePage, "글쓰기", "글쓰기");
