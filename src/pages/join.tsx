import Head from "next/head";
import { Content, Heading } from "../components/wrappers";
import { H1, Blockquote } from "../components/typography";

export default function Join() {
	return (
		<Content>
			<Head>
				<title>Join Us</title>
			</Head>
			<Heading>
				<H1>Join our 2nd founding cohort of builders</H1>
			</Heading>
			<Blockquote>
				Read our <a href="https://coda.io/d/Transfer-Agent-Protocol_drhpwRhDok-/Transfer-Agent-Protocol_sua17#_lu_Fh">docs</a>, run our <a href="https://github.com/poet-network/tap-cap-table">code</a>, tell us what brought you here. We'd love your help improving this stack and infra.
			</Blockquote>
		</Content>
	);
}
