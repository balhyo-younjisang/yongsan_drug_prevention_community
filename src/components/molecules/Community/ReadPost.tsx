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
      <StyledContent>
        <StyledDetail>{postData.content}</StyledDetail>
      </StyledContent>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 80%;
  margin: 30px auto;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9fafb;
  padding: 30px;
  border-radius: 5px;
`;

const StyledTitle = styled.p`
  font-size: 26px;
  font-weight: bold;
`;

const StyledInfo = styled.p`
  font-size: 13px;
  margin-bottom: 0;
`;

const StyledContent = styled.main`
  width: 100%;
  min-height: 70vh;
  margin: 30px auto;
  background-color: #f9fafb;
  border-radius: 5px;
  padding: 30px;
`;

const StyledDetail = styled.div`
  width: 100%;
  height: 90%;
  white-space: normal;
  word-wrap: break-word;
  word-break: keep-all;
`;

export default ReadPost;
