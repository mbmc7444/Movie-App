import React from "react";
import Loading from "../components/Loading";
import styled from "styled-components";


const Container= styled.section`
max-width:1080px;
margin: 0 auto;
 
`;

const AboutWrap = styled.div`
   box-shadow: 0 13px 27px 5px rgba(50, 50, 93, 1),
     0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
   padding: 20px;
   border-radius: 5px;
   background-color: white;
   margin: 0 auto;
   margin-top: 150px;
   max-width: 75%;
   font-weight: 400;

   @media only screen and (max-width: 600px) {
    max-width: 90%;
    padding: 30px;
  }
`;


const AboutP = styled.p`
font-size:1.5vw;
line-height:1.25;
color: #000;
@media only screen and (max-width: 600px) {
  font-size:3vw;
}
@media only screen and (max-width: 375px) {
  font-size:5.5vw;
}
`;
const AboutSpan = styled.span`
display: block;
margin-top:10px;
font-size:1vw;
color: #666;
text-align:right; 

@media only screen and (max-width: 600px) {
  font-size:2vw;
}
@media only screen and (max-width: 375px) {
  font-size:3vw;
  margin-top:20px;
}
`;


class About extends React.Component {
  state = {
    isLoading: true,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 2000);

  }
  render() {
    const { isLoading } = this.state;
    return (
      <>
        <Container>
          {isLoading ? <Loading/>: (
            <AboutWrap>
              <AboutP>
                React로 만들어진 사이트입니다.<br/>
                본 사이트는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.
                <AboutSpan> © 2021 Ham Dong-Hun. All Rights Reserved.</AboutSpan>
              </AboutP>
            </AboutWrap>
          )}
        </Container>
      </>
    )
  }
}



export default About;