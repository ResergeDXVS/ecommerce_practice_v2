import styled from "styled-components";
import { FlexboxStructure, H1BlueStyle, PTagStyle, PxToRem } from "../../../theme/styles";

const BannerStructure = styled.section`
    width: 100%;
    padding: 80px 20px;
    text-align: center;
    background: 
        linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
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
        font-family: ${p=>p.theme.fonts.secondary};
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
        font-size: ${PxToRem(50)};
        background-color: ${p=>p.theme.colors.primary};
        font-weight: 700;
        line-height: 1.4;
        text-align: center;
        margin-bottom: 2rem;
    }
    p{
        ${PTagStyle};
        font-weight: 400;
        line-height: 1.2;
        text-align: justify;
    }
`;

export { 
    BannerStructure,
    MainStructure
};