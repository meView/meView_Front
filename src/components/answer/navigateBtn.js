import { useRecoilState } from "recoil";
import styled from "styled-components";
import { pageState, modalState } from "../../recoil/AnswerAtom";

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 8px;
  .back-button {
    width: 50%;
    padding-right: 2%;
    cursor: pointer;
  }
`;
const StyledButton = styled.button`
  background-color: ${({ $isDisabled }) =>
    $isDisabled ? "var(--Gray-14)" : "var(--primary)"};
  // 텍스트 색상
  color: ${({ $isDisabled }) =>
    $isDisabled ? "var(--Gray-11)" : "var(--Gray-14)"};
  border-radius: 12px;
  height: 56px;
  width: 50%;
  font-size: var(--subtitle-02);
  font-weight: bold;
  text-align: center;
  line-height: 56px;
  border: none; 
  cursor: ${({ $isDisabled }) => ($isDisabled ? "not-allowed" : "pointer")};
`;

function NavigateBtn({ isNextDisabled }) {
  const [page, setPage] = useRecoilState(pageState);
  const [modal, setModal] = useRecoilState(modalState);

  return (
    <ButtonGroup>
      <div className="back-button">
        <img
          alt="back button"
          src="/image/back-button.svg"
          onClick={() => {
            /* 뒤로 가기 */
            page === 1 ? setModal(true) : setPage(page - 1);
          }}
        />
      </div>
      <StyledButton
        $isDisabled={isNextDisabled}
        onClick={() => {
          if (!isNextDisabled) {
            setPage(page + 1);
          }
        }}
      >
        다음
      </StyledButton>
    </ButtonGroup>
  );
}

export default NavigateBtn;