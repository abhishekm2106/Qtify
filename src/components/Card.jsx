/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { primaryBlack, primaryWhite } from './Styles'

const CardElement = styled.div`
    width: 11rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 18rem;
    .card{
        height: 88%;
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        .image{
            flex: 1;
            background-position: center;
            background-size: cover;
        }

        .info{
            padding: 1rem;
            background-color: ${primaryWhite};
            .pill{
                border-radius: 50rem;
                background-color: ${primaryBlack};
                color: ${primaryWhite};
                padding: .3rem 1rem;
                font-size: .8rem;
            }
        }
    }
    .title{
        height: 10%;
        font-weight:200;
    }   
`

const Card = ({ name, image, likesOrFollows, isPlaylist }) => (
    <CardElement>
        <div className="card">
            <div className='image' style={{ backgroundImage: `url(${image})` }}></div>
            <div className='info'>
                <span className='pill'>{likesOrFollows} {isPlaylist ? 'follows' : 'likes'}</span>
            </div>
        </div>
        <h3 className="title">
            {name}
        </h3>
    </CardElement>
)

export default Card