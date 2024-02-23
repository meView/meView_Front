import Bottombar from "../../components/home/Bottombar";
import TopNav from "../../components/home/TopNav";
import styled from "styled-components";
import NoReview from "../../components/home/NoReview";
import ReviewList from "../../components/home/ReviewList";
import { useRecoilValue } from "recoil";
import { bottomSheetState, questionFormState } from "../../recoil/HomeAtom";
import BottomSheet from "../../components/home/bottomsheet/BottomSheet";
import { useEffect } from "react";

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
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.48);
  display: ${({$show}) => $show === 'true' ? 'block' : 'none'};
`

function Myhome() {

  /* 전역 상태에 저장해둔 생성 질문지 가져오기 */
  const reviewList = useRecoilValue(questionFormState);
  const showBottomSheet = useRecoilValue(bottomSheetState);

  useEffect(() => {
    if (showBottomSheet) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showBottomSheet]);

  return (
    <>
      <Container>
        <TopNav />
        {
          reviewList.length === 0
          ? <NoReview/>   
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
