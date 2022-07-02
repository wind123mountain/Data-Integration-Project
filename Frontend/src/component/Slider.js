import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import React from 'react'
import styled from 'styled-components'
import products from "./data";
import { productObj } from "./data";

const Container = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    position: relative;
    overflow: hidden;
    padding: 80px 0px;
`


const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f780;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && "10px"};
    right: ${props => props.direction === 'right' && "10px"};    
    margin: auto;
    curse: pointer;
    opacity: 0.5;
    z-index: 2;

    &:hover {
        opacity: 0.8
    }
`


const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIdx * -100}vw)
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`

const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`

const Image = styled.img`
    height: 80%;
    padding: 10px;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    
`

const StoreLogo = styled.div`
    
`

const PhoneName = styled.h1`
    font-size: 32px;
`

const Price = styled.p`
    font-size: 25px;
    color: red;
    font-weight: bold;
    padding: 12px 0px;
`

const Promotion = styled.div`
    width: 100%;
    margin: 30px 0;
    border: 1px solid #ccc;
    border-radius: 5px;

`

const TitlePromotion = styled.div`
    background-color: #FEE2E2;
    color: #D70018;
    align-items: center;
    padding: 5px;
    display: flex;
    border-bottom: 1px solid #aaa;
`

const InfoPromotion = styled.li`
    font-family: Arial, Helvetica, sans-serif;
    padding: 2px;
`

const Button = styled.button`
    text-transform: uppercase;
    padding: 8px;
    background-color: #277cea;
    border: none;
    color: #fff;
    border-radius: 1px;
    cursor: pointer;
`




export default function Slider({index}) {
    const handleKey = (key) => {
        if (key.startsWith('The')){
          return "Thế giới di động";
        }else if (key.startsWith('Media')){
          return "Media Mart";
        }else if (key.startsWith('World')){
          return "World Phone";
        }else if (key.startsWith('Nguyen')){
          return "Nguyen Kim"
        }else{
          return key;
        }
      }

    const [slideIdx, setSlideIdx] = React.useState(0);

    const handleClick = (direction) => {
        if (direction === 'left'){
            setSlideIdx(slideIdx > 0 ? slideIdx - 1 : 3)
        }else {
            setSlideIdx(slideIdx < 3 ? slideIdx + 1 : 0)
        }
    }
    const phone_data = [products[parseInt(index)]];


    return (
    
        <Container>
            <Wrapper slideIdx={slideIdx}>
                {phone_data.map(phone => (
                <Slide key={phone.id}>
                    <ImageContainer>
                        <Image src={phone.img} style = {{height: "300px", width : "300px", paddingLeft : "200px"}}/>
                    </ImageContainer>
                    <InfoContainer>
                        <PhoneName>Điện thoại {phone.name}</PhoneName>
                        <Price>Giá: {phone.price}đ</Price>
                        <p>Có tất cả: {phone.count} nơi bán</p>
                    </InfoContainer>
                </Slide>
                ))}                
            </Wrapper>
        </Container>
    )
}
