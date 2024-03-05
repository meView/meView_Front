import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { nicknameState } from "recoil/ProjectListAtom";
import ProjectReviewCard from "./ProjectReviewCard";

const Container = styled.div`
  padding: 32px 20px;
  border-top: 8px solid var(--Gray-14);
`;
const NickName = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--Gray-01);
  padding-left: 8px;
  display: flex;
  position: relative;
  align-items: center;
  padding: 0 0 6px 0;
  cursor: pointer;
  .arrow {
    background-image: url("/image/rightarrow.svg");
    width: 24px;
    height: 24px;
    position: absolute;
    right: 0;
    cursor: pointer;
  }
  &:hover {
    .nickname {
      color: var(--primary);
    }
    .arrow {
      background-image: url("/image/rightarrow_hover2.svg");
      width: 24px;
      height: 24px;
    }
  }
`;

function ProjectIDCard({ nickname, reviews }) {
  const [, setNicknameState] = useRecoilState(nicknameState);

  const navigate = useNavigate();
  const handleNickNameClick = () => {
    setNicknameState(nickname);
    console.log("nickname:", nickname);
    navigate("/meview/nicknamereview");
  };

  return (
    <Container>
      <NickName onClick={handleNickNameClick}>
        <span className="nickname">{nickname}</span>
        <span className="arrow"></span>
      </NickName>
      {reviews.map((review, index) => (
        <ProjectReviewCard
          key={index}
          chipName={review.chip_name}
          reviewDescription={review.review_description}
        />
      ))}
    </Container>
  );
}

export default ProjectIDCard;
