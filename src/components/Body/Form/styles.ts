import styled, { css } from "styled-components";
import { FlexboxStructure, H2BlueStyle, mediaAdjustments, phoneAdjustments, PxToRem } from "../../../theme/styles";
import { isExportSpecifier } from "typescript";

const FormBase = styled.section`
    width: 100%;
    padding: 3% 12%;
    background-color: ${props => props.theme.colors.primary};
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
    gap: 40px;
    ${mediaAdjustments(css`
        width: 100%;
        padding: 1% 2%;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: 30px;
    `)};
    ${phoneAdjustments(css`
        width: 100%;
        padding: 4%;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: 20px;
    `)};
`;

const FormStructure = styled.form`
    width: 100%;
    padding: 60px 20px;
    background-color: ${props => props.theme.colors.white};
    font-size: ${PxToRem(20)};
    border-radius: 1rem;
    gap: 70px;
    ${mediaAdjustments(css`
        padding: 40px 12px;
    `)};
    ${phoneAdjustments(css`
        padding: 2px 6px;
    `)};
    h2{
        ${H2BlueStyle};
        padding: 18px 10px;
        ${phoneAdjustments(css`
            font-size: ${PxToRem(28)};
        `)};
    }


`;

const FormFieldset = styled.fieldset`
    border: none;
    padding: 30px 60px;
    ${mediaAdjustments(css`
        padding: 15px 30px;
    `)};
    ${phoneAdjustments(css`
        padding: 6px 14px;
    `)};
    
`;

const FormLine = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
        "etiqueta campo"
        "error error";
    margin-bottom: 16px;
    ${phoneAdjustments(css`
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3,1fr);
        grid-template-areas: 
            "etiqueta"
            "campo"
            "error";
        margin-bottom:8px;
    `)};
    &:last-child {
        ${FlexboxStructure("column","none","center")};
        padding-top: 2%;
    }
`;

const FormLabel = styled.label`
    grid-area: etiqueta;
    width: 300px;
    font-size: ${PxToRem(22)};
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    ${phoneAdjustments(css`
        font-size: ${PxToRem(16)};
    `)};
`;

const FormInput = styled.input`
    grid-area: campo;
    flex-grow: 1;
    font-size: ${PxToRem(22)};
    text-transform: uppercase;
    border: 3px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
    font-weight: 600;

    
    ${phoneAdjustments(css`
        font-size: ${PxToRem(16)};
    `)};

    .was-validated input:invalid,
    .was-validated select:invalid {
        border: 3px solid ${props=>props.theme.colors.wrong};
    }

    .was-validated input:valid,
    .was-validated select:valid {
        border: 3px solid ${props=>props.theme.colors.valid};
    }
`;

const FormSelect = styled.select`
    grid-area: campo;
    flex-grow: 1;
    font-size: ${PxToRem(22)};
    text-transform: uppercase;
    border: 3px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
    font-weight: 600;
    ${phoneAdjustments(css`
        font-size: ${PxToRem(16)};
    `)};
`;

const FormFeedback = styled.div`
    display: none;

`;

const FormButtonSubmit = styled.input`
    grid-area: campo;
    flex-grow: 1;
    font-size: ${PxToRem(26)};
    text-transform: uppercase;
    border: 3px solid  ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
    font-weight: 700;
    transition: background-color 0.4s ease-in-out, 
        ${props=>props.theme.hovers.transition};
    &:hover{
        border: 3px solid  ${props => props.theme.colors.white};
        color:${props => props.theme.colors.secondary};
        background-color:${props => props.theme.colors.primary};
    }
`;

const FormDecoration = styled.article`
    padding: 2% 12%;
    ${FlexboxStructure("row","center","center")};
    img{
        width: 400px;
    }
    ${mediaAdjustments(css`
        display: none;
    `)};
    ${phoneAdjustments(css`
        display: none;
    `)};
`;



export {
    FormBase,
    FormStructure,
    FormFieldset,
    FormLine,
    FormLabel,
    FormInput,
    FormSelect,
    FormButtonSubmit,
    FormDecoration,
    FormFeedback
}