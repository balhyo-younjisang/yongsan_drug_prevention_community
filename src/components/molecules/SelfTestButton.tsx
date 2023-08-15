import LinkedButton from "../atoms/LinkedButton";

const SelfTestButton = () => {
  const styles = {
    fontSize: "1.2rem",
    backgroundColor: "#D71313",
    padding: "20px",
    color: "#EEEDED",
    fontWeight: "bold",
    margin: "10px",
  };

  return (
    <LinkedButton
      isAbsolute={true}
      content="마약중독 자가진단 하러가기"
      routerPage="/selftest"
      styles={styles}
    />
  );
};

export default SelfTestButton;
