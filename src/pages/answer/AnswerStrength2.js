import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import NavigateBtn from "../../components/answer/navigateBtn";
import { answerState, questionState } from "../../recoil/AnswerAtom";
import StrengthAnswerBox from "../../components/answer/StrengthAnswerBox";

const Container = styled.div`
  height: 100vh;
  background-color: var(--Gray-15);
  position: relative;
`;
const Top = styled.div`
  width: 100%;
  max-width: 500px;
  .progress {
    height: 8px;
    background-color: var(--primary);
  }
  .progress-bar {
    width: 100%;
    background-color: var(--primary-800);
    margin-bottom: 48px;
  }

  .strength-box {
    margin: 48px 20px 0 20px;
  }
  .name {
    font-size: var(--subtitle-02);
    color: var(--Gray-02);
    line-height: 24px;
    font-weight: var(--font-weight-bold);
  }
  .select-chips {
    margin-top: 12px;
    margin-right: -12px;
    cursor: pointer;
  }
  .chip-image {
    margin-right: 12px;
    height: 44px;
  }
  .divider {
    margin-top: 20px;
    margin-bottom: 40px;
    width: 100%;
  }
`;

const Body = styled.div`
  background-color: var(--Gray-15);
  padding-bottom: 90px;
`

const Bottom = styled.div`
  height: 88px;
  width: 100%;
  max-width: 500px;
  background-color: var(--Gray-15);
  position: ${({$count}) => ($count === 1 ? 'absolute' : 'relative')};
  bottom: 0;
`;

function AnswerStrength2(props) {
  const [answer, setAnswer] = useRecoilState(answerState);
  const question = useRecoilValue(questionState);
  const [count, setCount] = useState(answer.strength.length);

  /* 답변 입력 X -> 다음 버튼 비활성화 */
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    const chips = answer.strength;
    for (let i = 0; i < chips.length; i++) {
      if (
        answer.strengthReview[chips[i]] === "" ||
        answer.strengthReview[chips[i]] === undefined
      ) {
        setIsDisabled(true);
        break;
      } else if (answer.strengthReview[chips[i]] !== "") {
        setIsDisabled(false);
      }
    }
    setCount(answer.strength.length);
  }, [answer.strengthReview, answer.strength]);

  /* 칩 삭제 */
  const deleteChip = (chip) => {
    const update = [...answer.strength];
    if (answer.strength.length > 1) {
      let updateReview = { ...answer.strengthReview };
      delete updateReview[chip];
      setAnswer({
        ...answer,
        strength: [...update.filter((item) => item !== chip)],
        strengthReview: updateReview,
      });
    }
  };

  return (
    <Container>
      <Top>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${props.progress}%` }}
          ></div>
        </div>
        <div className="strength-box">
          <p className="name">내가 고른 {question.user_id}님의 대표 강점</p>
          <div className="select-chips">
            {answer.strength.map((chip, i) => {
              return (
                <img
                  className="chip-image"
                  key={i}
                  alt="chip"
                  src={`./image/${chip}-clicked.svg`}
                  onClick={() => {
                    /* 고른 칩 삭제 (2개 이상일 경우만 가능) */
                    deleteChip(chip);
                  }}
                />
              );
            })}
          </div>
          <img
            className="divider"
            alt="divider"
            src="./image/divider-small.svg"
          />
        </div>
      </Top>
      <Body>
        {answer.strength.map((chip, i) => {
          return <StrengthAnswerBox key={i} chip={chip} />;
        })}
      </Body>
      <Bottom $count={count}>
        <NavigateBtn isNextDisabled={isDisabled} />
      </Bottom>
    </Container>
  );
}

export default AnswerStrength2;
