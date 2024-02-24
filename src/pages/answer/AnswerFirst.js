import { useRecoilState } from 'recoil';
import styled from 'styled-components'
import NavigateBtn from '../../components/answer/navigateBtn';
import { modalState } from '../../recoil/AnswerAtom';
import WarningModal from '../../components/answer/WarningModal';

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
const Bottom = styled.div`
  height: 88px;
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 500px;
`

/* 배경 블러 처리 */
const BlurContainer = styled.div`
height: 100vh;
position: fixed;
top: 0;
left: 50%;
transform: translate(-50%, 0);
width: 100%;
max-width: 500px;
backdrop-filter: blur(8px);
background-color: rgba(0, 0, 0, 0.48);
display: ${({ $show }) => $show === 'true' ? 'block' : 'none'};
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 500px; 
`

function AnswerFirst(props) {
  const [modal, setModal] = useRecoilState(modalState);

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
          <p className='title-text'>간단한 자기소개 부탁해요!</p>
          <p className='title-text'>본인을 나타낼 닉네임을 적어주세요</p>
        </div>
      </Top>
      <Bottom>
        <NavigateBtn/>
      </Bottom>
      <BlurContainer $show={modal.toString()}/>
      {
        modal && 
        <Modal>
          <WarningModal 
            title="정말로 나가시겠어요?"
            description="질문지 작성 중간에 나가시면 작성한 내용은 사라져요"
            no="계속 할게요"
            yes="네"
            onClose={() => setModal(false)}
            modalstate={modalState}
            />
        </Modal>
      }
    </>
  )
}

export default AnswerFirst;