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
    }
   
    body{
        /* font-family: 'Cinzel', serif; */
        /* font-family: 'Single Day', cursive; */
        font-family: 'Noto Serif KR', serif;
        font-size: 14px;
        font-weight: 200;
        background-color: ${props => props.theme.bgColor};
        background-image: url(${props => props.bgUrl});
        color: ${props => props.theme.blackColor};
        padding-top: 30px;
    }    
`;

export default globalStyles;
