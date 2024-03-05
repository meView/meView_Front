import { postAnswer } from 'api/Answer_API'
import { useEffect } from 'react'
import { useMutation } from 'react-query'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { answerState, questionState } from 'recoil/AnswerAtom'
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
  const question = useRecoilValue(questionState);
  const answerData = useRecoilValue(answerState);
  const navigate = useNavigate();
  const [searchParams, ] = useSearchParams();
  const question_id = searchParams.get('question_id');
  const user_id = searchParams.get('user_id');

  const chip_dictionary = {
    'judgment': 1,
    'observation': 2,
    'listening': 3,
    'communication': 4,
    'friendliness': 5,
    'execution': 6,
    'perseverance': 7
  }
  
  const mutation = useMutation((postData) => postAnswer(postData), {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
  // 페이지 로드 시 POST 요청 수행
  useEffect(() => {
    let review = []
    for (let i=0; i < answerData.strength.length; i++) {
      const pushData = {
        review_type: "STRENGTH",
        review_description: answerData.strengthReview[answerData.strength[i]],
        chip_id: chip_dictionary[answerData.strength[i]]
      }
      review.push(pushData)
    }
    for (let i=0; i < answerData.weakness.length; i++) {
      const pushData = {
        review_type: "WEAKNESS",
        review_description: answerData.weaknessReview[answerData.weakness[i]],
        chip_id: chip_dictionary[answerData.weakness[i]]
      }
      review.push(pushData)
    }
    const postData = {
      user_id: parseInt(user_id),
      question_id: parseInt(question_id),
      response_title: question.question_title,
      response_responder: answerData.name,
      review_data: review
    }
    mutation.mutate(postData);
  }, []);

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