import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components'
import { backModalState, bottomSheetState, deleteModalState, modifiedToastState, questionFormState, questionIdState } from '../../../recoil/HomeAtom';
import Toast from '../../../util/Toast';
import WarningModal from '../../../util/WarningModal';
import NavigateBtn from './NavigateBtn';
import Segment2Btn from './Segment2Btn';
import Segment3Btn from './Segment3Btn';

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: var(--Gray-15);
  position: fixed;
  top: 120px;
  height: calc(100vh - 120px);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  .toast {
    position: fixed;
    bottom: 104px;
    max-width: 500px;
    width: 100%;
  }
`

const Header = styled.div`
  position: relative;
  height: 36px;

  .handler {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const BodyContent = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  
  .title {
    margin-top: 24px;
    margin-bottom: 32px;
  }
  .title-box {
    display: flex;
    margin-bottom: 8px;
    justify-content: space-between;
  }
  .delete-button {
    color: var(--Error);
    font-size: var(--button-01);
    line-height: 34px;
    font-weight: var(--font-weight-bold);
    white-space: nowrap;
  }
  .question-title {
    font-size: var(--headline-06);
    font-weight: var(--font-weight-bold);
    line-height: 34px;
  }
  .question-content {
    margin-bottom: 28px;
    
  }
  .subtitle {
    font-size: var(--subtitle-01);
    font-weight: var(--font-weight-bold);
    line-height: 28px;
    margin-bottom: 12px;
  }
  .text-field {
    max-width: 500px;
    right: 20px;
    width: 100vw;
    height: 64px;
    position: relative;
  }
  .count {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    margin-right: 20px;
    right: 15px;
    color: #8B8B8B;
  }
  .warning {
    margin-top: 12px;
  }
`

const TextArea = styled.textarea`
  outline: none;
  border: none;
  height: 64px;
  box-sizing: border-box;
  position: absolute;
  left: 20px;
  right: 20px;
  background-color: var(--Gray-14);
  font-size: var(--button-02);
  font-weight: var(--font-weight-bold);
  color: var(--Gray-02);
  padding: 20px 0 20px 16px;
  line-height: 24px;
  border-radius: 12px;
  resize: none;

  &::placeholder {
    color: var(--Gray-02);
  }
  ${({ $textState }) =>
  $textState === "error" &&
  `
    outline: 1px solid var(--Error);
  `}
  &:focus {
    ${({ $textState }) =>
    $textState === "writing" &&
    `
    outline: 1px solid var(--primary); // 글자 수가 1~19일 때
  `}
}`;

const TextLength = styled.span`
  color: ${({ $textState, $isFocused }) =>
    $textState === "error"
      ? "var(--Error)"
      : $textState === "writing" && $isFocused
      ? "var(--primary)"
      : "white"};
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
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

function BottomSheet() {

  const [bottomsheet, setBottomsheet] = useRecoilState(bottomSheetState);

  /* question_id와 일치하는 데이터 가져오기 */
  const id = useRecoilValue(questionIdState);
  const [questions, setQuestions] = useRecoilState(questionFormState);
  const data = questions.find(question => question.question_id === id);

  /* 리뷰 명 수정 */
  const [inputText, setInputText] = useState(data.question_title);
  const handleChange = (e) => {
    if (e.target.value.length <= 20) {
      setInputText(e.target.value);
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
    if (length >= 20) return "error";
    if (length > 0 && length < 20) return "writing";
    return "default";
  };

  const textState = getTextState(inputText.length);

  /* 리뷰 대상 수정 */
  const [target, setTarget] = useState(data.question_target);
  const changeTarget = (target) => {
    if (target === 'team') {
      setTarget('team');
    } else if (target === 'friend') {
      setTarget('friend');
    }
  }

  /* 리뷰 종류 수정 */
  const [type, setType] = useState(data.question_type);
  const changeType = (type) => {
    if (type === 'strength') {
      setType('strength');
    } else if (type === 'weakness') {
      setType('weakness');
    } else if (type === 'both') {
      setType('both')
    }
  }

  /* 수정사항이 있는지 확인 */
  const [isModifiedDisabled, setIsModifiedDisabled] = useState(true);
  useEffect(()=>{
    if (data.question_target === target && data.question_title === inputText && data.question_type === type) {
      setIsModifiedDisabled(true);
    } else if (inputText.length === 0) {
      setIsModifiedDisabled(true);
    } else {
      setIsModifiedDisabled(false);
    }
  }, [target, inputText, type])

  /* 수정하기 버튼 눌렀을 때 내용 변경 */
  const handleUpdate = () => {
    setQuestions(questions.map(question =>
      question.question_id === id
      ? {...question, question_target: target, question_title: inputText, question_type: type}
      : question
    ));
  }

  /* 삭제하기 눌렀을 때 삭제 */
  const handleDelete = () => {
    setQuestions((questions) => questions.filter((question) => question.question_id !== id));
  }

  /* 토스트 팝업 - 수정하기 버튼 눌렸을 때 */
  const [showToast, setShowToast] = useRecoilState(modifiedToastState);

  /* 모달 */
  const [backModal, setBackModal] = useRecoilState(backModalState);
  const [deleteModal, setDeleteModal] = useRecoilState(deleteModalState);

  return (
    <>
      <Container>
        <Header>
          <img className='handler' alt="handler" src="./image/handler.svg"/>
        </Header>
        <BodyContent>
          <div className='title'>
            <div className='title-box'>
              <div className='question-title'>{inputText}</div>
              <div className='delete-button' onClick={()=>{
                /* 삭제하기 버튼 눌렀을 때 */
                setDeleteModal(true);
              }}>삭제하기</div>
            </div>
            <img alt="divider" src="./image/divider.svg"/>
          </div>
          {/* 답변 수정 부분 */}
          <div className='content'>
            <div className='question-content'>
              <p className='subtitle'>리뷰 대상</p>
              <Segment2Btn id={id} onClickTeam={()=>{
                changeTarget('team');
              }} onClickFriend={()=>{
                changeTarget('friend');
              }} target={target}/>
            </div>
            <div className='question-content'>
              <p className='subtitle'>
              {
                target === 'team'
                ? '프로젝트 명'
                : '리뷰 명'
              }
              </p>
              <div className="text-field">
                <TextArea
                  maxLength="20"
                  value={inputText}
                  onChange={handleChange}
                  $textState={textState}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <div className="count">
                  <TextLength $textState={textState} $isFocused={isFocused}>{inputText.length}/</TextLength>
                  20자
                </div>
              </div>
              {
                textState === "error"
                ? <div className='warning'>
                    <img alt="warning message" src="./image/warning-msg.svg"/>
                  </div>
                : null
              }
            </div>
            <div className='question-content'>
              <p className='subtitle'>리뷰 종류</p>
              <Segment3Btn id={id} onClickStrength={()=>{
                changeType('strength')
              }} onClickWeakness={()=>{
                changeType('weakness')
              }} onClickBoth={()=>{
                changeType('both')
              }} type={type}/>
            </div>
          </div>
        </BodyContent>

        {showToast && <div className="toast"><Toast text="🎉 수정사항이 정상적으로 변경됐어요! 🎉" onClick={()=>{ 
          setShowToast(false);
        }}/></div>}
        <NavigateBtn isModifiedDisabled={isModifiedDisabled} onClickButton={()=>{
          /* 수정하기 버튼 눌렀을 때 */
          /* 전역 상태에 수정 업데이트 */
          handleUpdate();
          /* 수정하기 버튼 - disabled, toast 팝업 */
          setIsModifiedDisabled(true);
          setShowToast(true);
        }} onClickBackButton={()=>{
          /* 뒤로가기 버튼 눌렀을 때 */
          if (isModifiedDisabled === true) { // 수정된 내용 저장 or 수정 내용 없음
            setShowToast(false);
            setBottomsheet(false);
          } else { // 수정 내용 저장하지 않고 뒤로가기
            setBackModal(true);
          }
        }}/>
      </Container>
      <BlurContainer $show={backModal.toString()}/>
      { backModal && 
        <Modal>
          <WarningModal 
            title="변경된 내용이 저장되지 않았어요!" 
            description="수정하기 버튼을 눌러야 변경사항이 저장이 돼요"
            no="취소"
            yes="저장 안함"
            navigate="/home"
            modalstate={backModalState}
            onClickYes={()=>{
              setBottomsheet(false);
            }}
          />
        </Modal>}
      <BlurContainer $show={deleteModal.toString()}/>
      { deleteModal && 
        <Modal>
          <WarningModal 
            title={`삭제한 질문지는 복구되지 않아요.\n괜찮으신가요?`}
            no="취소"
            yes="삭제"
            navigate="/home"
            modalstate={deleteModalState}
            onClickYes={()=>{
              handleDelete();
              setBottomsheet(false);
            }}
          />
        </Modal>}
    </>
  )
};

export default BottomSheet;