import styled from "styled-components";

interface ButtonProps {
  value: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ value, onClickHandler }: ButtonProps) => {
  return <StyledButton onClick={onClickHandler}>{value}</StyledButton>;
};

const StyledButton = styled.button`
  font-size: 17px;
  background-color: #0d1282;
  padding: 5px;
  color: white;
  border-radius: 3px;

  @media (max-width: 600px) {
    font-size: 8px;
    padding: 0px 20px;
  }
`;

export default Button;
