import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { pageState } from '../../recoil/AnswerAtom'

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  background-image: url('./image/answer-background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
const Top = styled.div`
`
const Body = styled.div`
`
const Bottom = styled.div`
  position: fixed;
  bottom: 24px;
  margin-left: 20px;
  margin-right: 20px;
  .button-img {
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  .button {
    width: 100%;
  }
`

function Start() {
  const [page, setPage] = useRecoilState(pageState);
  return (
    <Container>
      <Top>
      </Top>
      <Body>

      </Body>
      <Bottom>
        <button className='button-img' onClick={()=>{
          setPage(page+1);
        }}>
          <img className='button' alt="review start button" src="./image/review-start-button.svg"/>
        </button>
      </Bottom>
    </Container>
  )
}

export default Start;