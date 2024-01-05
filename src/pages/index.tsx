import { Heading, Content, Credits } from "../components/wrappers";
import { H1, H2, Blockquote, P } from "../components/typography";

export default function Home() {
	return (
		<Content>
			<Heading>
				<H1>Onchain equity protocol.</H1>
				<P>Transfer Agent Infrastructure for tokenizing real-world assets on the blockchain.</P>
				<P>Permissionless. Open source. Compliant with transfer agent regulation in the US.</P>
			</Heading>
			<Blockquote>
				<P>Introducing an <mark>open source onchain equity protocol</mark> to build web3 equivalents of traditional transfer agents.</P>
				<P>This infra lets you mint performant <mark>equity cap tables</mark> onchain and handle post-trade settlement of tokenized RWAs.</P>
				<P>It is based on and is fully compatible with the <a href="https://www.opencaptablecoalition.com/" target="_blank">Open Cap Table</a> format.</P>
				<a href="https://paragraph.xyz/@thatalexpalmer/rwa-tokenization-protocol-stack" target="_blank" rel="noopener">Read the full announcement</a>
			</Blockquote>
			<H2>
				Built by
			</H2>
			<Credits>
				<a href="https://warpcast.com/thatalexpalmer.eth" target="_blank" rel="noopener">thatalexpalmer.eth</a>
				<span>|</span>
				<a href="https://warpcast.com/vic" target="_blank" rel="noopener">vic</a>
				<span>|</span>
				<a href="https://pluralenergy.co" target="_blank" rel="noopener">Plural Energy</a>
				<span>|</span>
				<a href="https://fairmint.co" target="_blank" rel="noopener">Fairmint</a>
			</Credits>
			<H2>
				Testnet deployments
			</H2>
			<Credits>
				<a href="https://goerli-optimism.etherscan.io/address/0x7182cc6f1d512906c794742e6a2295e1d8448e82" target="_blank" rel="noopener noreferrer">OP Goerli</a>
				<span> | </span>
				<a href="https://explorerl2new-plume-orbit-wxh1kfbvb6.t.conduit.xyz/address/0x7182cc6f1d512906C794742e6a2295E1d8448e82" target="_blank" rel="noopener noreferrer">Plume Testnet</a>
			</Credits>
		</Content>
	);
}
