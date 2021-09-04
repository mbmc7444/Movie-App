import React from "react"
import styled, { keyframes } from "styled-components";


const Outer = styled.div`
height: 100px;
width: 100px;
border-radius: 15px;
margin: 20% auto; 

`;
const Rotation = keyframes`
from {
    -webkit-transform: rotate(270deg);
  }
  to {
    -webkit-transform: rotate(630deg);
  }
`;

const Middle = styled.div`
height: 60px;
width: 60px;
margin: auto;
position: relative;
top: 20px;
border-radius: 50%;
background-image: linear-gradient(150deg, transparent 50%, #154e7d 50%), linear-gradient(90deg, #154e7d 50%, white 50%);
-webkit-animation: ${Rotation} 1200ms infinite linear;
transform-origin: 50% 50%;
animation-timing-function: ease;

`;

const Inner = styled.div`
background: rgba(20, 20, 20, 1);
height: 48px;
width: 48px;
margin: auto;
position: relative;
top: 6px;
border-radius: 50%;
`;


function loading() {
    return (

            <Outer>
                <Middle>
                    <Inner>
                    </Inner>
                </Middle>
            </Outer>
    );

}


export default loading;