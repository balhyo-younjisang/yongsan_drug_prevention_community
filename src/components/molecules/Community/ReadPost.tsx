import { BasePostData } from "@/interface/BasePostData";

import styled from "styled-components";

const ReadPost = ({ postData }: { postData: BasePostData }) => {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>{postData.title}</StyledTitle>
        <StyledAuthor>By {postData.author}</StyledAuthor>
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
  font-size: 20px;
`;

const StyledAuthor = styled.p`
  font-size: 13px;
`;

const StyledContent = styled.main`
  width: 100%;
  margin: 30px auto;
`;

export default ReadPost;
