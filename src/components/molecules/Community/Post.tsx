import styled from "styled-components";

import Link from "next/link";
import { BasePostData } from "@/interface/BasePostData";

import viewsIcon from "/public/icons/views.svg";
import commentIcon from "/public/icons/comments.svg";
import Image from "next/image";
import { query } from "firebase/firestore";

const Post = ({ postData }: { postData: BasePostData }) => {
  return (
    <StyledLink
      href={{ pathname: `/community/post/[id]`, query: { id: postData.docId } }}
    >
      <StyledTitle>{postData.title}</StyledTitle>
      <StyledInfo>
        <StyledItem>
          <Image src={viewsIcon} alt="views" />
          <StyledContent>{postData.views}</StyledContent>
        </StyledItem>
        <span>•</span>
        <StyledItem>
          <Image src={commentIcon} alt="comments" />
          <StyledContent>{postData.comment.length}</StyledContent>
        </StyledItem>
      </StyledInfo>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
  letter-spacing: 0.05em;
`;

const StyledTitle = styled.span`
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 60%;
`;

const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40%;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const StyledItem = styled.span`
  display: flex;
  align-items: center;
  margin: 0px 10px;
`;

const StyledContent = styled.span`
  margin: 0px 5px;
`;

export default Post;
