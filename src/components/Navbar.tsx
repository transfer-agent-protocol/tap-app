import { Nav, Logotype } from "./wrappers";
import { LogoRouter, StyledA } from "./buttons";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	return (
		<Nav>
			<LogoRouter>
				<Link href="/">
					<Image src="/tap-glyph.svg" alt="Transfer Agent Protocol" width={48} height={48} />
				</Link>
				<Logotype>Transfer Agent Protocol_</Logotype>
			</LogoRouter>
			<span>
				<StyledA>
					<Link href="https://github.com/transfer-agent-protocol/tap-cap-table" target="_blank ">
						<Image src="/icons/github.svg" alt="TAP Cap Table Github" width={32} height={32} />
					</Link>
				</StyledA>
				<StyledA>
					<Link href="https://coda.io/d/_dFoHg0h07Et/Transfer-Agent-Protocol_sua17" target="_blank">
						<Image src="/icons/docs.svg" alt="Documentation" width={32} height={32} />
					</Link>
				</StyledA>
				<StyledA>
					<Link href="https://youtube.com/@transfer-agent-protocol" target="_blank">
						<Image src="/icons/youtube.svg" alt="YouTube Videos" width={32} height={32} />
					</Link>
				</StyledA>
			</span>
		</Nav>
	);
};