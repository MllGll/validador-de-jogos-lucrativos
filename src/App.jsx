import "./App.css";
import { Link, NextUIProvider } from "@nextui-org/react";
import Home from "./pages/Home";

function App() {
	return (
		<NextUIProvider className="dark text-foreground bg-background">
			<div className="flex flex-col min-h-screen">
				<Home />
				<footer className="w-full text-center py-4 bg-content1 text-default-400 max-md:text-sm">
					<p>
						Validador de Ideias de Jogos Lucrativos | Desenvolvido por{" "}
						<Link
							href="https://github.com/MllGll"
							className="text-default-400 max-md:text-sm"
						>
							<b>Marcello Gallante</b>
						</Link>
					</p>
				</footer>
			</div>
		</NextUIProvider>
	);
}

export default App;
