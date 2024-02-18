import styled from 'styled-components'

const Btn = styled.div`
  background-color: var(--primary);
  border-radius: 12px;
  height: 56px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: var(--subtitle-02);
  font-weight: bold;
  text-align: center;
  line-height: 56px;
  width: ${props => props.width};
`

function Button (props) {
  return (
    <Btn width={props.width}>{props.text}</Btn>
  )
}

export default Button;