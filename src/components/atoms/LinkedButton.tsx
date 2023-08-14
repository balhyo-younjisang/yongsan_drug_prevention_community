import styled from "styled-components";
import Link from "next/link";
import type { LinkedButtonStyles } from "@/interface/LinkedButtonStylesProps";

interface ButtonProps {
  content: string;
  routerPage: string;
  isAbsolute?: boolean;
  styles: LinkedButtonStyles;
}

const LinkedButton = ({
  content,
  routerPage,
  styles,
  isAbsolute,
}: ButtonProps) => {
  return (
    <>
      {isAbsolute ? (
        <StyledLink href={routerPage}>
          <StyledButton styles={styles}>{content}</StyledButton>
        </StyledLink>
      ) : (
        <Link href={routerPage}>
          <StyledButton styles={styles}>{content}</StyledButton>
        </Link>
      )}
    </>
  );
};

const StyledLink = styled(Link)`
  position: absolute;
  top: 80vh;

  @media (max-width: 600px) {
    top: 45vh;
  }
`;

const StyledButton = styled.button<{
  styles: LinkedButtonStyles;
}>`
  width: ${(props) => props.styles.width};
  height: ${(props) => props.styles.height};
  font-size: ${(props) => props.styles.fontSize};
  background-color: ${(props) => props.styles.backgroundColor};
  padding: ${(props) => props.styles.padding};
  color: ${(props) => props.styles.color};
  font-weight: ${(props) => props.styles.fontWeight};
  margin: ${(props) => props.styles.margin};
  border-radius: ${(props) => props.styles.borderRadius};
  position: ${(props) => props.styles.position};
  top: ${(props) => props.styles.top};
  right: ${(props) => props.styles.right};
  left: ${(props) => props.styles.left};
  bottom: ${(props) => props.styles.bottom};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LinkedButton;
