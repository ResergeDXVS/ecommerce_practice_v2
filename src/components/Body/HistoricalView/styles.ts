import styled, { css } from "styled-components";
import { FlexboxStructure, H1BlueStyle, mediaAdjustments, phoneAdjustments, PxToRem } from "../../../theme/styles";

const HistoricalBase = styled.section`
    width: 50%;
    height: auto;
    background-color:${props=>props.theme.colors.primary};
    padding: 2.5rem 1.5rem;
    box-sizing: border-box;
    position: fixed;
    top: 50%;
    left: 50%;
    box-shadow: 0px 0px 2px 2px ${props=>props.theme.colors.secondary};
    transition: ${props=>props.theme.hovers.transition};
    transform: translate(-50%, 100%);
    opacity: 0; 

    ${mediaAdjustments(css`
        width: 60%;
    `)};
    ${phoneAdjustments(css`
        width: 75%;
    `)};
`;

const HistoricalTop = styled.div`
    ${FlexboxStructure("row","space-between","center")};
    padding: 3% 2%;
    height: 15%;
    h2{
        width: 100%;
        ${H1BlueStyle};
        text-align: center;
        font-size: ${PxToRem(24)};
        box-sizing: border-box;
        line-height: 1;
        margin: 0;
        ${phoneAdjustments(css`
            font-size: ${PxToRem(28)};
        `)};
        b{
            font-size: ${PxToRem(24)};
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