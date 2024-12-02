import { Chip } from "@nextui-org/react";

function Result({ name, result, feedback }) {
	return (
		<div className="h-full flex flex-col text-center">
			<div className="h-full flex flex-col justify-center">
				<span className="text-3xl font-normal">
					O produto "{name}" atingiu um total de {result} pontos de 20 possíveis
				</span>
				<div className="mt-2">
					<Chip
						className="feedback"
						color={feedback?.color}
						variant="bordered"
						size="lg"
					>
						{feedback?.message}
					</Chip>
				</div>
			</div>
			<p className="text-default-400">
				ⓘ Não leve o resultado como garantia de fracasso ou sucesso do seu
				projeto. As regras do formulário foram definidas com base no que
				enxergamos como mais relevante no mercado, você pode conferir os
				detalhes clicando em "Entenda como é feito o cálculo".
			</p>
		</div>
	);
}

export default Result;
