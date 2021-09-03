import React from "react"
import { Link, withRouter } from "react-router-dom"
import "./Components.css";
import styled from "styled-components";

const Nav = styled.div`
z-index: 10;
position: fixed;
top: 0;
left: 0;
display: flex;
background-color: rgb(20, 20, 20);
height: 68px;
box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
background-color: rgba(20, 20, 20, 0.8);
width: 100%;
color: white;

`;
const Container = styled.div`
max-width:1080px;
width: 100%;
display: flex;
margin: 0 auto;
padding: 0 1vw;
`;

const Item = styled.div`
border-bottom: 3px solid  ${props => props.current ? "#eee" : "transparent"};
transition:  border-bottom 0.25s ease-in-out;
width: 80px
`;


const SLink = styled(Link)`
text-decoration: none;
color: #f3f3f3;
text-transform: uppercase;
font-size: 14px;
font-weight: 600;
line-height: 68px;
text-align:center;
width: 100%;
display: block
`;

class Navigation extends React.Component {
    render() {
        { console.log(this.props.location.pathname) }
        return (
            <Nav >
                <Container>
                    <Item current={this.props.location.pathname === "/"}>
                        <SLink to="/">Home</SLink>
                    </Item>
                    <Item current={this.props.location.pathname === "/about"}>
                        <SLink to="/about">About</SLink>
                    </Item>
                </Container>
            </Nav>
        )
    }
}
export default withRouter(Navigation);