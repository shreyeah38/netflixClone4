import React from 'react';
import background from "../Assets/login.jpg";
import styled from 'styled-components';


export default function BackgroundImage() {
  return (
    <Container>
        <img src={background} alt='Background'/>
    </Container>
  )
}

const Container = styled.div`
    height:100vh;
    weight:100vw;
    img{
        height:100vh;
        width:100vw;
    }
`;