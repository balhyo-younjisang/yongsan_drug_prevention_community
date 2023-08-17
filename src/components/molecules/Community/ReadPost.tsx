import { useMemo } from "react";

import { BasePostData } from "@/interface/BasePostData";

import styled from "styled-components";
import calcElapsedTime from "@/utils/calcElapsedTime";

const ReadPost = ({ postData }: { postData: BasePostData }) => {
  const elapsedTime = useMemo(() => {
    return calcElapsedTime(postData.date);
  }, [postData.date]);

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledInfo>By {postData.author}</StyledInfo>
        <StyledTitle>{postData.title}</StyledTitle>
        <StyledInfo>{elapsedTime}</StyledInfo>
      </StyledHeader>
      <StyledContent>{postData.content}</StyledContent>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 80%;
  margin: 30px auto;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const StyledTitle = styled.p`
  font-size: 26px;
  font-weight: bold;
`;

const StyledInfo = styled.p`
  font-size: 13px;
`;

const StyledContent = styled.main`
  width: 100%;
  margin: 30px auto;
`;

export default ReadPost;
