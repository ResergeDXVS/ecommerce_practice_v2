import styled, { css } from "styled-components";
import { FlexboxStructure, LinkStyle, mediaAdjustments, phoneAdjustments, PxToRem } from "../../theme/styles";


const HeaderBase = styled.header`
    ${FlexboxStructure("row","space-between","center")};
    width: auto;
    height: 120px;
    padding: 0 20px;
    gap: 14px;
    box-sizing: border-box;
    ${phoneAdjustments(css`
        padding: 0 20px;
    `)};
    
`;

const HeaderLogo = styled.img`
    width: 240px;
`;

const HeaderPages = styled.b`
    font-size: ${PxToRem(14)};
    transition: ${props=>props.theme.hovers.transition};
    &:hover{
        transform: ${props=>props.theme.hovers.scale};
    }
    a{ 
        ${LinkStyle};
        &:hover{
            filter:${props => props.theme.hovers.filter};
        }
        ${mediaAdjustments(css`
            ${PxToRem(12)};
        `)};
        ${mediaAdjustments(css`
            ${PxToRem(10)};
        `)};
    }
    ${mediaAdjustments(css`
        text-align: center;
    `)};
    ${phoneAdjustments(css`
        text-align: center;
    `)};
`;

export {
    HeaderBase,
    HeaderLogo,
    HeaderPages,
}

