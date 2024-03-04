import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import NavigateBtn from "../../components/answer/navigateBtn";
import { answerState, questionState } from "../../recoil/AnswerAtom";

const Container = styled.div`
  background-color: var(--Gray-15);
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
  .title {
    margin: 48px 20px 16px 20px;
    color: var(--Gray-02);
  }
  .title-text {
    line-height: 34px;
    font-size: var(--headline-06);
    font-weight: var(--font-weight-bold);
    margin-bottom: 4px;
  }
  .title-description {
    font-size: var(--body-01);
    font-weight: var(--font-weight-regular);
    line-height: 28px;
  }
`;

const Body = styled.div`
  width: 100%;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  .image-box {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    position: relative;

    .maincharacter {
      margin: 0 auto;
    }
  }
`;

const Chips = styled.div`
  position: absolute;
  width: 100%;
  cursor: pointer;

  img {
    position: absolute;
    backdrop-filter: blur(6px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    &.communication {
      top: 236px;
      left: 13.6%;
      opacity: 1;
    }
    &.executive {
      top: 228px;
      left: 56%;
    }
    &.friendliness {
      top: 296px;
      left: 20%;
    }
    &.judgement {
      top: 60px;
      left: 48%;
    }
    &.listening {
      top: 126px;
      left: 58%;
    }
    &.observation {
      top: 108px;
      left: 12%;
    }
    &.perseverance {
      top: 362px;
      left: 52%;
    }
  }
`;

const Bottom = styled.div`
  height: 88px;
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 500px;
`;

function AnswerStrength(props) {
  const [answer, setAnswer] = useRecoilState(answerState);
  const question = useRecoilValue(questionState);

  /* 칩 선택 상태 확인 */
  const [comm, setComm] = useState(
    answer.strength.includes("communication") ? "" : "un"
  );
  const [ob, setOb] = useState(
    answer.strength.includes("observation") ? "" : "un"
  );
  const [fr, setFr] = useState(
    answer.strength.includes("friendliness") ? "" : "un"
  );
  const [lis, setLis] = useState(
    answer.strength.includes("listening") ? "" : "un"
  );
  const [exe, setExe] = useState(
    answer.strength.includes("execution") ? "" : "un"
  );
  const [jud, setJud] = useState(
    answer.strength.includes("judgement") ? "" : "un"
  );
  const [per, setPer] = useState(
    answer.strength.includes("perseverance") ? "" : "un"
  );
  /* 선택 칩 개수 확인 */
  let count = 0;
  useEffect(() => {
    count = answer.strength.length;
  }, [comm, ob, fr, lis, exe, jud, per]);

  /* 칩 선택 or 취소 */
  const clickChip = (chip) => {
    let update = [...answer.strength];
    if (update.includes(chip)) {
      // 칩 선택 취소
      setAnswer({
        ...answer,
        strength: [...update.filter((item) => item !== chip)],
      });
    } else if (update.includes(chip) === false) {
      if (answer.strength.length < 3) {
        update.push(chip);
        setAnswer({
          ...answer,
          strength: update,
        });
      }
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
        <div className="title">
          <p className="title-text">
            {question.user_id}님을 대표하는 강점을 선택해주세요
          </p>
          <p className="title-description">3개까지 선택할 수 있어요</p>
        </div>
      </Top>
      <Body>
        <div className="image-box">
          <object
            className="maincharacter"
            data="/image/character_strength.svg"
            aria-label="character_strength"
          />
          <Chips>
            <img
              className="communication"
              src={`/image/communication-${comm}clicked.svg`}
              alt="communication"
              onClick={() => {
                clickChip("communication");
                setComm(comm === "un" && count < 3 ? "" : "un");
              }}
            />
            <img
              className="executive"
              src={`/image/execution-${exe}clicked.svg`}
              alt="executive"
              onClick={() => {
                clickChip("execution");
                setExe(exe === "un" && count < 3 ? "" : "un");
              }}
            />
            <img
              className="friendliness"
              src={`/image/friendliness-${fr}clicked.svg`}
              alt="friendliness"
              onClick={() => {
                clickChip("friendliness");
                setFr(fr === "un" && count < 3 ? "" : "un");
              }}
            />
            <img
              className="judgement"
              src={`/image/judgement-${jud}clicked.svg`}
              alt="judegment"
              onClick={() => {
                clickChip("judgement");
                setJud(jud === "un" && count < 3 ? "" : "un");
              }}
            />
            <img
              className="listening"
              src={`/image/listening-${lis}clicked.svg`}
              alt="listening"
              onClick={() => {
                clickChip("listening");
                setLis(lis === "un" && count < 3 ? "" : "un");
              }}
            />
            <img
              className="observation"
              src={`/image/observation-${ob}clicked.svg`}
              alt="observation"
              onClick={() => {
                clickChip("observation");
                setOb(ob === "un" && count < 3 ? "" : "un");
              }}
            />
            <img
              className="perseverance"
              src={`/image/perseverance-${per}clicked.svg`}
              alt="perseverance"
              onClick={() => {
                clickChip("perseverance");
                setPer(per === "un" && count < 3 ? "" : "un");
              }}
            />
          </Chips>
        </div>
      </Body>
      <Bottom>
        <NavigateBtn
          count={count}
          isNextDisabled={answer.strength.length === 0}
        />
      </Bottom>
    </Container>
  );
}

export default AnswerStrength;
