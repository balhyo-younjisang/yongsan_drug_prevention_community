import styled from "styled-components";
import { BasePostData } from "@/interface/BasePostData";
import { useMemo } from "react";
import Post from "./Post";
import News from "./News";
import { BaseNewsData } from "@/interface/BaseNewsData";

const SectionContent = ({
  newsContents,
  postContents,
}: {
  newsContents?: BaseNewsData[];
  postContents?: BasePostData[];
}) => {
  const postList = useMemo(() => {
    return postContents?.map((content, idx) => (
      <Post key={idx} postData={content} />
    ));
  }, [postContents]);

  const newsList = useMemo(() => {
    return newsContents?.map((news, idx) => <News key={idx} newsData={news} />);
  }, [newsContents]);

  return (
    <>
      <StyledContainer>{newsContents ? newsList : postList}</StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  display: grid;
`;

export default SectionContent;
