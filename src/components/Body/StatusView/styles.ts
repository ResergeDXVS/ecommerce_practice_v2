import styled, { css } from "styled-components";
import { BTagStyle, FlexboxStructure, H3BlueStyle, phoneAdjustments, PTagStyle, PxToRem } from "../../../theme/styles";

const StatusStructure = styled.section`
    width: 100%;
    box-sizing: border-box;
    ${FlexboxStructure("column","space-around","center")};
    padding:5% 10%;
    background: linear-gradient(
        135deg, 
        ${props=>props.theme.colors.white} 50%, 
        ${props=>props.theme.colors.secondary} 50%);
    gap:3%;
    ${phoneAdjustments(css`
        background: ${props=>props.theme.colors.secondary};
        padding:2% 4%;
        gap:1%;
    `)};
`;

const StatusInformation = styled.div`
    ${FlexboxStructure("column","none","center")};
    width: 100%;
    max-width: 1200px;
    margin: 2% 0;
    padding: 2rem;
    background-color: ${props=>props.theme.colors.white};
    border-radius: 70px;
    
    ${phoneAdjustments(css`
        max-width: 900px;
        border-radius: 35px;
    `)};

    > h3{
        ${H3BlueStyle};
        flex: 1;
        margin: 0;
        @include phone_adjustments{
            font-size: px-to-rem(28);
        }
        ${phoneAdjustments(css`
            font-size: ${PxToRem(28)};
        `)};
    }
    > p{
        ${PTagStyle};
        flex: 1;
        margin: 0;
        >b{
            ${BTagStyle};
            ${phoneAdjustments(css`
                font-size: ${PxToRem(24)};
            `)};
        }
        ${phoneAdjustments(css`
            font-size: ${PxToRem(20)};
        `)};
    }
`;

export {
    StatusStructure,
    StatusInformation
}