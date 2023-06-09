// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ContentContainer = styled.div`
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0px 4px 8px 0px #bfbfbf;
  @media screen and (min-width: 768px) {
    width: 600px;
    padding: 25px;
  }
`

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Roboto';
`

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`
export const Button = styled.button`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: bold;
  border: none;
  border-radius: 3px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #415286;
  color: #ffffff;
  cursor: pointer;
`
