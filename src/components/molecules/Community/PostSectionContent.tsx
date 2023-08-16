import styled from "styled-components";
import { BasePostData } from "@/interface/BasePostData";
import Post from "./Post";

const SectionContent = ({ contents }: { contents: BasePostData[] }) => {
  return (
    <>
      <StyledContainer>
        {contents &&
          contents.map((content, idx) => <Post key={idx} postData={content} />)}
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  display: grid;
`;

export default SectionContent;
