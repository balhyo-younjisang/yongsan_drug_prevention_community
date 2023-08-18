import withHead from "@/components/hoc/withHead";

import { useRouter } from "next/router";
import { useFetch } from "@/hooks/useFetch";
import { useEffect } from "react";

import ReadPost from "@/components/molecules/Community/ReadPost";

const PostReadPage = () => {
  const router = useRouter();
  const postId = router.query.id;

  const [res, callApi] = useFetch({
    url: `/post/${postId}`,
    headers: {},
    params: {},
    method: "GET",
    datas: {},
  });

  const [updateRes, callUpdateLikeCountApi] = useFetch({
    url: `/post/${postId}`,
    headers: {},
    params: {},
    method: "PATCH",
    datas: {},
  });

  useEffect(() => {
    callApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  /** 업데이트된 게시글의 정보를 가져오는 함수 */
  const updatingPostData = () => {
    callUpdateLikeCountApi();
    callApi();
  };

  return (
    <>
      {res.payload ? (
        <ReadPost postData={res.payload} onClickLikeButton={updatingPostData} />
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default withHead(PostReadPage, "SD Community", "SD Community");
