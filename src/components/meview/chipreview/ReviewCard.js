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
  // 왜 모바일에서 이 bodycontent만 글씨 크기가 다르게 나올까요 ㅠㅠㅠㅠㅠ 임시로 해결했지만 원인을 모르겠어요
  @media (max-width: 768px) {
    .bodycontent {
      font-size: 13.5px;
    }
  }
`;
const Header = styled.div`
  display: flex;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--Gray-13);
  position: relative;
  align-items: center;
  cursor: pointer;
  .nickname {
    font-size: 18px;
    font-weight: 700;
    color: var(--Gray-08);
    padding-right: 8px;
  }
  .projectname {
    font-size: 20px;
    font-weight: bold;
    color: var(--Gray-01);
    padding-right: 8px;
  }
  .arrow {
    position: absolute;
    right: 0;
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
        <p className="projectname">{props.title}</p>
        <p className="nickname">•</p>
        <p className="nickname">{props.responder}</p>
        <img className="arrow" src="/image/rightarrow.svg" alt="arrow" />
      </Header>
      <p className="bodycontent">{props.description}</p>
    </StyledBox>
  );
}

export default ReviewCard;
