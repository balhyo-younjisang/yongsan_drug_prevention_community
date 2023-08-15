import CommunityHeader from "@/components/organisms/Community/Header";
import CommunityMain from "@/components/organisms/Community/Main";
import CommunityWriteButton from "@/components/organisms/Community/WriteButton";
import { fetchDataBase } from "@/interface/BaseFetchData";

const HeaderTitleStyles = {
  fontSize: "4rem",
  fontWeight: "bold",
  color: "#5698ab",
  margin: "30px",
};

const HeaderSubTitleStyles = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#5698ab",
};

const WriteButtonStyles = {
  width: "3.2rem",
  height: "3.2rem",
  fontSize: "1.6rem",
  fontWeight: "bold",
  backgroundColor: "#0E1382",
  padding: "10px",
  color: "white",
  margin: "0px",
  borderRadius: "50%",
  position: "fixed",
  top: "90vh",
  right: "4rem",
};

interface BaseCommunityTemplate {
  responseData: fetchDataBase;
}

const CommunityHomeTemplate = ({ responseData }: BaseCommunityTemplate) => {
  if (!responseData.loading) console.log(responseData.payload);
  return (
    <>
      <CommunityHeader
        titleStyles={HeaderTitleStyles}
        subTitleStyles={HeaderSubTitleStyles}
      />
      {!responseData.loading && <CommunityMain posts={responseData.payload} />}
      <CommunityWriteButton styles={WriteButtonStyles} />
    </>
  );
};

export default CommunityHomeTemplate;
