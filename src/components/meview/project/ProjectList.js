import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { question_idState } from "recoil/ProjectListAtom";
import { useRecoilState } from "recoil";

const Container = styled.div`
  background-color: var(--Gray-14);
  margin: 0px 20px;
  padding: 12px;
  color: white;
  border-radius: 8px;
  display: flex;
  border-right: solid 8px var(--Gray-13);
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: var(--Hover);
  }
`;
const List = styled.div`
  display: flex;
  align-items: center;

  .pjname {
    margin-left: 12px;
    font-size: 18px;
    font-weight: bold;
  }
  .countnum {
    position: absolute;
    right: 16px;
    border-radius: 8px;
    width: 32px;
    height: 32px;
    color: var(--primary);
    background-color: var(--Gray-13);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
  }
`;

function ProjectList(props) {
  const navigate = useNavigate();
  const [, setQuestion_id] = useRecoilState(question_idState);

  const handleProjectClick = () => {
    setQuestion_id(props.question_id);
    navigate("/meview/projectreview");
  };

  return (
    <Container onClick={handleProjectClick}>
      <List>
        <img src="/image/reviewfoldericon.svg" alt="review folder icon" />
        <span className="pjname">{props.projectname}</span>
        <div className="countnum">+{props.count}</div>
      </List>
    </Container>
  );
}

export default ProjectList;
