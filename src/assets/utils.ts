const steps = [
	{
		id: 0,
		question: "O produto é conhecido internacionalmente?",
		example:
			"Vamos supor que o seu produto está relacionado a Samurais, a história deles tem uma abrangência mundial.",
		yesPoints: 5,
		noPoints: 0,
	},
	{
		id: 1,
		question: "O produto esteve em alta nos últimos anos em outras mídias?",
		example: 'Em 2024 estreiou a série "Xógum: A Gloriosa Saga do Japão".',
		yesPoints: 3,
		noPoints: 0,
	},
	{
		id: 2,
		question: "O tema/gênero do produto esteve em alta nos últimos anos?",
		example: "A temática guerras históricas quase sempre está em alta.",
		yesPoints: 2,
		noPoints: 0,
	},
	{
		id: 3,
		question:
			"Existe algum jogo recém-lançado focado no produto? (Últimos 5 anos)",
		example: 'Se tratando de samurais, logo pensamos em "Ghost of Tsushima."',
		yesPoints: 0,
		noPoints: 3,
	},
	{
		id: 4,
		question: "Alcançou um público grande ou obteve um feedback positivo?",
		example: "Foi um jogo extremamente acalamado pela crítica e por jogadores.",
		yesPoints: 0,
		noPoints: 1,
		condition: {
			dependsOn: 3,
			expectedAnswer: "yes",
		},
	},
	{
		id: 5,
		question: "Existe uma demanda por um jogo do produto?",
		example:
			"Apesar da demanda ser suprida regularmente, ela ainda está crescendo.",
		yesPoints: 3,
		noPoints: 0,
	},
	{
		id: 6,
		question: "O público-alvo do produto em outras mídias é grande?",
		example:
			"O interesse pela história e cultura japonesa é bem significativo no ocidente.",
		yesPoints: 1,
		noPoints: 0,
	},
	{
		id: 7,
		question: "O público-alvo de um jogo do produto é grande?",
		example:
			"Abrange uma ampla faixa etária e com interesses em comum por jogos de luta, ação e aventura.",
		yesPoints: 3,
		noPoints: 0,
	},
];

export { steps };
