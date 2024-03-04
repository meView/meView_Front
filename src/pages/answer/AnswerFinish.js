import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import WideButton from 'util/WideButton'

const Container = styled.div`
  width: 100%;
  height: var(--vh);
  max-width: 500px;
`

const Background = styled.div`
  width: 100%;
  max-width: 500px;
  height: var(--vh);
  position: relative; 
  overflow: hidden;

  .background {
    position: absolute; 
    min-width: 100%;
    min-height: 100vh;
    z-index: 0;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    object-fit: cover;
  }
`

const Top = styled.div`
  position: absolute;
  width: 100%;
  max-width: 500px;
  top: 0;
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

  width: 100%;
  max-width: 500px;
  .button {
    width: 100%;
  }
`

function AnswerFinish(props) {
  const navigate = useNavigate();

  return (
    <Container>
      <Background>
        <object className="background" data="./image/answer-finish-background.svg" aria-label='answer-finish'/>
      </Background>
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
        <WideButton className="button" text="나도 리뷰 받아보기" onClick={()=>{
          navigate('/')
        }}/>
      </Bottom>
    </Container>
  )
}

export default AnswerFinish;