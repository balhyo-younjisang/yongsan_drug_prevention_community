// import logo from "/public/images/logo.svg";
import logo from "/public/images/logo.png";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <StyledImg src={logo} alt="SD COMMUNITY LOGO" priority={true} />
    </Link>
  );
};

const StyledImg = styled(Image)`
  width: 20vw;
  height: auto;

  @media (max-width: 600px) {
    width: 30vw;
    height: 10vh;
  }
`;

export default Logo;
