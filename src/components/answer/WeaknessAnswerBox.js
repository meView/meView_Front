import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components'
import { answerState } from '../../recoil/AnswerAtom';

const Container = styled.div`
  width: 100%;
  margin-bottom: 48px;
  background-color: var(--Gray-15);
  
  .warning {
    margin-top: 20px;
    margin-left: 20px;
    height: 52px;
  }
  .answer {
    position: relative;
    width: 100%;
    height: 296px;
  }
  .count {
    position: absolute;
    bottom: 16px;
    right: 36px;
    font-size: var(--button-03);
    font-weight: var(--font-weight-bold);
    color: #6F6F6F;
  }
  .title-box {
    margin: 0 20px 16px 20px;
  }
  .title {
    font-weight: var(--font-weight-bold);
    color: var(--Gray-02);
    font-size: var(--subtitle-02);
    line-height: 24px;
  }
  .desc {
    font-size: var(--body-02);
    color: var(--Gray-09);
    line-height: 26px;
  }
`
const TextArea = styled.textarea`
  &::-webkit-scrollbar {
    width: 7px; 
  }
  &::-webkit-scrollbar-thumb {
    background: var(--Gray-12);
    border-radius: 7px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--Gray-11);
  }

  outline: none;
  border: none;
  height: 296px;
  box-sizing: border-box;
  position: absolute;
  left: 20px;
  right: 20px;
  background-color: var(--Gray-14);
  font-size: var(--body-02);
  font-weight: var(--font-weight-regular);
  color: var(--Gray-02);
  padding: 16px;
  line-height: 28px;
  border-radius: 12px;
  resize: none;

  ${({ $textState }) =>
    $textState === "error" &&
    `
    outline: 1px solid var(--Error);
  `}
  &:focus {
    ${({ $textState }) =>
    $textState === "writing" &&
    `
    outline: 1px solid var(--primary);
  `}
  }
`;

const TextLength = styled.span`
  color: ${({ $textState, $isFocused }) =>
    $textState === "error"
      ? "var(--Error)"
      : $textState === "writing" && $isFocused
      ? "var(--primary)"
      : "white"};
`;

function WeaknessAnswerBox(props) {

  /* 글자 수 세기 + 입력 값 저장 */
  const [answer, setAnswer] = useRecoilState(answerState);
  const [inputText, setInputText] = useState(answer.weaknessReview[props.chip]|| "");
  
  useEffect(()=>{
    setInputText(answer.weaknessReview[props.chip]);
  }, [props.chip])

  const handleChange = (e) => {
    if (e.target.value.length <= 500) {
      setInputText(e.target.value);
      setAnswer({
        ...answer,
        weaknessReview: {
          ...answer.weaknessReview,
          [props.chip]: e.target.value
        },
      });
    }
  };

  /* textarea focus 상태 아닐 경우 */
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  
  const getTextState = (length) => {
    if (length >= 500) return "error";
    if (length > 0 && length < 500) return "writing";
    return "default";
  };

  const textState = getTextState(inputText?.length || 0);

  /* 선택 칩 */
  const chip_dictionary = {
    'communication': '소통능력', 
    'observation': '관찰력',
    'judgement': '판단력',
    'execution': '실행력',
    'friendliness': '친화력',
    'listening': '경청능력',
    'perseverance': '끈기력',
  }

  return (
    <Container>
      <div className='title-box'>
        <p className='title'>{chip_dictionary[props.chip]}을 고른 이유가 궁금해요</p>
        <p className='desc'>구체적인 사례를 적어주시면 더 좋아요</p>
      </div>
      <div className="answer">
        <TextArea
          name="review"
          maxLength="500"
          value={inputText}
          placeholder="민지님과 OO 프로젝트를 진행할 때 oo아이디어에 관해 팀원의 의견을 수렴하는 과정에서 이야기를 경청하는 모습이 인상 깊었어요 :)"
          onChange={handleChange}
          $textState={textState}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div className="count">
          <TextLength $textState={textState} $isFocused={isFocused}>{
            inputText?.length || 0
          }/</TextLength>
          500자
        </div>
      </div>
      {
        textState === "error" 
        ? <div className="warning">
            <img alt="warning message" src="./image/warning-500msg.svg"/>
          </div>
        : null
      }
    </Container>
  );
}

export default WeaknessAnswerBox;