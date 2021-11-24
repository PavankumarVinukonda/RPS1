import styled from 'styled-components'

export const RPSContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #223a5f;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  padding: 20px;
`
export const ScoreAndHeadingContainer = styled.div`
  padding: 10px;
  height: 130px;
  width: 70vw;
  border: 2px white solid;
  border-radius: 10px;
  align-self: center;
  display: flex;
  justify-content: space-between;
`
export const MainHeadingElement = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: white;
`
export const ScoreContainer = styled.div`
  height: 110px;
  width: 130px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Score = styled.p`
  font-family:roboto;
  font-size: 20px;
  color: #223a5f;
  font-weight: {props => props.bold ? 'bold' : 'solid'}
`
export const GameResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const GameResultImgsCont = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ChoiceCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ImgText = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-weight: solid;
`
export const ResultImg = styled.img`
  height: 120px;
  width: 130px;
`

export const ResultText = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
`
export const PlayAgainButton = styled.button`
  height: 40px;
  width: 100px;
  border: 0px;
  border-radius: 5px;
  color: blue;
`
