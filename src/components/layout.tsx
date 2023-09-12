import Navbar from "./Navbar";
import { FullWidth, Main } from "./wrappers";
interface Props {
	children: React.ReactNode;
	className?: string;
}

export default function Layout({ children }: Props) {
	return (
		<FullWidth>
			<Navbar />
			<Main>{children}</Main>
		</FullWidth>
	);
}