import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  question_idState,
  nicknameState,
} from "../../../recoil/ProjectListAtom";

const StyledBox = styled.div`
  background-color: var(--Gray-14);
  border-radius: 12px;
  padding: 20px;
  .bodycontent {
    font-size: 16px;
    color: var(--Gray-05);
    padding: 16px 0 0;
  }
  @media (max-width: 768px) {
    .bodycontent {
      font-size: 13.5px;
    }
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--Gray-13);
  position: relative;

  cursor: pointer;

  .projectname {
    font-size: 20px;
    font-weight: bold;
    color: var(--Gray-01);
    padding-right: 8px;
  }
  .nickname {
    font-size: 18px;
    font-weight: 700;
    color: var(--Gray-08);
    padding-right: 8px;
  }
  .arrow {
    background-image: url("/image/rightarrow.svg");
    position: absolute;
    right: 0;
    width: 28px;
    height: 28px;
  }

  // 호버시 글씨색 노란색으로
  &:hover {
    .projectname {
      color: var(--primary);
    }
    .nickname {
      color: rgba(255, 243, 116, 0.6);
    }
    .arrow {
      background-image: url("/image/rightarrow_hover.svg");
      width: 28px;
      height: 28px;
    }
  }
`;

function ReviewCard(props) {
  const navigate = useNavigate();
  const [, setQuestionId] = useRecoilState(question_idState);
  const [, setNickName] = useRecoilState(nicknameState);

  const handleNickNameClick = () => {
    setQuestionId(props.question_id);
    setNickName(props.responder);
    navigate("/meview/nicknamereview");
  };

  return (
    <StyledBox>
      <Header onClick={handleNickNameClick}>
        <p className="projectname">
          {props.title.length > 10
            ? `${props.title.substring(0, 10)}...`
            : props.title}
        </p>

        <p className="nickname">•</p>
        <p className="nickname">{props.responder}</p>
        <p className="arrow"></p>
      </Header>
      <p className="bodycontent">{props.description}</p>
    </StyledBox>
  );
}

export default ReviewCard;
