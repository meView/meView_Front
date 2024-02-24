import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Top = styled.div`
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
    font-size: var(--headline-06);
    font-weight: var(--font-weight-bold);
  }
  .title-text {
    line-height: 34px;
  }
`

const Body = styled.div`
  margin: 0 20px 16px 20px;
`

const Bottom = styled.div`
  position: fixed;
  bottom: 24px;
  margin: 24px 20px 0 20px;
  .button-img {
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  .button {
    width: 100%;
  }
`

function AnswerFinish(props) {
  const navigate = useNavigate();

  return (
    <>
      <Top>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${props.progress}%` }}
          ></div>
        </div>
        <div className='title'>
          <p className='title-text'>답변이 완성됐어요!</p>
          <p className='title-text'>소중한 피드백 잘 전달할게요!</p>
        </div>
      </Top>
      <Body>
      </Body>
      <Bottom>
        <button className='button-img' onClick={()=>{
          navigate('/')
        }}>
          <img className='button' alt="answer finish" src="./image/answer-finish.svg"/>
        </button>
      </Bottom>
    </>
  )
}

export default AnswerFinish;