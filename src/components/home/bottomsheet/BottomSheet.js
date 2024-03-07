import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled, {keyframes} from 'styled-components'
import { backModalState, bottomSheetState, deleteModalState, modifiedToastState, questionFormListState, questionFormState, questionIdState } from '../../../recoil/HomeAtom';
import Toast from '../../../util/Toast';
import WarningModal from '../../../util/WarningModal';
import NavigateBtn from './NavigateBtn';
import Segment2Btn from './Segment2Btn';
import Segment3Btn from './Segment3Btn';
import { useQuery, useMutation } from "react-query";
import { getQuestionDelete, getQuestionDetail, getQuestionUpdate } from "../../../api/Home_API";
import { userAccessTokenState } from 'recoil/UserAtom';

const slideUp = keyframes`
  0% { transform: translateY(100%); }
  100% { transform: translateY(0); }
`;
const slideDown = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(100%); }
`;

const Container = styled.div`
  animation: ${({$isOpen}) => $isOpen ? slideUp : slideDown} 0.25s cubic-bezier(0.5, 0.0, 0.5, 0.7);
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
    cursor: pointer;
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

const BlurContainer = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  max-width: 500px;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.48);
  display: ${({ $show }) => $show === 'true' ? 'block' : 'none'};
`

function BottomSheet() {
  const [bottomsheet, setBottomsheet] = useRecoilState(bottomSheetState);
  const [isOpen, setIsOpen] = useState(bottomsheet);
  const [question, setQuestion] = useRecoilState(questionFormState);
  const [questionList, setQuestionList] = useRecoilState(questionFormListState);
  const [isFocused, setIsFocused] = useState(false);
  const question_id = useRecoilValue(questionIdState);
  const [inputText, setInputText] = useState(question.question_title);
  const [target, setTarget] = useState(question.question_target);
  const [type, setType] = useState(question.question_type);
  const [isModifiedDisabled, setIsModifiedDisabled] = useState(true);
  const access_token = useRecoilValue(userAccessTokenState);

  /* 질문지 상세보기 */  
  const {
    data: questionDetail,
    isLoading: isLoadingDetail,
    isError: isErrorDetail,
  } = useQuery(
    ["questionDetail"],
    () => getQuestionDetail(question_id, access_token),
  );
  useEffect(() => {
    if (questionDetail !== undefined) {
      setQuestion(questionDetail);
    }
  }, [questionDetail])
  useEffect(() => {
    setInputText(question.question_title);
    setTarget(question.question_target);
    setType(question.question_type);
  }, [question])

  /* textarea focus 상태 아닐 경우 */
  const handleFocus = () => { setIsFocused(true); };
  const handleBlur = () => { setIsFocused(false); };
  const getTextState = (length) => {
    if (length >= 20) return "error";
    if (length > 0 && length < 20) return "writing";
    return "default";
  };

  /* 수정 */
  const handleChange = (e) => {
    if (e.target.value.length <= 20) {
      setInputText(e.target.value);
    }
  };
  const textState = getTextState(inputText !== undefined? inputText.length: 0);
  const changeTarget = (target) => {
    if (target === 'TEAM') {
      setTarget('TEAM');
    } else if (target === 'FRIEND') {
      setTarget('FRIEND');
    }
  }
  const changeType = (type) => {
    if (type === 'STRENGTH') {
      setType('STRENGTH');
    } else if (type === 'WEAKNESS') {
      setType('WEAKNESS');
    } else if (type === 'BOTH') {
      setType('BOTH')
    }
  }

  /* 수정사항이 있는지 확인 */
  useEffect(()=>{
    if (question.question_target === target && question.question_title === inputText && question.question_type === type) {
      setIsModifiedDisabled(true);
    } else if (inputText.length === 0) {
      setIsModifiedDisabled(true);
    } else {
      setIsModifiedDisabled(false);
    }
  }, [target, inputText, type])

  /* 수정하기 버튼 눌렀을 때 내용 변경 */
  const updateMutation = useMutation((newData) => getQuestionUpdate(newData, question_id, access_token), {
    onSuccess: (data) => {
      const updateQuestion = (question_id, newQuestion) => {
        setQuestionList(questionList.map(question => 
          question.question_id === question_id ? newQuestion : question
        ));
      };
      const newQuestion = {
        question_id: data.question_id,
        question_title: data.question_title,
        question_type: data.question_type,
        question_target: data.question_target,
      }
      updateQuestion(data.question_id, newQuestion);
    },
    onError: (error) => {
      console.error(error);
    },
  });
  const handleUpdate = () => {
    updateMutation.mutate({
      question_target: target,
      question_type: type,
      question_title: inputText,
    });
  };

  /* 삭제하기 눌렀을 때 삭제 */
  const deleteMutation = useMutation(() => getQuestionDelete(question_id, access_token), {
    onSuccess: (data) => {
      setQuestionList((questions) => questions.filter((question) => question.question_id !== question_id));
    },
    onError: (error) => {
      console.error(error);
    },
  });
  const handleDelete = () => {
    deleteMutation.mutate();
  }

  /* 모바일 스크롤 방지 */
  function preventDefault(e) { e.preventDefault(); }
  function disableScroll() {
    window.addEventListener('scroll', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false }); 
    window.addEventListener('mousewheel', preventDefault, { passive: false });
  }
  function enableScroll() {
    window.removeEventListener('scroll', preventDefault, { passive: false });
    window.removeEventListener('touchmove', preventDefault, { passive: false });
    window.removeEventListener('mousewheel', preventDefault, { passive: false });
  }
  useEffect(() => {
    disableScroll();
    return () => enableScroll();
  }, [])

  const [showToast, setShowToast] = useRecoilState(modifiedToastState);
  const [backModal, setBackModal] = useRecoilState(backModalState);
  const [deleteModal, setDeleteModal] = useRecoilState(deleteModalState);

  if (isLoadingDetail) return <div></div>;
  if (isErrorDetail) return <div>Error occurred</div>;

  return (
    <>
      <Container $isOpen={isOpen}>
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
              <Segment2Btn id={question_id} onClickTeam={()=>{
                changeTarget('TEAM');
              }} onClickFriend={()=>{
                changeTarget('FRIEND');
              }} target={target}/>
            </div>
            <div className='question-content'>
              <p className='subtitle'>
              {
                target === 'TEAM'
                ? '프로젝트 명'
                : '리뷰 명'
              }
              </p>
              <div className="text-field">
                <TextArea
                  name="title"
                  maxLength="20"
                  value={inputText}
                  onChange={handleChange}
                  $textState={textState}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <div className="count">
                  <TextLength $textState={textState} $isFocused={isFocused}>{
                    inputText?.length || 0
                  }/</TextLength>
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
              <Segment3Btn id={question_id} onClickStrength={()=>{
                changeType('STRENGTH')
              }} onClickWeakness={()=>{
                changeType('WEAKNESS')
              }} onClickBoth={()=>{
                changeType('BOTH')
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
            setIsOpen(false);
            setTimeout(()=>{
              setShowToast(false);
              setBottomsheet(false);
            }, 240);
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