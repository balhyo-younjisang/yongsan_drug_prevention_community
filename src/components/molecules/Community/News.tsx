import { BaseNewsData } from "@/interface/BaseNewsData";
import styled from "styled-components";
import Link from "next/link";

const News = ({ newsData }: { newsData: BaseNewsData }) => {
  return (
    <StyledLink href={newsData.link}>
      <StyledTitle dangerouslySetInnerHTML={{ __html: newsData.title }} />
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
  letter-spacing: 0.05em;
`;

const StyledTitle = styled.span`
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 60%;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export default News;
