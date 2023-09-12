import { Content, FooterAside, FooterContent, FooterWrapper, Heading } from "../components/wrappers";
import { H1, P } from "../components/typography";

export default function Home() {
	return (
		<Content>
			<Heading>
				<H1>Poet and TAP frontend scaffold.</H1>
			</Heading>
			<P>
				Use this to spin up a new frontend or a landing page for Poet and TAP in a few minutes.
			</P>
			<FooterWrapper>
				<FooterContent>
					<P>
						These
					</P>
					<P>
						Can
					</P>
					<P>
						All
					</P>
					<P>
						Be
					</P>
					<P>
						Links
					</P>
					<P>
						🫡
					</P>
				</FooterContent>
				<FooterAside>
					And more info can go here.
				</FooterAside>
			</FooterWrapper>
		</Content>
	);
}
