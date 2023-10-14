import Script from "next/script";
import { Heading, Content, TallyWrapper, Credits } from "../components/wrappers";
import { H1, H2, Blockquote, P } from "../components/typography";

const TallyStyles = {
	width: "100%",
	height: "61.8rem",
	marginHeight: 0,
	marginWidth: 0,
	frameBorder: 0,
	border: "none",
};

export default function Home() {
	return (
		<Content>
			<Heading>
				<H1>Onchain equity protocol.</H1>
				<P>Onramp for in-demand tokenized real world assets.</P>
				<P>Permissionless. Open source. Compliant with transfer agent regulation in the US.</P>
			</Heading>
			<Blockquote>
				<P>Crypto deserves <mark>compliant infrastructure</mark> for <mark>tokenized capital markets</mark>. We believe it must be truly open, free, and user-centric.</P>
				<P>Introducing an <mark>open source onchain equity protocol</mark> to build web3 equivalents of transfer agents.</P>
				<P>This infra lets you mint performant <mark>equity cap tables</mark> onchain.</P>
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
				<iframe data-tally-src="https://tally.so/r/w2aGPD?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" style={TallyStyles} title="Build with us"></iframe>
			</TallyWrapper>
		</Content>
	);
}
