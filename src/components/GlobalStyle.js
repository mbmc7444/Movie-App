import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 12px;
        color: #e5e5e5;
        width: 100%;
        margin: 0;
    }
    body {
        -ms-overflow-style: none;
        background-color: rgba(20, 20, 20, 1);
        width:100%;
        height: 100vh;
      }
      
      ::-webkit-scrollbar {
        display: none;
      }
      
      
`;

export default globalStyles;