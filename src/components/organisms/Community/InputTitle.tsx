import Input from "@/components/atoms/Input";

import { BaseInputTitleStyles } from "@/interface/BaseInputTItleStyles";

interface InputTitleBase {
  title: string;
  onChangeHandler: React.ChangeEventHandler;
  styles: BaseInputTitleStyles;
}

const InputTitle = ({ title, onChangeHandler, styles }: InputTitleBase) => {
  return (
    <Input
      value={title}
      placeholder="제목을 입력해주세요"
      onChangeHandler={onChangeHandler}
      styles={styles}
    />
  );
};

export default InputTitle;
