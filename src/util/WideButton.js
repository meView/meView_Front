import styled from 'styled-components'

const Btn = styled.div`
  background-color: var(--primary);
  border-radius: 12px;
  height: 56px;
  font-size: var(--subtitle-02);
  font-weight: bold;
  text-align: center;
  line-height: 56px;
  margin-left: 20px;
  margin-right: 20px;
  width: ${props => props.width};
  cursor: pointer;
  
  &:hover {
    background-color: var(--Hover-02);
  }
`

function WideButton (props) {
  return (
    <Btn width={props.width} onClick={props.onClick}>{props.text}</Btn>
  )
}

export default WideButton;