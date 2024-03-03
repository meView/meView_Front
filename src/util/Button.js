import styled from "styled-components";

const Btn = styled.div`
  background-color: var(--primary);
  border-radius: 12px;
  height: 56px;
  font-size: var(--subtitle-02);
  font-weight: bold;
  text-align: center;
  line-height: 56px;
  width: ${(props) => props.width};
`;

function Button(props) {
  return (
    <Btn width={props.width} onClick={props.onClick}>
      {props.text}
    </Btn>
  );
}

export default Button;
