import styled, { css } from "styled-components";
import { FlexboxStructure, mediaAdjustments, phoneAdjustments, PxToRem } from "../../../../theme/styles";

const GuideRow = styled.tr`
    &:nth-child(2n-1){
        color:${props=>props.theme.colors.primary};
        background-color: ${props=>props.theme.colors.secondary};
    }
    &:nth-child(2n){
        color:${props=>props.theme.colors.primary};
        background-color: ${props=>props.theme.colors.white};
    }
`;

const GuideCell = styled.td`
    font-size: ${PxToRem(20)};
    font-weight: 500;
    text-align: center;
    padding:1.25rem .75rem;
    ${mediaAdjustments(css`
        font-size: ${PxToRem(18)};
        padding:1rem;
    `)};
    ${phoneAdjustments(css`
        font-size: ${PxToRem(16)};
        padding:1rem;
    `)};
`;

const GuideButtons = styled.td`
    ${FlexboxStructure("column","center","center")};
    padding: 12px;
    width: 100%;
    height: 100%;
    gap:4px;
    padding:1.25rem .75rem;
    ${mediaAdjustments(css`
        ${FlexboxStructure("row","center","center")};
        padding:1rem;
    `)};
    ${phoneAdjustments(css`
        ${FlexboxStructure("row","center","center")};
        padding:1rem;
    `)};
`;

const GuideButton = styled.button`
    ${FlexboxStructure("row","center","center")};
    background-color: ${props=>props.theme.colors.primary};
    color:${props=>props.theme.colors.white};
    width: 100%;
    height: 100%;
    padding: 8px;
    border: 2px solid ${props=>props.theme.colors.primary};
    border-radius: 8px;
    cursor: pointer;
    transition: ${props=>props.theme.hovers.transition};
    img{
        width: 20px;
        height: 20px;
        filter: brightness(0) invert(1);
        display: none;
        ${mediaAdjustments(css`
            display: block;
        `)};
        ${phoneAdjustments(css`
            display: block;
        `)};
    }
    p{
        font-size: ${PxToRem(16)};
        line-height: 1;
        margin:0;
        font-weight: bolder;
        &:hover{
            color:$mainColorNavy;
        }
        ${mediaAdjustments(css`
            display: none;
        `)};
        ${phoneAdjustments(css`
            display: none;
        `)};
    }
    &:hover{
        background-color: ${props=>props.theme.colors.secondary};
        color:${props=>props.theme.colors.primary};
    }
    @include phone_adjustments{
        @include flexbox_column(center,center);
        padding: 6px;
        gap:2px;
        font-size: ${PxToRem(12)};
    }
    ${phoneAdjustments(css`
        ${FlexboxStructure("column","center","center")};
        padding: 6px;
        gap:2px;
        font-size: ${PxToRem(12)};
    `)};
`;

export {
    GuideRow,
    GuideCell,
    GuideButtons,
    GuideButton
}