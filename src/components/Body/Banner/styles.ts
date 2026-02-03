import styled from "styled-components";
import { FlexboxStructure, H1BlueStyle, PTagStyle, PxToRem } from "../../../theme/styles";

const BannerStructure = styled.section`
    width: 100%;
    padding: 80px 20px;
    text-align: center;
    background: 
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
        url("/img/banner_hound_express.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 50%;
    color:${props=>props.theme.colors.white};
    box-sizing: border-box;

    h1{
        ${H1BlueStyle};
        font-size: ${PxToRem(48)};
    }
    p{
        font-weight: 500;
        margin-top: 1.25rem;
        font-size: ${PxToRem(28)};
    }
`;

const MainStructure = styled.section`
    width: 100%;
    padding: 50px;
    background-color: ${props => props.theme.colors.white};
    box-sizing: border-box;
    ${FlexboxStructure("column","space-around","stretch")};
    h2{
        ${H1BlueStyle};
        font-weight: 700;
        line-height: 1.4;
        text-align: center;
    }
    p{
        ${PTagStyle};
        font-weight: 400;
        line-height: 1.1;
        text-align: justify;
    }
`;

export { 
    BannerStructure,
    MainStructure
};