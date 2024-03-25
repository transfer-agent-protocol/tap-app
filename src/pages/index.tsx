import { Heading, Content, StyledTable } from "../components/wrappers";
import { H1, H2, P } from "../components/typography";

export default function Home() {
	return (
		<Content>
			<Heading>
				<H1>Onchain cap tables.</H1>
				<P>Tokenize RWAs, and handle post-trade settlement.</P>
				<P>Based on the <a href="https://www.opencaptablecoalition.com/" target="_blank">Open Cap Table</a> format, transfer agent protocol is being used by SEC-registered entities.</P>
				<a href="https://paragraph.xyz/@thatalexpalmer/rwa-tokenization-protocol-stack" target="_blank" rel="noopener">Read why this exists</a>
			</Heading>
			<H2>
				Deployments:
			</H2>
			<P>
				One of the main implementations of this infra is currently being developed on <a href="https://plumenetwork.xyz" target="_blank">Plume</a> by <a href="https://warpcast.com/thatalexpalmer.eth" target="_blank">thatalexpalmer.eth</a>
			</P>
			<StyledTable>
				<thead>
					<tr>
						<th>Name</th>
						<th>Address</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>TAP Admin</td>
						<td><a href="https://plume-testnet.explorer.caldera.xyz/address/0x366aA809015061C101983900d0c2ebf7d71B96AF">0x366aA809015061C101983900d0c2ebf7d71B96AF</a></td>
					</tr>
					<tr>
						<td>CapTableFactory</td>
						<td><a href="https://plume-testnet.explorer.caldera.xyz/address/0xB753930229Bf1Fe02189b4FEb20678Ba44312877" target="_blank" rel="noopener noreferrer">0xB753930229Bf1Fe02189b4FEb20678Ba44312877</a></td>
					</tr>
					<tr>
						<td>CapTable</td>
						<td><a href="https://plume-testnet.explorer.caldera.xyz/address/0xE7f4bfa5eE90a8450Cf4f9410463C8D24102ce8A" target="_blank" rel="noopener noreferrer">0xE7f4bfa5eE90a8450Cf4f9410463C8D24102ce8A</a></td>
					</tr>
					<tr>
						<td>StockLib</td>
						<td><a href="https://plume-testnet.explorer.caldera.xyz/address/0x0d2cfD82004aeD30A4Bd4Efe7b8810Bd86a53296" target="_blank" rel="noopener noreferrer">0x0d2cfD82004aeD30A4Bd4Efe7b8810Bd86a53296</a></td>
					</tr>
					<tr>
						<td>Adjustment</td>
						<td><a href="https://plume-testnet.explorer.caldera.xyz/address/0x1E228a15a25F0bDe12132620A6aa152Baf12d36f" target="_blank" rel="noopener noreferrer">0x1E228a15a25F0bDe12132620A6aa152Baf12d36f</a></td>
					</tr>
					<tr>
						<td>DeleteContext</td>
						<td><a href="https://plume-testnet.explorer.caldera.xyz/address/0xb960D1D1c9C39C1EA7CB452Bfd45B2799edAF33E" target="_blank" rel="noopener noreferrer">0xb960D1D1c9C39C1EA7CB452Bfd45B2799edAF33E</a></td>
					</tr>
				</tbody>
			</StyledTable>


		</Content>
	);
}
