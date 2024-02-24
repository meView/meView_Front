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
`
const Bottom = styled.div`
  height: 88px;
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 500px;
`

function AnswerSecond(props) {
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
          <p className='title-text'>민지님을 대표하는 강점을 선택해주세요</p>
          <p className='title-description'>3개까지 선택할 수 있어요</p>
        </div>
      </Top>
      <Bottom>
        <NavigateBtn/>
      </Bottom>
    </>
  )
}

export default AnswerSecond;