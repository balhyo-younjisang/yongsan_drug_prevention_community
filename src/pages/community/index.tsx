import withHead from "@/components/hoc/withHead";
import CommunityHomeTemplate from "@/components/template/Community";

const CommunityHome = () => {
  return <CommunityHomeTemplate />;
};

export default withHead(
  CommunityHome,
  "SD Community",
  "청소년 마약 근절을 위한 커뮤니티"
);
