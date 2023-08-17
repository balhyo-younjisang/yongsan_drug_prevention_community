import withHead from "@/components/hoc/withHead";

import { useRouter } from "next/router";
import { useFetch } from "@/hooks/useFetch";
import { useEffect } from "react";

import ReadPost from "@/components/molecules/Community/ReadPost";

const PostReadPage = () => {
  const router = useRouter();
  const postId = router.query.id;

  useEffect(() => {
    if (postId) callApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  const [res, callApi] = useFetch({
    url: `/post/${postId}`,
    headers: {},
    params: {},
    method: "get",
    datas: {},
  });

  return (
    <>{res.payload ? <ReadPost postData={res.payload} /> : <>Loading...</>}</>
  );
};

export default withHead(PostReadPage, "SD Community", "SD Community");
