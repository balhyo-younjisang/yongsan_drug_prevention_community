import styled from "styled-components";

import InputTitle from "@/components/organisms/Community/InputTitle";
import InputContent from "@/components/organisms/Community/InputContent";

import { BaseWritePost } from "@/interface/BaseWritePost";
import SubmitButton from "@/components/atoms/SubmitButton";

const InputTitleStyles = {
  width: "100%",
  fontSize: "20px",
  margin: "10px 0px",
};

const InputContentStyles = {
  fontSize: "18px",
  margin: "30px 0px",
  height: "80vh",
  width: "100%",
  fontWeight: "600",
};

const WriteButtonStyles = {
  padding: "20px",
  marginTop: "30px",
  fontSize: "2vw",
  fontWeight: "bold",
  width: "50%",
  mediaFontSize: "5vw",
};

const CommunityWritePostTemplate = ({
  postInfo,
  submitPostHandler,
}: BaseWritePost) => {
  return (
    <StyledContainer>
      <InputTitle
        title={postInfo.postData.title}
        onChangeHandler={postInfo.changePostTitleHandler}
        styles={InputTitleStyles}
      />
      <InputContent
        content={postInfo.postData.content}
        onChangeHandler={postInfo.changePostContentHandler}
        styles={InputContentStyles}
      />
      <InputUserData>
        <StyledInput
          placeholder="아이디를 입력해주세요"
          onChange={postInfo.changeAuthorIdHandler}
        />
        <StyledInput
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={postInfo.changeAuthorPasswordHandler}
        />
      </InputUserData>
      <SubmitButton
        content="글쓰기"
        onSubmitHandler={submitPostHandler}
        styles={WriteButtonStyles}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  align-items: center;
`;

const InputUserData = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledInput = styled.input`
  border: 1px solid black;
  padding: 5px;
  width: 30%;

  @media (max-width: 768px) {
    width: 80%;
    margin: 10px 0px;
  }
`;

export default CommunityWritePostTemplate;
