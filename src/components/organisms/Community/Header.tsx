import styled from "styled-components";
import Text from "@/components/atoms/Text";
import { TextStylesProps } from "@/interface/TextStyleProps";

interface CommunityHeaderProps {
  titleStyles: TextStylesProps;
  subTitleStyles: TextStylesProps;
}

const CommunityHeader = ({
  titleStyles,
  subTitleStyles,
}: CommunityHeaderProps) => {
  return (
    <StyledHeader>
      <Text content="Community" styles={titleStyles} />
      <Text
        content="마약 근절을 위한 우리들의 커뮤니티"
        styles={subTitleStyles}
      />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default CommunityHeader;
