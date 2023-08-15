import styled from "styled-components";

import { BaseInputContentStyles } from "@/interface/BaseInputContentStyles";

interface BaseTextarea {
  content: string;
  onChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement>;
  styles?: BaseInputContentStyles;
  placeholder?: string;
}

const Textarea = ({
  content,
  onChangeHandler,
  styles,
  placeholder,
}: BaseTextarea) => {
  return (
    <StyledTextarea
      value={content}
      onChange={onChangeHandler}
      $styles={styles}
      placeholder={placeholder}
    />
  );
};

const StyledTextarea = styled.textarea<{ $styles?: BaseInputContentStyles }>`
  resize: none;

  font-size: ${(props) => props.$styles?.fontSize};
  font-weight: ${(props) => props.$styles?.fontWeight};
  width: ${(props) => props.$styles?.width};
  height: ${(props) => props.$styles?.height};
  margin: ${(props) => props.$styles?.margin};

  &::placeholder {
    text-align: center;
  }
`;

export default Textarea;
