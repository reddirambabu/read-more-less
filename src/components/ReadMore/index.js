// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  Heading,
  Paragraph,
  Image,
  Button,
  ContentContainer,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [activeButton, setActiveButton] = useState(false)

  const onClickChange = () => {
    setActiveButton(previous => !previous)
  }

  const buttonText = activeButton ? 'Read Less' : 'Read More'
  const lengthOfText = Math.ceil(reactHooksDescription.split(' ').length / 2)
  const sortText = reactHooksDescription
    .split(' ')
    .slice(0, lengthOfText - 3)
    .join(' ')
  const fullText = reactHooksDescription

  const displayText = activeButton ? fullText : sortText

  return (
    <AppContainer>
      <ContentContainer>
        <Heading>React Hooks</Heading>
        <Paragraph>Hooks are a new addition to React</Paragraph>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Paragraph>{displayText}</Paragraph>
        <Button onClick={onClickChange}>{buttonText}</Button>
      </ContentContainer>
    </AppContainer>
  )
}

export default ReadMore
