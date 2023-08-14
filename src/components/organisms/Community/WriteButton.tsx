import LinkedButton from "@/components/atoms/LinkedButton";
import { LinkedButtonStyles } from "@/interface/LinkedButtonStylesProps";

interface Props {
  styles: LinkedButtonStyles;
}

const CommunityWriteButton = ({ styles }: Props) => {
  return (
    <LinkedButton content="+" routerPage="/community/write" styles={styles} />
  );
};

export default CommunityWriteButton;
