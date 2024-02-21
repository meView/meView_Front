import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { linkToastState, questionFormState } from "../../recoil/HomeAtom";
import ListItem from "./ListItem";

const Container = styled.div`
  font-weight: var(--font-weight-bold);
  color: var(--Gray-02);
  position: relative;
  background-color: var(--Gray-15);
  padding-bottom: 110px;

  .title {
    font-size: var(--subtitle-01);
    line-height: 28px;
    margin: 26px 20px 24px 20px;
  }
  .highlight {
    color: var(--primary);
  }
  .underline {
    position: absolute;
    top: 12px;
    width: 173px;
    height: 16px;
    background-color: var(--primary-700);
  }
`

function ReviewList() {

  const reviewList = useRecoilValue(questionFormState);
  const [showToast, setShowToast] = useRecoilState(linkToastState);

  return (
    <Container>
      <div className="title">
        <div className="underline"></div>
        <span className="highlight">용도에 따라 질문지</span>를 만들고,<br/>
        카톡으로 리뷰를 주고 받아보세요!
      </div>
      <div className="review-list">
        {
          reviewList.map((a, i)=>{
            return (
              <ListItem question_title={a.question_title} question_id={a.question_id} key={i}
                onQuestionClick={()=>{
                /* 프로젝트 질문지 팝업 */
              }} 
                onLinkClick={()=>{
                /* 링크 복사하기 */
                setShowToast(true);
              }}/>
            )
          })
        }
      </div>
    </Container>
  )
}

export default ReviewList;
