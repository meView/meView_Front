import styled from 'styled-components'
import { useRecoilValue } from "recoil";
import { pageState } from '../../recoil/QuestionAtom';

const QuestionForm = styled.div`
  color: var(--Gray-02);
  width: 92%;
  margin-bottom: 60px;
  margin-left: 20px;
  margin-right: 20px;
  .question-mark {
    width: 36px;
    height: 36px;
    margin-bottom: 8px;
  }
  .question-text {
    font-size: var(--headline-06);
    line-height: 34px;
    font-weight: bold;
  }
  .question-text2 {
    font-size: var(--headline-06);
    line-height: 34px;
    font-weight: bold;
    margin-bottom: -34px;
  }
  .question-description {
    line-height: 26px;
    font-size: var(--body-02);
    color: var(--Medium-Emphasis);
    margin-bottom: -26px;
  }
`
function QuestionText (props) {
  const page = useRecoilValue(pageState);
  return (
    <QuestionForm>
      {(page !== 4) && <img className="question-mark" alt="question mark" src="/image/question-mark.svg"/>}
      <div className="question-text">
        <p>{props.text}</p>   
      </div>
      {props.text2 &&
      <div className="question-text2">
        <p>{props.text2}</p>  
      </div>}
      {props.description &&
      <div className="question-description">
        <p>{props.description}</p>
      </div>}
    </QuestionForm>
  )
}

export default QuestionText;