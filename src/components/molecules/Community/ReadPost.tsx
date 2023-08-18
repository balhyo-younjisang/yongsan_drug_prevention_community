import { useMemo, useState, useEffect } from "react";

import Image from "next/image";
import likesIcon from "/public/icons/likes.svg";

import { BasePostData } from "@/interface/BasePostData";

import styled from "styled-components";
import calcElapsedTime from "@/utils/calcElapsedTime";

const ReadPost = ({
  postData,
  onClickLikeButton,
}: {
  postData: BasePostData;
  onClickLikeButton: () => void;
}) => {
  const [data, setData] = useState(postData);

  const elapsedTime = useMemo(() => {
    return calcElapsedTime(data.date);
  }, [data.date]);

  useEffect(() => {
    setData((prev) => {
      return { ...prev, like: postData.like };
    });
  }, [postData.like]);

  useEffect(() => {
    setData((prev) => {
      return { ...prev, views: postData.views };
    });
  }, [postData.views]);

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledInfo>By {data.author}</StyledInfo>
        <StyledTitleContainer>
          <StyledTitle>{data.title}</StyledTitle>
        </StyledTitleContainer>
        <StyledInfoContainer>
          <StyledInfo>{elapsedTime}</StyledInfo>
          <StyledInfo>조회 {data.views}</StyledInfo>
          <StyledInfo>추천 {data.like}</StyledInfo>
        </StyledInfoContainer>
      </StyledHeader>
      <StyledContent>
        <StyledDetail>{postData.content}</StyledDetail>
      </StyledContent>
      <StyledFooter>
        <StyledButton onClick={() => onClickLikeButton()}>
          <Image src={likesIcon} alt="Like" />
        </StyledButton>
      </StyledFooter>
      <StyledCommentContainer></StyledCommentContainer>
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

  @media (max-width: 453px) {
    flex-direction: column;
  }
`;

const StyledTitleContainer = styled.div`
  word-break: break-all;
  width: 100%;
`;

const StyledTitle = styled.p`
  text-align: center;
  font-size: 26px;
  font-weight: bold;
`;

const StyledInfoContainer = styled.div`
  @media (max-width: 453px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

const StyledInfo = styled.p`
  font-size: 13px;
  margin: 10px 0px;
`;

const StyledContent = styled.main`
  width: 100%;
  min-height: 70vh;
  margin: 30px auto 0px;
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

const StyledFooter = styled.footer`
  width: 100%;
  height: 10vh;
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  padding: 2rem;
  background-color: #0e1382;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  margin-bottom: 0.5rem;
`;

const StyledCommentContainer = styled.div``;

export default ReadPost;
