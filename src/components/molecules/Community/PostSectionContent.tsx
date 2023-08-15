import styled from "styled-components";
import { BasePostData } from "@/interface/BasePostData";

const SectionContent = ({ contents }: { contents: BasePostData[] }) => {
  return (
    <StyledContainer>
      {contents &&
        contents.map((content, idx) => <p key={idx}>{content.title}</p>)}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: grid;
`;

export default SectionContent;
