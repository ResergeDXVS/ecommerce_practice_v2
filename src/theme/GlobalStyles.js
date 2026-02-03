import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        font-family: ${props => props.theme.font};
        font-size: 16px;
        margin: 0;
    }
    html {
        scroll-behavior: smooth;
    }
    header{
        background-color: ${props => props.theme.colors.primary};
    }

    footer{
        background-color: ${props => props.theme.colors.secondary};
    }
`;

export default GlobalStyle;