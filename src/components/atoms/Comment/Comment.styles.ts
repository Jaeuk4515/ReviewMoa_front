import styled from "styled-components";
import { ReactComponent as Comment } from "../../../assets/icons/comment.svg";

const CommentArea = styled.div`
  display: flex;
  gap: .4rem;
  align-items: center;
`

const CommentIcon = styled(Comment)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.commentIconColor};

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 20px;
    height: 20px;
  };
`

const CommentNum = styled.span`
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 14px;
  };
`

export { CommentArea, CommentIcon, CommentNum }