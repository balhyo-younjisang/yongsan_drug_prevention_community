import styled from "styled-components";

import SectionHeader from "@/components/molecules/Community/PostSectionHeader";
import SectionContent from "@/components/molecules/Community/PostSectionContent";

import { BasePostData } from "@/interface/BasePostData";

const CommunityMain = ({ posts }: { posts: BasePostData[] }) => {
  return (
    <StyledMain>
      <StyledPostSection height="40%">
        <SectionHeader routerPage="/community/notice" value="공지사항 📢" />
      </StyledPostSection>

      <StyledPostSection height="60%">
        <SectionHeader routerPage="/community/board" value="게시글 💬" />
        <SectionContent contents={posts} />
      </StyledPostSection>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  width: 80%;
  height: 120vh;
  background-color: #f9fafb;
  margin: 50px auto;
  border-radius: 15px;
  padding: 5px 5%;
`;

const StyledPostSection = styled.section<{ height: string }>`
  width: 100%;
  height: ${(props) => props.height};
  margin: 10px 0px;
`;

export default CommunityMain;
