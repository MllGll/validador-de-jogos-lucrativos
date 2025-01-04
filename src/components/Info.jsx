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

	const listItemStyles =
		"text-2xl max-2xl:text-xl max-xl:text-base max-lg:text-sm flex gap-2";

	return (
		<section className="flex-grow flex flex-col mx-40 max-md:mx-20 max-sm:mx-5 mt-20 max-lg:mt-10 max-sm:mt-5">
			<div className="flex justify-between items-center">
				<span className="text-6xl max-2xl:text-5xl max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-base font-bold">
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
			<span className="text-2xl max-2xl:text-xl max-lg:text-lg max-md:text-base max-sm:text-sm font-light">
				Cada pergunta foca em aspectos distintos do produto, esse sistema de
				pontuação ajuda a medir o valor de mercado e o potencial de sucesso.
				Foram levados em conta fatores como popularidade, relevância e interesse
				do público.
			</span>
			<Card className="info-card gap-6 max-sm:gap-3 p-6 max-sm:p-0 mt-16 mb-24 max-lg:my-8 max-sm:my-4 border-none">
				<span className={listItemStyles}>
					• O produto é conhecido internacionalmente?
					<Chip size="lg" color="success" variant="flat">
						Caso sim, <b>+5 pontos</b>
					</Chip>
				</span>
				<span className={listItemStyles}>
					• O produto esteve em alta nos últimos anos em outras mídias?
					<Chip size="lg" color="success" variant="flat">
						Caso sim, <b>+3 pontos</b>
					</Chip>
				</span>
				<span className={listItemStyles}>
					• O tema/gênero do produto esteve em alta nos últimos anos? (Últimos 5
					anos)
					<Chip size="lg" color="success" variant="flat">
						Caso sim, <b>+2 pontos</b>
					</Chip>
				</span>
				<span className={listItemStyles}>
					• Existe algum jogo recém-lançado focado no produto?
					<Chip size="lg" color="danger" variant="flat">
						Caso não, <b>+3 pontos</b>
					</Chip>
				</span>
				<span className={`${listItemStyles} ml-16 max-sm:ml-0`}>
					• Alcançou um público grande ou obteve um feedback positivo?
					<Chip size="lg" color="danger" variant="flat">
						Caso não, <b>+1 ponto</b>
					</Chip>
				</span>
				<span className={listItemStyles}>
					• Existe uma demanda por um jogo do produto?
					<Chip size="lg" color="success" variant="flat">
						Caso sim, <b>+3 pontos</b>
					</Chip>
				</span>
				<span className={listItemStyles}>
					• O público-alvo do produto em outras mídias é grande?
					<Chip size="lg" color="success" variant="flat">
						Caso sim, <b>+1 ponto</b>
					</Chip>
				</span>
				<span className={listItemStyles}>
					• O público-alvo de um jogo do produto é grande?
					<Chip size="lg" color="success" variant="flat">
						Caso sim, <b>+3 pontos</b>
					</Chip>
				</span>
			</Card>
			<span className="max-lg:text-sm">
				Caso tenha sugestões de alterações ou melhorias, envie um email para
				<b> marcellogallante@gmail.com</b>
			</span>
		</section>
	);
}

export default Info;
