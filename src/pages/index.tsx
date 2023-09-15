import { Heading, Content } from "../components/wrappers";
import { H1, H2, Blockquote, P } from "../components/typography";

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
		</Content>
	);
}
