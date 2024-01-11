import { Nav, Logotype } from "./wrappers";
import { LogoRouter, StyledA } from "./buttons";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	return (
		<Nav>
			<LogoRouter>
				<Link href="/">
					<Image src="/tap-logo.svg" alt="Transfer Agent Protocol" width={48} height={48} />
				</Link>
				<Logotype>Transfer Agent Protocol</Logotype>
			</LogoRouter>
			<span>
				<StyledA>
					<Link href="https://docs.transferagentprotocol.xyz" target="_blank">
						<Image src="/icons/docs.svg" alt="Documentation" width={32} height={32} />
					</Link>
				</StyledA>
				<StyledA>
					<Link href="https://github.com/transfer-agent-protocol/tap-cap-table" target="_blank ">
						<Image src="/icons/github.svg" alt="TAP Cap Table Github" width={32} height={32} />
					</Link>
				</StyledA>
			</span>
		</Nav>
	);
};