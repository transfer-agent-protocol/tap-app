import Script from "next/script";
import { Heading, Content, TallyWrapper } from "../components/wrappers";
import { H1, H2, Blockquote, P } from "../components/typography";

const TallyStyles = {
	width: "100%",
	height: "90vh",
	margin: "0 auto",
	border: "none",
};

export default function Home() {
	return (
		<Content>
			<Heading>
				<H1># Open source onramp for in demand RWAs</H1>
			</Heading>
			<Blockquote>
				<H2>Crypto deserves compliant infrastructure for tokenized capital markets. We believe it must be truly open, free, and user-centric.</H2>
				<H2>Introducing an open source protocol stack to build web3 equivalents of traditional transfer agents.</H2>
			</Blockquote>
			<TallyWrapper>
				<Script
					src="https://tally.so/widgets/embed.js"
					onLoad={() => {
						console.log("Tally is ready to receive data");
					}}
					onError={() => {
						console.log("Tally failed to load");
					}}
				/>
				<TallyWrapper>
					<iframe data-tally-src="https://tally.so/r/w2aGPD?transparentBackground=1" style={TallyStyles} title="Build with us"></iframe>
				</TallyWrapper>
			</TallyWrapper>
		</Content>
	);
}
