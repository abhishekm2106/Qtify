import './App.css'
import Navbar from './components/Navbar'
import { FlexBox } from './components/Styles'
import styled from 'styled-components'
import Headphones from './assets/vibrating-headphone.png'

function App() {

  const HeroSection = styled(FlexBox)`
    padding: 4rem 3rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    img{
      width: auto;
      height: 10rem;
      margin-left: 2rem;
    }
  `

  return (
    <>
      <Navbar />
      <HeroSection>
        <h1>
          100 Thousand Songs, ad-free<br />
          Over thousands podcast episodes
        </h1>
        <img src={Headphones} alt="" />
      </HeroSection>
    </>
  )
}

export default App
