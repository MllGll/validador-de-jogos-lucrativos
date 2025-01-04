import { Button, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { steps } from "../assets/utils";
import Form from "../components/Form";
import Info from "../components/Info";
import { StartModal } from "../components/StartModal";

function Home() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [name, setName] = useState("");
	const [showInfo, setShowInfo] = useState(false);
	const [visibleSteps, setVisibleSteps] = useState(
		steps.filter((step) => !step.condition),
	);
	const [activeStep, setActiveStep] = useState(visibleSteps[0].id);
	const [answers, setAnswers] = useState({});
	const [result, setResult] = useState(null);

	const handleReset = () => {
		setActiveStep(visibleSteps[0].id);
		setAnswers({});
		setResult(null);
		setName("");
		onOpen();
	};

	const formProps = {
		name,
		visibleSteps,
		setVisibleSteps,
		activeStep,
		setActiveStep,
		answers,
		setAnswers,
		result,
		setResult,
	};

	return (
		<>
			<section className="flex-grow flex flex-col items-center justify-center text-center">
				<span className="title text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-2xl max-sm:text-lg font-bold leading-normal">
					Validador de Ideias de Jogos Lucrativos
				</span>
				<span className="text-2xl max-xl:text-lg max-md:text-base max-md:px-4 text-default-500 mb-8 font-light">
					Responda ao formulário e descubra o quanto sua ideia pode ter
					potencial de lucro.
				</span>
				<div className="flex max-sm:flex-col max-sm:w-[100%] max-sm:px-4 gap-2">
					<Button
						onPress={!name ? onOpen : handleReset}
						color="primary"
						variant="shadow"
						size="lg"
					>
						{!name ? "Iniciar" : "Reiniciar"}
					</Button>
					<StartModal
						isOpen={isOpen}
						onOpenChange={onOpenChange}
						name={name}
						setName={setName}
					/>
					<Button onPress={() => setShowInfo(true)} size="lg" variant="ghost">
						Entenda como é feito o cálculo
					</Button>
				</div>
				<div
					className={
						name
							? "expand-enter expand-enter-active"
							: "expand-exit expand-exit-active"
					}
				>
					<Form {...formProps} />
				</div>
			</section>
			{showInfo && (
				<div className="info">
					<Info setShowInfo={setShowInfo} />
				</div>
			)}
		</>
	);
}

export default Home;
