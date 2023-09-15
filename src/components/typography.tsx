import styled from "styled-components";

const H1 = styled.h1`
    max-width: 52rem;
    font-size: ${({ theme }) => theme.fontSizes.H1};
    line-height: ${({ theme }) => theme.lineHeights.H1};
    font-weight: 600;
	text-align: left;
    margin-bottom: 4rem;
    padding: 0;

    /** iPad portrait mode and equivalent devices */
    @media only screen and (max-width: 768px) {
        font-size: 3.5rem;
    }

    /** iPhone portrait mode and equivalent devices */
    @media only screen and (max-width: 512px) {
        font-size: 2.5rem;
    }
`;

const H2 = styled.h2`
    position: relative;
    max-width: 52rem;
    font-size: ${({ theme }) => theme.fontSizes.H2};
    line-height: ${({ theme }) => theme.lineHeights.H2};
    font-weight: 600;
	text-align: left;
    margin-bottom: 4rem;
    padding: 0;

    /** iPad portrait mode and equivalent devices */
    @media only screen and (max-width: 768px) {
        font-size: 2rem;
    }
`;

const H3 = styled.h3`
    max-width: 40rem;
    font-size: ${({ theme }) => theme.fontSizes.H3};
    line-height: ${({ theme }) => theme.lineHeights.H3};
    font-weight: 600;
	text-align: center;
    margin-bottom: 4rem;
    padding: 0;

    /** iPad portrait mode and equivalent devices */
    @media only screen and (max-width: 768px) {
        font-size: 2rem;
    }

    /** iPhone portrait mode and equivalent devices */
    @media only screen and (max-width: 512px) {
        font-size: 1.618rem;
        line-height: 1.4rem;
    }
`;

// blockquote element with a border-left
const Blockquote = styled.blockquote`
    position: relative;
    max-width: 38.5rem;
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: 400;
	text-align: left;
    line-height: 1.58rem;
    word-wrap: break-word;
    padding: 0;
    margin: 0 0 4rem 0;

    &::before {
        content: "";
        position: absolute;
        font-size: 4rem;
        width: 0.2rem;
        height: 80%;
        background-color: ${({ theme }) => theme.colors.main};
        border-radius: none;
        top: 0.618rem;
        left: -1.618rem;

        /** iPhone portrait mode and equivalent devices */
        @media only screen and (max-width: 475px) {
            content: no-close-quote;
        }
    }

    &::after {
        content: no-close-quote;
        position: absolute;
        font-size: 4rem;
        top: -1.618rem;
        left: -2.618rem;
    }
`;

const P = styled.p`
    max-width: 40rem;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    letter-spacing: 0.02rem;
    font-weight: 400;
    line-height: 1.618rem;
    word-wrap: break-word;
    padding: 0;
    margin: 0 0 1.58rem 0;

    /** iPad portrait mode and equivalent devices */
    @media only screen and (max-width: 768px) {
        max-width: 30rem;
    }

    /** iPhone portrait mode and equivalent devices */
    @media only screen and (max-width: 512px) {
        max-width: 100%;
    }
`;

const Label = styled.label`
    max-width: 40rem;
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: 400;
    line-height: 1.58rem;
    word-wrap: break-word;
    text-align: center;
    padding: 0;
    margin: 0 auto;

    /** iPad portrait mode and equivalent devices */
    @media only screen and (max-width: 768px) {
        max-width: 30rem;
        text-align: justify;
    }

    /** iPhone portrait mode and equivalent devices */
    @media only screen and (max-width: 512px) {
        max-width: 100%;
    }
`;

const OrderedList = styled.ol`
	width: auto;
	font-size: 1.5rem;
	font-weight: 600;
    margin-block-start: 2rem;
    margin-block-end: 1rem;
    margin-inline-start: 6.618%;
    margin-inline-end: 1rem;
    padding-inline-start: 1rem;
`;

export { H1, H2, H3, Blockquote, P, Label, OrderedList };
