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
  background-color: ${props => props.show ? '#000000' : 'var(--Gray-15)'};
`;

const BlurContainer = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(4px);
  display: ${props => props.show ? 'block' : 'none'};
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
      <Container show={showBottomSheet}>
        <TopNav />
        {
          reviewList.length === 0
          ? <NoReview/>   
          : <ReviewList/>  
        }
        <Bottombar /> 
      </Container>
      <BlurContainer show={showBottomSheet}/>
      { 
        showBottomSheet &&
        <BottomSheet/>
      }
    </>
  );
}

export default Myhome;
