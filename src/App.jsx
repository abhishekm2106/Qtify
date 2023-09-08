import './App.css'
import Navbar from './components/Navbar'
import { FlexBox } from './components/Styles'
import styled from 'styled-components'
import Headphones from './assets/vibrating-headphone.png'
import Card from './components/Card'

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
      <Card
        name='Strident Analyst'
        image="https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
        isPlaylist={true}
        likesOrFollows={345}
      />
    </>
  )
}

export default App
