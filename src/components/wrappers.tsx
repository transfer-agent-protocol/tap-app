import styled from "styled-components";

const FullWidth = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;
    width: auto;
    min-height: 100vh;
    padding: 0;
`;

const Nav = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    width: 100%;
    max-width: 750px;
    height: 4rem;
    padding: 0.5rem;
`;

const Logotype = styled.span`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: center;
	width: 7.75rem;
	text-align: left;
	padding-left: 0.3rem;
	font-weight: 600;
`
const Main = styled.main`
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    align-self: center;
    justify-content: flex-start;
    flex: 1;
    width: 100%;
	max-width: 1400px;
    height: auto;
	padding: 0.5rem;

    @media only screen and (max-width: 820px) {
        width: 100%;
    }
    /** Generic tablet and equivalent devices */
    @media only screen and (max-width: 768px) {
        margin: 0;
    }
    /** iPhone portrait mode and equivalent devices */
    @media only screen and (max-width: 512px) {
        margin: 0 auto;
    }

    & mark {
        color: ${({ theme }) => theme.colors.accent};
        background-color: transparent;
    }
`;

const Heading = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    align-self: center;
    text-align: center;
    margin: 9rem 0 2.75rem 0;

    /** iPhone portrait mode and equivalent devices */
    @media only screen and (max-width: 768px) {
        margin: 4rem 0;
    }

    /** iPhone portrait mode and equivalent devices */
    @media only screen and (max-width: 512px) {
        margin: 2rem 0;
    }
`;

const Content = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    align-self: center;
    justify-content: flex-start;
    flex: 1;
    width: auto;
    max-width: 1280px;
    height: auto;
    margin: 0 auto;

    /** iPad Air and equivalent devices */
    @media (max-width: 820px) {
        width: 100%;
    }
    /** Generic tablet and equivalent devices */
    @media (max-width: 768px) {
        align-items: center;
    }
`;

const Article = styled.article`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    align-self: flex-start;
    justify-content: flex-start;
    flex: 1;
    width: auto;
    max-width: 46rem;
    height: auto;
    margin: 0 auto;
    text-align: left;

    /** iPad Air and equivalent devices */
    @media (max-width: 820px) {
        width: 100%;
    }
    /** Generic tablet and equivalent devices */
    @media (max-width: 768px) {
        width: 98%;
        align-items: center;
    }
    /** iPhone portrait mode and equivalent devices */
    @media screen and (max-width: 512px) {
        width: 96%;
    }
`;

const FooterWrapper = styled.footer`
    display: flex;
    flex-flow: row nowrap;
    flex-shrink: 0;
    align-items: flex-start;
    justify-content: flex-start;
    align-self: flex-start;
    width: 100%;
    margin: 8rem 0 4rem 0;
    padding: 4rem 0 4rem 0;
    border-top: 0.5px dashed ${({ theme }) => theme.colors.outline};
`;

const FooterContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.618rem;
    width: 60%;
    align-items: start;
    justify-items: start;
    justify-content: start;

    /** iPhone portrait mode and equivalent devices */
    @media only screen and (max-width: 475px) {
        grid-template-columns: repeat(1, 1fr);
    }

    p {
        font-size: ${({ theme }) => theme.fontSizes.baseline};
        margin: 0;

        /** iPad portrait mode and equivalent devices */
        @media only screen and (max-width: 768px) {
            font-size: ${({ theme }) => theme.fontSizes.baseline};
        }
    }
`;

const FooterAside = styled.aside`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    width: 100%;
    margin: 0;

    /** iPhone portrait mode and equivalent devices */
    @media only screen and (max-width: 475px) {
        font-size: ${({ theme }) => theme.fontSizes.small};
    }

    p {
        font-size: ${({ theme }) => theme.fontSizes.baseline};
        margin: 0;

        /** iPhone portrait mode and equivalent devices */
        @media only screen and (max-width: 475px) {
            font-size: ${({ theme }) => theme.fontSizes.small};
        }
    }
`;

export { FullWidth, Nav, Logotype, Main, Heading, Content, Article, FooterWrapper, FooterContent, FooterAside };