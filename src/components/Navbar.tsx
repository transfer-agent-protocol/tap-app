import { Nav } from "./wrappers";
import { LogoRouter, StyledA } from "./buttons";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	return (
		<Nav>
			<LogoRouter>
				<Link href="/">
					<Image src="/tap-glyph.svg" alt="Transfer Agent Protocol" width={32} height={32} />
				</Link>
			</LogoRouter>
			<span>
				<StyledA>
					<Link href="/join">Join</Link>
				</StyledA>
			</span>
		</Nav>
	);
};