import Bottombar from "../../components/home/Bottombar";
import TopNav from "../../components/home/TopNav";
import styled from "styled-components";
import NoReview from "../../components/home/NoReview";
import ReviewList from "../../components/home/ReviewList";
import { useRecoilValue } from "recoil";
import { bottomSheetState, questionFormState } from "../../recoil/HomeAtom";
import BottomSheet from "../../components/home/bottomsheet/BottomSheet";

const Container = styled.div`
  height: 100vh;
  position: relative;
  background-color: var(--Gray-15);
`;

function Myhome() {

  /* 전역 상태에 저장해둔 생성 질문지 가져오기 */
  const reviewList = useRecoilValue(questionFormState);
  const showBottomSheet = useRecoilValue(bottomSheetState);

  return (
    <Container>
      <TopNav />
      {
        reviewList.length === 0
        ? <NoReview/>   
        : <ReviewList/>  
      }
      <Bottombar /> 
      { showBottomSheet && <BottomSheet/> }
    </Container>
  );
}

export default Myhome;
