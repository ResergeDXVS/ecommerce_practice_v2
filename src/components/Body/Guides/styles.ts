import styled, { css } from "styled-components";
import { FlexboxStructure, H3BlueStyle, mediaAdjustments, phoneAdjustments, PxToRem } from "../../../theme/styles";

const GuideBase = styled.section`
    ${FlexboxStructure("column","center","stetch")};
    width: 100%;
    padding: 3% 6%;
    background-color: ${props=>props.theme.colors.primary};
    box-sizing: border-box;
    min-height:65vh;
    @include phone_adjustments{
        padding: 2%;
    }
    ${mediaAdjustments(css`
        padding: 40px 12px;
    `)};
    ${phoneAdjustments(css`
        padding: 2%;
    `)};
    div{
        h3{
            ${H3BlueStyle};
            flex: 1;
            margin: 0;
            text-align: center;
            padding:24px;
            ${phoneAdjustments(css`
                font-size: ${PxToRem(28)};
                padding: 2%;
            `)};
        }
    }
`;

const GuideTable = styled.table`
    width: 100%;
    table-layout: fixed;
    background-color: ${props=>props.theme.colors.white};
    border-collapse: collapse;
`;

const GuideTHead = styled.thead`
    tr{
        height: 100%;
        text-align: center;
        vertical-align: middle;
        padding: 1rem;
        font-size: ${PxToRem(20)};
        th{
            color:${props=>props.theme.colors.primary};
            background-color: ${props=>props.theme.colors.white};
            height: 6rem;
            text-align: center;
            vertical-align: middle;
            padding: 0.3rem;
            strong{
                font-size: ${PxToRem(20)};
                ${mediaAdjustments(css`
                    font-size: ${PxToRem(16)};
                `)};
                ${phoneAdjustments(css`
                    font-size: ${PxToRem(12)};
                `)};
            }
            ${phoneAdjustments(css`
                height: 3rem;
            `)};
        }
        ${phoneAdjustments(css`
            height: 3rem;
        `)};
    }
`;

export {
    GuideBase,
    GuideTable,
    GuideTHead
}