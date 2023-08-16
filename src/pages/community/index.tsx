import { useFetch } from "@/hooks/useFetch";
import { useEffect } from "react";

import withHead from "@/components/hoc/withHead";
import CommunityHomeTemplate from "@/components/template/Community";

interface fetchDataBase {
  payload: any;
  loading: boolean;
  error: string;
}

const CommunityHome = () => {
  const [res, callApi] = useFetch({
    url: `/post/getRecentPosts`,
    headers: {},
    params: {},
    method: "get",
    datas: {},
  });

  const [newsData, callGetNewsApi] = useFetch({
    url: `/news/getRecentNews`,
    headers: {},
    params: { query: "마약중독" },
    method: "get",
    datas: {},
  });

  useEffect(() => {
    callApi();
    callGetNewsApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <CommunityHomeTemplate responseData={res} newsData={newsData} />;
};

export default withHead(
  CommunityHome,
  "SD Community",
  "청소년 마약 근절을 위한 커뮤니티"
);
