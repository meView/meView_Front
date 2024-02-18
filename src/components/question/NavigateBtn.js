import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { pageState, modalState } from "../../recoil/QuestionAtom";
import Button from "../../util/Button";

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 8px;
  .back-button {
    width: 50%;
    padding-right: 2%;
  }
  .next-button {
    background-color: var(--primary);
    border-radius: 12px;
    height: 56px;
    width: 50%;
    font-size: var(--subtitle-02);
    font-weight: bold;
    text-align: center;
    line-height: 56px;
  }
`

function NavigateBtn() {
  const [page, setPage] = useRecoilState(pageState);
  const [modal, setModal] = useRecoilState(modalState);

  return (
    <ButtonGroup>
      <div className="back-button">
        <img alt="back button" src="/image/back-button.svg" onClick={()=>{
        /* 뒤로 가기 */
          page === 1
          ? setModal(true)
          : setPage(page-1);
      }}/>
    </div>
    <Button text="다음" width="50%" onClick={()=>{
      setPage(page+1);
    }}></Button>
  </ButtonGroup>
  )
}

export default NavigateBtn;