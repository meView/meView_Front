import styled from "styled-components";

const Container = styled.div`
  background-color: var(--Gray-14);
  margin: 0px 20px 16px 20px;
  color: white;
  height: 96px;
  border-radius: 8px;
  display: flex;
  border-right: solid 8px var(--Gray-13);

  .question-title {
    margin: 0px;
    height: 48px;
    display: flex;
  }
  .question-icon {
    width: 64px;
    height: 64px;
    padding: 0 12px 0 12px;
    margin-top: auto;
    margin-bottom: auto;
  }
  .question-text {
    font-size: var(--subtitle-02);
    color: var(--Gray-02);
    height: 24px;
    line-height: 24px;
    padding-top: 16px;
  }
  .copy {
    height: 48px;
    padding-top: 0px;
  }
  .copy-button {
    width: 97px;
    height: 32px;
  }
  .arrow-icon {
    width: 20px;
    height: 20px;
    padding-top: 20px;
    padding-left: 4px;
  }
`

function ListItem(props) {

  return (
    <Container>
      <img className="question-icon" alt="question icon" src="./image/question-icon.svg"/>
      <div>
        <div className="question-title"> 
          <p className="question-text">{props.question_title}</p>
          <img className="arrow-icon" alt="arrow icon" src="./image/arrow-icon.svg"/>
        </div>
        <div className="copy">
          <img className="copy-button" alt="copy button" src="./image/link-copy-button.svg" onClick={()=>{
            /* 링크 복사 */
            
          }}/>
        </div>
      </div>
    </Container>
  )
}

export default ListItem;