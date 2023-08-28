import styled from "styled-components";

import { BaseInputTitleStyles } from "@/interface/BaseInputTItleStyles";

interface InputProps {
  value: string;
  placeholder: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  styles?: BaseInputTitleStyles;
}

const Input = ({ value, onChangeHandler, placeholder, styles }: InputProps) => {
  return (
    <StyledInput
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
      $styles={styles}
    />
  );
};

const StyledInput = styled.input<{ $styles?: BaseInputTitleStyles }>`
  width: ${(props) => props.$styles?.width || "20vw"};
  height: auto;
  border-bottom: 1px solid black;
  font-size: ${(props) => props.$styles?.fontSize || "16px"};
  padding: 5px;
  text-align: center;
  margin: ${(props) => props.$styles?.margin};

  @media (max-width: 600px) {
    width: 50vw;
    font-size: 10px;
    padding: 10px;
  }
`;

export default Input;
