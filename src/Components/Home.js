import React from 'react'
import { styled } from 'styled-components'
import cart from '../cart.webp'
const Container = styled.div`
text-align: center;
position: relative;
padding: 15px 0 0 0;
margin: 0;
`
const Title = styled.h1`
`
const CartWrapper = styled.div`
border: 1px solid #ccc;
width: 700px;
height: auto;
padding: 20px;
gap: 20px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 20px auto;
border-radius: 10px;
`
const ImageWrapper = styled.div`
width: 130px;
`
const Image = styled.img`
width: 100%;
`
const TextWrapper = styled.div`
display: flex;
flex-direction: row;
gap: 5px;
`
const Text = styled.span`
font-size: 22px;
color: ${props => props.index === 0 ? 'purple' :props.index === 1 ? '#EBC352' : '#8388B2'};
font-weight:600;
letter-spacing: 2px;
`
const ButtonWrapper = styled.div`
`
const Button =styled.button`
padding: 20px;
border: none;
font-size: 16px;
font-weight: 700;
border-radius: 20px;
background-color: #33A8C5;
color: white;
cursor: pointer;
letter-spacing: 1px;
font-family: "Oswald";
&:hover{
    background-color: black;
    color: white;
}
`
const Icon = styled.div`
position: absolute;
top: 0;
right: 0;
width: 80px;
`


const Home = (props) => {
    console.log("Home", props);
   const data = props.data;
   const addToCartHandler = props.addToCartHandler;
  return (
    <Container>
    <Title>PRODUCTS</Title>
    <Icon> <Image src={cart}/> </Icon>
    {data.map((items, index)=>(
    <CartWrapper key={index} index={index}>
        <ImageWrapper>
            <Image src={items.image} alt='Product Image'/>
        </ImageWrapper>
        <TextWrapper>
            <Text>{items.name}</Text>
            <Text> : </Text>
            <Text >{items.price}</Text>
        </TextWrapper>
        <ButtonWrapper>
            <Button onClick={()=>addToCartHandler({itemsname:"iphone", itemsprice:"3000$"})}>
            ADD TO CART</Button>
        </ButtonWrapper>
    </CartWrapper>))}
    </Container>
  )
}

export default Home
