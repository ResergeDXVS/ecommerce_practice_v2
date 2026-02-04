import styled, { css } from "styled-components";
import { FlexboxStructure, H1BlueStyle, mediaAdjustments, phoneAdjustments, PxToRem } from "../../../theme/styles";

const HistoricalBase = styled.section`
    ${FlexboxStructure("column","space-between","center")}
    width: 100%;
    min-height: 60vh;
    height: auto;
    background-color:${props=>props.theme.colors.primary};
    padding: 10% 15%;
    box-sizing: border-box;

    ${mediaAdjustments(css`
        padding: 5% 10%;
        ${FlexboxStructure("column","center","center")};
        min-height: 40vh;
    `)};
    ${phoneAdjustments(css`
        padding: 2.5% 10%;
        ${FlexboxStructure("column","center","center")};
        min-height: 40vh;
    `)};
`;

const HistoricalTop = styled.div`
    ${FlexboxStructure("row","space-between","center")};
    background-color:${props=>props.theme.colors.primary};
    padding: 3% 2%;
    height: 15%;

    ${mediaAdjustments(css`
        padding: 4% 4%;
    `)};
    ${phoneAdjustments(css`
        padding: 4% 4%;
    `)};
    h2{
        width: 100%;
        ${H1BlueStyle};
        text-align: center;
        font-size: ${PxToRem(36)};
        box-sizing: border-box;
        line-height: 1;
        margin: 0;
        ${phoneAdjustments(css`
            font-size: ${PxToRem(28)};
        `)};
        b{
            font-size: ${PxToRem(36)};
            ${phoneAdjustments(css`
                font-size: ${PxToRem(28)};
            `)};
        }
    }
`;

const HistoricalTable = styled.table`
    padding:2%;
    width: 100%;
    table-layout: fixed;
    background-color:${props=>props.theme.colors.white};
    border-collapse: collapse;
    height: auto;
    thead{
        tr{
            height: 100%;
            text-align: center;
            vertical-align: middle;
            padding: 1rem;
            font-size: ${PxToRem(20)};
            th{
                color:${props=>props.theme.colors.primary};
                background-color: ${props=>props.theme.colors.white};
                text-align: center;
                vertical-align: middle;
                padding: 0.3rem;
                strong{
                    font-size: ${PxToRem(18)};
                }
                @include phone_adjustments{
                    height: 3rem;
                }
                ${phoneAdjustments(css`
                    height: 3rem;
                `)};
            }
            ${phoneAdjustments(css`
                height: 3rem;
            `)};
        }
    }
    tbody{
        tr{
            height: 100%;
            text-align: center;
            vertical-align: middle;
            padding: 1rem;
            font-size: ${PxToRem(20)};
            td{
                font-size: ${PxToRem(18)};
                font-weight: 500;
            }
        }
    }
`;


export {
    HistoricalBase,
    HistoricalTop,
    HistoricalTable
};