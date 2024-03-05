import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import styled from "styled-components";
import QuestionText from "../../components/question/QuestionText";
import { answerState, pageState } from "../../recoil/QuestionAtom";
import WideButton from "../../util/WideButton";
import { postQuestion } from "api/Question_API";
import { useMutation } from "react-query";
import Toast from "util/Toast";
import { userAccessTokenState, userInfoState } from "recoil/UserAtom";
import { postState } from "recoil/QuestionAtom";

const QuestionWrapper = styled.div`
  background-color: var(--Gray-15);
  height: var(--vh);
  position: relative;
  width: 100%;
  max-width: 500px;
`;

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
  top: 0;
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
  .top-div {
    position: relative;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    height: 56px;
  }
  .close-button {
    margin-top: -28px;
    position: absolute;
    right: 20px;
    margin-bottom: 8px;
    cursor: pointer;
  }
`;
const Body = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh - 286px);
  top: 206px;
  .toast {
    position: absolute;
    width: 100%;
    bottom: 20px;
  }
`
const Bottom = styled.div`
  height: 80px;
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  cursor: pointer;
`;

function QuestionFourth(props) {
  const navigate = useNavigate();
  const [answer, setAnswer] = useRecoilState(answerState);
  const [, setPage] = useRecoilState(pageState);
  const [showToast, setShowToast] = useState(false);
  const userInfo = useRecoilValue(userInfoState);
  const access_token = useRecoilValue(userAccessTokenState);
  const [id, setId] = useState();

  // react-query 사용
  const questionData = {
    question_target: answer.answer1, // ["TEAM" or "FRIEND"]
    question_title: answer.answer2, // 질문지 제목
    question_type: answer.answer3, // ["STRENGTH" or "WEAKNESS" or "BOTH"]
  };

  const mutation = useMutation(() => postQuestion(questionData, access_token), {
    onSuccess: (data) => {
      setId(data.data.question_id);
    },
    onError: (error) => {
      console.error(error);
    },
  });
  // 페이지 로드 시 POST 요청 수행
  useEffect(() => {
    mutation.mutate();
  }, []);

  const handleCopyLink = async (question_id) => {
    const link = `${process.env.REACT_APP_URL}/answer?user_id=${userInfo.user_id}&question_id=${question_id}`
    try {
      await navigator.clipboard.writeText(link);
    } catch (err) {
      console.error('Failed to copy link: ', err);
    }
  };

  return (
    <QuestionWrapper>
      <Background>
        <object className="background" data="./image/question-background.svg" aria-label='question-background'/>
      </Background>
      <Top>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${props.progress}%` }}
          ></div>
        </div>
        <div className="top-div">
          <img
            className="close-button"
            alt="close button"
            src="/image/close.svg"
            onClick={() => {
              /* 질문지 생성 -> answer 상태 초기화 */
              setAnswer({
                answer1: "",
                answer2: "",
                answer3: "",
              });
              setPage(1);
              navigate("/home");
            }}
          />
        </div>
        <QuestionText
          text={"질문지가 생성됐어요!"}
          description={"링크를 복사해서 지인에게 리뷰를 요청해보세요!"}
        />
      </Top>
      <Body>
        <div className="toast">
          {showToast && <Toast text="질문지 링크가 복사 되었어요!" onClick={()=>{
            setShowToast(false);
          }}/>}
        </div>
      </Body>
      <Bottom>
        <WideButton text={"질문지 공유하기"} onClick={()=>{
          handleCopyLink(id);
          setShowToast(true);
        }}/>
      </Bottom>
    </QuestionWrapper>
  );
}

export default QuestionFourth;
