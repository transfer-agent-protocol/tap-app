import Navbar from "./Navbar";
import { FooterContent, FooterWrapper, FullWidth, Main } from "./wrappers";
import { H3 } from "./typography";
interface Props {
	children: React.ReactNode;
	className?: string;
}

export default function Layout({ children }: Props) {
	return (
		<FullWidth>
			<Navbar />
			<Main>{children}</Main>
			<FooterWrapper>
				<H3>
					## Built by
				</H3>
				<FooterContent>
					<a href="https://poet.network" target="_blank" rel="noopener noreferrer">Poet</a>
					<span>|</span>
					<a href="https://pluralenergy.co" target="_blank" rel="noopener noreferrer">Plural Energy</a>
					<span>|</span>
					<a href="https://fairmint.co" target="_blank" rel="noopener noreferrer">Fairmint</a>
				</FooterContent>
			</FooterWrapper>
		</FullWidth>
	);
}