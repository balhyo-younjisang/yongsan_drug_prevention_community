import Link from "next/link";
import styled from "styled-components";

interface SectionHeaderBase {
  routerPage: string;
  value: string;
}

const SectionHeader = ({ routerPage, value }: SectionHeaderBase) => {
  return (
    <Link href={routerPage}>
      <StyledLinkText>{value}</StyledLinkText>
    </Link>
  );
};

const StyledLinkText = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: black;
  padding: 20px 0px;
  border-bottom: 1px solid black;
`;

export default SectionHeader;
