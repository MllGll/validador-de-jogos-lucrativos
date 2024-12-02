import { Button, Card, Chip, Divider } from "@nextui-org/react";
import { MoveLeft } from "lucide-react";
import { useEffect } from "react";

function Info({ setShowInfo }) {
	const handleKeyDown = (event) => {
		if (event.key === "Escape") {
			setShowInfo((prevState) => !prevState);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<section className="flex-grow flex flex-col mx-40 mt-20">
			<div className="flex justify-between items-center">
				<span className="text-6xl font-bold">
					Entenda como é feito o cálculo
				</span>
				<Button
					onPress={() => setShowInfo(false)}
					variant="light"
					size="lg"
					radius="none"
					startContent={<MoveLeft />}
				>
					Voltar
				</Button>
			</div>
			<Divider className="my-4" />
			<span className="text-2xl  font-light">
				Cada pergunta foca em aspectos distintos do produto, esse sistema de
				pontuação ajuda a medir o valor de mercado e o potencial de sucesso.
				Foram levados em conta fatores como popularidade, relevância e interesse
				do público.
			</span>
			<Card className="info-card gap-6 p-6 mt-16 mb-24 border-none">
				<span className="text-2xl flex gap-2">
					• O produto é conhecido internacionalmente?
					<Chip size="lg" color="success" variant="flat">
						Caso sim, <b>+5 pontos</b>
					</Chip>
				</span>
				<span className="text-2xl flex gap-2">
					• O produto esteve em alta nos últimos anos em outras mídias?
					<Chip size="lg" color="success" variant="flat">
						Caso sim, <b>+3 pontos</b>
					</Chip>
				</span>
				<span className="text-2xl flex gap-2">
					• O tema/gênero do produto esteve em alta nos últimos anos? (Últimos 5
					anos)
					<Chip size="lg" color="success" variant="flat">
						Caso sim, <b>+2 pontos</b>
					</Chip>
				</span>
				<span className="text-2xl flex gap-2">
					• Existe algum jogo recém-lançado focado no produto?
					<Chip size="lg" color="danger" variant="flat">
						Caso não, <b>+3 pontos</b>
					</Chip>
				</span>
				<span className="text-2xl flex gap-2 ml-16">
					• Alcançou um público grande ou obteve um feedback positivo?
					<Chip size="lg" color="danger" variant="flat">
						Caso não, <b>+1 ponto</b>
					</Chip>
				</span>
				<span className="text-2xl flex gap-2">
					• Existe uma demanda por um jogo do produto?
					<Chip size="lg" color="success" variant="flat">
						Caso sim, <b>+3 pontos</b>
					</Chip>
				</span>
				<span className="text-2xl flex gap-2">
					• O público-alvo do produto em outras mídias é grande?
					<Chip size="lg" color="success" variant="flat">
						Caso sim, <b>+1 ponto</b>
					</Chip>
				</span>
				<span className="text-2xl flex gap-2">
					• O público-alvo de um jogo do produto é grande?
					<Chip size="lg" color="success" variant="flat">
						Caso sim, <b>+3 pontos</b>
					</Chip>
				</span>
			</Card>
			<span>
				Caso tenha sugestões de alterações ou melhorias, envie um email para
				<b> marcellogallante@gmail.com</b>
			</span>
		</section>
	);
}

export default Info;
