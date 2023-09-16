import Script from "next/script";
import { Heading, Content, TallyWrapper, Credits } from "../components/wrappers";
import { H1, H2, Blockquote, P } from "../components/typography";

const TallyStyles = {
	width: "100%",
	height: "61.8vh",
	marginHeight: 0,
	marginWidth: 0,
	frameBorder: 0,
	border: "none",
};

export default function Home() {
	return (
		<Content>
			<Heading>
				<H1>Open source onramp for in demand RWAs</H1>
			</Heading>
			<Blockquote>
				<P>Crypto deserves compliant infrastructure for tokenized capital markets. We believe it must be truly open, free, and user-centric.</P>
				<P>Introducing an open source protocol stack to build web3 equivalents of traditional transfer agents.</P>
				<a href="https://paragraph.xyz/@poetnetworkhq/rwa-tokenization-protocol-stack" target="_blank" rel="noopener noreferrer">Read the full announcement</a>
			</Blockquote>
			<H2>
				Built by
			</H2>
			<Credits>
				<a href="https://poet.network" target="_blank" rel="noopener noreferrer">Poet</a>
				<span>|</span>
				<a href="https://pluralenergy.co" target="_blank" rel="noopener noreferrer">Plural Energy</a>
				<span>|</span>
				<a href="https://fairmint.co" target="_blank" rel="noopener noreferrer">Fairmint</a>
			</Credits>
			<H2>
				Build with us
			</H2>
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
					<iframe data-tally-src="https://tally.so/r/w2aGPD?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" style={TallyStyles} title="Build with us"></iframe>
				</TallyWrapper>
			</TallyWrapper>
		</Content>
	);
}
