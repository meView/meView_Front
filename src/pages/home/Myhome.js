import Bottombar from "../../components/home/Bottombar";
import TopNav from "components/meview/capability/TopNav";
import styled from "styled-components";
import NoReview from "../../components/home/NoReview";
import ReviewList from "../../components/home/ReviewList";
import { useRecoilState, useRecoilValue } from "recoil";
import { bottomSheetState, questionFormListState } from "../../recoil/HomeAtom";
import { userAccessTokenState } from "recoil/UserAtom";
import BottomSheet from "../../components/home/bottomsheet/BottomSheet";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { getQuestions } from "../../api/Home_API"

const Container = styled.div`
  height: 100vh;
  position: relative;
  background-color: var(--Gray-15);
`;

const BlurContainer = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  max-width: 500px;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.48);
  display: ${({$show}) => $show === 'true' ? 'block' : 'none'};
`

function Myhome() {
  /* 전역 상태에 저장해둔 생성 질문지 가져오기 */
  const [reviewList, setReviewList] = useRecoilState(questionFormListState);
  const showBottomSheet = useRecoilValue(bottomSheetState);
  const access_token = useRecoilValue(userAccessTokenState);

  useEffect(() => {
    if (showBottomSheet) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showBottomSheet]);

  // 질문지 리스트 가져오기
  const {
    data: questions,
    isLoading: isLoadingQuestions,
    isError: isErrorQuestions,
  } = useQuery(
    ["questions"],
    () => getQuestions(access_token),
  );

  useEffect(() => {
    if (questions !== undefined) {
      setReviewList(questions);
    }
  }, [questions])

  if (isLoadingQuestions) return <div></div>;
  if (isErrorQuestions) return <div>Error occurred</div>;

  return (
    <>
      <Container>
        <TopNav />
        {
          reviewList.length === 0
          ? <NoReview box='208px'/>   
          : <ReviewList/>  
        }
        <Bottombar /> 
      </Container>
      <BlurContainer $show={showBottomSheet.toString()}/>
      { 
        showBottomSheet &&
        <BottomSheet/>
      }
    </>
  );
}

export default Myhome;