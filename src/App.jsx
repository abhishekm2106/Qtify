import './App.css'
import Navbar from './components/Navbar'
import { FlexBox } from './components/Styles'
import styled from 'styled-components'
import Headphones from './assets/vibrating-headphone.png'
import Card from './components/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

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

const CardList = styled.div`
    display: grid;
    gap:1rem;
    grid-template-columns: repeat(auto-fill, minmax(186px, auto));
    /* overflow-x: scroll;
    overflow-y: hidden; */
    padding: 1rem;
  `


function App() {
  const [topAlbums, setTopAlbums] = useState([])
  useEffect(() => {
    axios.get('https://qtify-backend-labs.crio.do/albums/top').then(response => setTopAlbums(response.data))
  }, [])
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
      <CardList>
        {
          topAlbums.map(a =>
            <Card
              name={a.title}
              image={a.image}
              isPlaylist={a.songs ? true : false}
              likesOrFollows={a.follows}
              key={a.id}
            />
          )
        }
      </CardList>

    </>
  )
}

export default App
