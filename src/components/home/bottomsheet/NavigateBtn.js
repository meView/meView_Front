import styled from "styled-components";
// import { useRecoilState } from "recoil";
// import { questionFormState } from "../../../recoil/HomeAtom";

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  max-width: 460px;
  width: calc(100% - 40px);
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 0;
  padding-top: 8px;
  padding-bottom: 24px;
  .back-button {
    width: 50%;
    padding-right: 2%;
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
  border: none; // 버튼 테두리 제거
  cursor: ${({ $isDisabled }) => ($isDisabled ? "not-allowed" : "pointer")};
`;

function NavigateBtn({ isModifiedDisabled, onClickButton, onClickBackButton }) {

  /* const [questionForm, setQuestionForm] = useRecoilState(questionFormState); */

  return (
    <ButtonGroup>
      <div className="back-button">
        <img
          alt="back button"
          src="/image/back-button.svg"
          onClick={() => {
            /* 나가기 */
            onClickBackButton();
          }}
        />
      </div>
      <StyledButton
        $isDisabled={isModifiedDisabled}
        onClick={() => {
          if (!isModifiedDisabled) {
            /* 수정한 내용 - 전역 상태 저장 */
            /* 토스트 팝업 */
            onClickButton();
          }
        }}
      >
        수정하기
      </StyledButton>
    </ButtonGroup>
  );
}

export default NavigateBtn;