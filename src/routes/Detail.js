
import React from "react";
import Loading from "../components/Loading";
import styled from "styled-components";

const Bg = styled.div`
margin-top: 68px;
background-image: url(${props => props.bgImage});
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-position: center center;
background-size: cover;
background-repeat: no-repeat;
filter: blur(4px);
opacity: 0.4;
z-index: 0;
`;


const Container = styled.div`
max-width: 1080px;
position: relative;
margin: calc(68px + 2%) auto 0 auto;
`;

const DetailWrap = styled.div`
display: flex;


@media only screen and (max-width: 600px) {
    display: block;
  }
`;

const DetailImg = styled.div`
flex: 50%;
@media only screen and (max-width: 600px) {
    flex:100%;  
    padding: 4vw 
  }
`;
const Img = styled.img`
max-width:350px;
height: 100%;
box-shadow: 0px 1px 5px 2px rgb(0 0 0 / 80%);
@media only screen and (max-width: 600px) {
    max-width:100%;  
  }

`;

const DetailText = styled.div`
margin-left: 2vw;
flex: 100%;
@media only screen and (max-width: 600px) {
   padding: 0 4vw 4vw 4vw;
   margin-left: 0;
  }

`;
const TextTitle = styled.div`
font-size: 2.5vw;
font-weight: 900;
margin: 2vw 0;
@media only screen and (max-width: 600px) {
    font-size: 7vw;
   }
`;

const TextDes = styled.div`
margin: 2vw 0;

`;


const DesYear = styled.span`
margin-right: 1vw;
font-size:0.875vw;
@media only screen and (max-width: 600px) {
    font-size: 2vw;
    margin-right: 3vw;
   }
`;


const DesRating = styled.span`
margin-right: 1vw;
font-size:0.875vw;
@media only screen and (max-width: 600px) {
    font-size: 2vw;
    margin-right: 3vw;
   }
`;
const DesEm = styled.em`
font-style: normal;
color: #b8b8b8;
&:first-child{
    margin-right: 1.25vw;
}
@media only screen and (max-width: 600px) {
    &:first-child{
        margin-right: 2.75vw;
    }
   }
`;
const Summary = styled.p`
width:100%;
font-size: 1.25vw;
line-height: 1.25;
word-break: keep-all;
@media only screen and (max-width: 600px) {
    margin-bottom: 32px;
    font-size: 3vw;
    line-height: 1.25;
 

`;

class Detail extends React.Component {
    state = {
        isLoading: true,
    }
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/")
        }
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 2000);
    }

    render() {
        const { isLoading } = this.state;
        const { location } = this.props
        if (location.state) {
            return (
                <>
                    {console.log(location.state.backImage)}
                    {isLoading ? <Loading /> : (
                        <>
                            <Bg
                                bgImage={location.state.backImage}
                            >
                            </Bg>
                            <Container>
                                <DetailWrap>
                                    <DetailImg>
                                        <Img src={location.state.poster} />
                                    </DetailImg>
                                    <DetailText>
                                        <TextTitle>{location.state.title}</TextTitle>
                                        <TextDes>
                                            <DesYear>
                                                <DesEm>날짜 :</DesEm>
                                                <DesEm>{
                                                    location.state.year.substring(0, 4)
                                                }</DesEm>
                                            </DesYear>
                                            <DesRating>
                                                <DesEm>평점 :</DesEm>
                                                <DesEm>{location.state.rating}
                                                </DesEm>
                                            </DesRating>
                                            {/* <span className="genres">{location.state.genres}</span> */}
                                        </TextDes>
                                        <Summary>{location.state.overview}</Summary>
                                    </DetailText>
                                </DetailWrap>
                            </Container>
                        </>
                    )}
                </>

            )
        }
        else {
            return null
        }
    }
}

export default Detail;

