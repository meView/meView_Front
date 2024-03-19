import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import InformCardBottom from "util/InformCardBottom";
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
  top: 52%;
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
      max-width: 500px;
      //width: 100%;
      margin: 0 auto;
    }
  }
`;

const Chips = styled.div`
  position: absolute; // Container 내에서 절대 위치 사용
  width: 100%;
  cursor: pointer;

  img {
    position: absolute;
    border-radius: 4px;
    height: 44px;
    -webkit-backdrop-filter: blur(6px);
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
    &.judgment {
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
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 500px;
`;

function AnswerWeakness(props) {
  const [answer, setAnswer] = useRecoilState(answerState);
  const question = useRecoilValue(questionState);
  const [count, setCount] = useState(answer.weakness.length);

  /* 칩 선택 상태 확인 */
  const [comm, setComm] = useState(
    answer.weakness.includes("communication") ? "" : "un"
  );
  const [ob, setOb] = useState(
    answer.weakness.includes("observation") ? "" : "un"
  );
  const [fr, setFr] = useState(
    answer.weakness.includes("friendliness") ? "" : "un"
  );
  const [lis, setLis] = useState(
    answer.weakness.includes("listening") ? "" : "un"
  );
  const [exe, setExe] = useState(
    answer.weakness.includes("execution") ? "" : "un"
  );
  const [jud, setJud] = useState(
    answer.weakness.includes("judgment") ? "" : "un"
  );
  const [per, setPer] = useState(
    answer.weakness.includes("perseverance") ? "" : "un"
  );
  /* 선택 칩 개수 확인 */
  useEffect(() => {
    setCount(answer.weakness.length);
  }, [comm, ob, fr, lis, exe, jud, per]);

  /* 칩 선택 or 취소 */
  const clickChip = (chip) => {
    let update = [...answer.weakness];
    if (update.includes(chip)) {
      // 칩 선택 취소
      setAnswer({
        ...answer,
        weakness: [...update.filter((item) => item !== chip)],
      });
    } else if (update.includes(chip) === false) {
      if (count < 3) {
        update.push(chip);
        setAnswer({
          ...answer,
          weakness: update,
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
          <p className="title-text">{question.user_name}님의 아쉬운 점이 있으신가요?</p>
          <p className="title-description">3개까지 선택할 수 있어요</p>
        </div>
      </Top>
      <Body>
        <div className="image-box">
          <img
            className="maincharacter"
            src="/image/character_weakness.png"
            alt="character_weakness"
          />
          <Chips>
            <img
              className="communication"
              src={`/image/communication-${comm}clicked.png`}
              alt="communication"
              onClick={() => {
                clickChip("communication");
                setComm(comm === "un" && count < 3 ? "" : "un");
              }}
            />
            <img
              className="executive"
              src={`/image/execution-${exe}clicked.png`}
              alt="executive"
              onClick={() => {
                clickChip("execution");
                setExe(exe === "un" && count < 3 ? "" : "un");
              }}
            />
            <img
              className="friendliness"
              src={`/image/friendliness-${fr}clicked.png`}
              alt="friendliness"
              onClick={() => {
                clickChip("friendliness");
                setFr(fr === "un" && count < 3 ? "" : "un");
              }}
            />
            <img
              className="judgment"
              src={`/image/judgment-${jud}clicked.png`}
              alt="judgment"
              onClick={() => {
                clickChip("judgment");
                setJud(jud === "un" && count < 3 ? "" : "un");
              }}
            />
            <img
              className="listening"
              src={`/image/listening-${lis}clicked.png`}
              alt="listening"
              onClick={() => {
                clickChip("listening");
                setLis(lis === "un" && count < 3 ? "" : "un");
              }}
            />
            <img
              className="observation"
              src={`/image/observation-${ob}clicked.png`}
              alt="observation"
              onClick={() => {
                clickChip("observation");
                setOb(ob === "un" && count < 3 ? "" : "un");
              }}
            />
            <img
              className="perseverance"
              src={`/image/perseverance-${per}clicked.png`}
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
        <InformCardBottom mainMessage={"극복하면 좋을 아쉬운 점을 골라주세요!"}/>
        <NavigateBtn isNextDisabled={answer.weakness.length === 0} />
      </Bottom>
    </Container>
  );
}

export default AnswerWeakness;
