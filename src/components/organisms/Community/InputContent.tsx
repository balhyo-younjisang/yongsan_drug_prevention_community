import Textarea from "@/components/atoms/Textarea";

import { BaseInputContentStyles } from "@/interface/BaseInputContentStyles";

interface BaseTextarea {
  content: string;
  onChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement>;
  styles?: BaseInputContentStyles;
}

const InputContent = ({ content, onChangeHandler, styles }: BaseTextarea) => {
  return (
    <Textarea
      content={content}
      onChangeHandler={onChangeHandler}
      styles={styles}
      placeholder="내용을 입력해주세요"
    />
  );
};

export default InputContent;
