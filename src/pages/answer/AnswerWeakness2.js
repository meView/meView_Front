import styled from 'styled-components'
import NavigateBtn from '../../components/answer/navigateBtn';

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
`
const Bottom = styled.div`
  height: 88px;
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 500px;
`

function AnswerWeakness2(props) {
  return (
    <>
      <Top>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${props.progress}%` }}
          ></div>
        </div>
      </Top>
      <Bottom>
        <NavigateBtn/>
      </Bottom>
    </>
  )
}

export default AnswerWeakness2;