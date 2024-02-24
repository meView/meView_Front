import { useRecoilState } from "recoil";
import { answerState } from "../../recoil/QuestionAtom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Modal = styled.div`
  background-color: var(--Gray-14);
  height: 178px;
  border-radius: 12px;
  position: absolute;
  left: 20px;
  right: 20px;
  top: 186px;
`;
const Top = styled.div`
  height: 122px;
  position: relative;
  .text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  .title {
    color: var(--Gray-02);
    font-size: var(--subtitle-01);
    font-weight: bold;
    margin-bottom: 4px;
    white-space: pre-line;
  }
  .alert {
    color: var(--primary);
    font-size: var(--button-02);
    line-height: 26px;
  }
  .description {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .warning {
    //정렬 수정
    padding: 0 4px;
  }
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  height: 56px;
  font-weight: bold;
  .no {
    background-color: var(--Gray-13);
    color: var(--Gray-01);
    font-size: var(--button-02);
    width: 50%;
    border-radius: 0 0 0 12px;
    text-align: center;
    line-height: 56px;
  }
  .yes {
    background-color: var(--primary);
    color: var(--Gray-14);
    font-size: var(--button-02);
    width: 50%;
    border-radius: 0 0 12px 0;
    text-align: center;
    line-height: 56px;
  }
`;

function WarningModal(props) {
  const [modal, setModal] = useRecoilState(props.modalstate);
  const [answer, setAnswer] = useRecoilState(answerState);
  const navigate = useNavigate();

  return (
    <Modal>
      <Top>
        <div className="text">
          <div className="title">{props.title}</div>
          {props.description && (
            <div className="description">
              <img
                className="warning"
                alt="warning icon"
                src="/image/warning.svg"
              />
              <span className="alert">{props.description}</span>
            </div>
          )}
        </div>
      </Top>
      <Bottom>
        <div
          className="no"
          onClick={() => {
            setModal(false);
          }}
        >
          {props.no}
        </div>
        <div
          className="yes"
          onClick={() => {
            setModal(false);
            setAnswer({
              answer1: "",
              answer2: "",
              answer3: "",
            });
            navigate(props.navigate);
            if (props.onClickYes) {
              props.onClickYes();
            }
          }}
        >
          {props.yes}
        </div>
      </Bottom>
    </Modal>
  );
}

export default WarningModal;
