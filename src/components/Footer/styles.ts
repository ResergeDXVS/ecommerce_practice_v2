import styled, { css } from "styled-components";
import { AFooterStyle, FlexboxStructure, mediaAdjustments, phoneAdjustments, PStyle, PxToRem } from "../../theme/styles";

const FooterStructure = styled.footer`
    font-family: ${props => props.theme.fonts.secondary};
    background-color: ${p => p.theme.colors.primary};
    display: grid;
    grid-template-areas:
        "copyright copyright"
        "policy policy"
        "contacts redes";
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(3, auto);
    padding: 24px;
    gap: 14px;

    ${mediaAdjustments(css`
        text-align: center;
    `)};
    ${phoneAdjustments(css`
        display: grid;
        grid-template-areas:
            "copyright"
            "policy"
            "contacts"
            "redes";
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, auto);
        padding: 12px 2px;
        gap: 4px;
    `)};
`;

const FooterCopyrights = styled.section`
    grid-area: copyright;
    p{
        font-size: ${PxToRem(20)};
        font-weight: 800;
        color:  ${p => p.theme.colors.white};
        text-align: center;
        ${phoneAdjustments(css`
            font-size: ${PxToRem(16)};
        `)};
    }
`;

const FooterPolicy = styled.section`
    grid-area: policy;
    ${FlexboxStructure("row","center","center")};
    padding: 1rem 0.6rem;
    gap: 120px;
    flex-wrap: nowrap;
    a{
        ${AFooterStyle};
        font-size: ${PxToRem(16)};
        font-weight: 500;
        color: ${p=>p.theme.colors.secondary};
        ${phoneAdjustments(css`
            gap:${PxToRem(10)};
        `)};
    }
    ${phoneAdjustments(css`
        gap:60px;
    `)};
`;

const FooterContacts = styled.section`
    grid-area: contacts;
    ${FlexboxStructure("column","space-around","flex-start")};
    padding: 4px 60px;
    ${phoneAdjustments(css`
        ${FlexboxStructure("column","center","center")};
    `)};
    p{
        font-size: ${PxToRem(18)};
        ${PStyle};
        > a{
            ${AFooterStyle};
            font-size: inherit;
            ${phoneAdjustments(css`
                font-size: ${PxToRem(16)};
            `)};
        }
        ${phoneAdjustments(css`
            font-size: ${PxToRem(16)};
        `)};
    }
`;

const FooterNetworks = styled.section`
    grid-area: redes;
    ${FlexboxStructure("column","space-between","stretch")};
    padding: 4px 60px;
    gap:12px;
    
    a{
        ${FlexboxStructure("row","center","stretch")};
        ${AFooterStyle};
        gap:12px;
        i{ 
            ${FlexboxStructure("row","space-between","center")};
            font-size: ${PxToRem(30)};
            margin:0;
            line-height: 1;
            gap:1rem;
            ${phoneAdjustments(css`
                font-size: ${PxToRem(24)};
            `)};
            p{
                font-size: ${PxToRem(24)};
                text-align: center;
                margin: 0;
                ${phoneAdjustments(css`
                    font-size: ${PxToRem(16)};
                `)};
            }
        }
    }
    ${phoneAdjustments(css`
        ${FlexboxStructure("row","space-between","flex-start")};
    `)};

`;

export {
    FooterStructure,
    FooterCopyrights,
    FooterPolicy,
    FooterContacts,
    FooterNetworks,
}