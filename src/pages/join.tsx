import Head from "next/head";
import { Content, Heading } from "../components/wrappers";
import { H1, Blockquote, P } from "../components/typography";

export default function Join() {
	return (
		<Content>
			<Head>
				<title>Join</title>
			</Head>
			<Heading>
				<H1>There is nothing here yet.</H1>
			</Heading>
			<Blockquote>
				And Liberty for All
			</Blockquote>
			<P>
				- they said
			</P>
		</Content>
	);
}
