import { css } from "styled-components";


const LinkStyle = css`
	text-decoration: none;
	color: ${props=>props.theme.colors.white};
`;

const H1BlueStyle = css`
	font-weight: 800;
	font-size: 2.8rem;
	color: ${props=>props.theme.colors.secondary};
`;

const H2BlueStyle = css`
	font-weight: 700;
	font-size: 3.2rem;
	color: ${props=>props.theme.colors.primary};
	text-align: center;
`;

const H3BlueStyle = css`
	font-size: 3rem;
	font-weight: 800;
	color: ${props=>props.theme.colors.secondary};
`;

const PTagStyle = css`
	font-size: 1.5rem;
	font-weight: 400;
	color: ${props=>props.theme.colors.primary};
`;

const BTagStyle = css`
	font-size: 1.6rem;
	font-weight: 800;
	color: ${props=>props.theme.colors.secondary};
`;

const AFooterStyle = css`
	font-weight: 500;
	text-decoration: none;
	color: ${props=>props.theme.colors.white};
`;

const PWhiteStyle = css`
	font-weight: 500;
	color: ${props=>props.theme.colors.primary};
`;


const FlexboxStructure = (direction:"row"|"column",justify:string,align:string) => {
	return css`
		display: flex;
		flex-direction: ${direction};
		justify-content: ${justify};
		align-items: ${align};
	`;
}

const PxToRem = (px: number, base: number = 16) => {
	return `${px / base}rem`;
};


const phoneAdjustments = (styles: any) => css`
	@media screen and (max-width: 750px) {
		${styles}
	}
`;

const mediaAdjustments = (styles: any) => css`
	@media screen and (max-width: 1250px) and (min-width: 750px) {
		${styles}
	}
`;

export {
	LinkStyle,
	H1BlueStyle,
	H2BlueStyle,
	H3BlueStyle,
	PTagStyle,
	BTagStyle,
	AFooterStyle,
	PWhiteStyle,
	FlexboxStructure,
	PxToRem,
	phoneAdjustments,
	mediaAdjustments
}
