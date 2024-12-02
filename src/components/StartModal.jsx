import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	NextUIProvider,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

export const StartModal = ({ isOpen, onOpenChange, name, setName }) => {
	const [value, setValue] = useState("");

	useEffect(() => {
		if (!name) setValue("");
	}, [name]);

	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			backdrop="blur"
			placement="top-center"
		>
			<NextUIProvider className="dark text-foreground bg-background">
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								Nomeie o seu projeto
							</ModalHeader>
							<ModalBody className="flex flex-row mb-2">
								<Input
									maxLength={50}
									autoFocus
									size="lg"
									variant="bordered"
									value={value}
									onValueChange={setValue}
									onKeyDown={(e) => {
										if (e.target?.value && e.key === "Enter") {
											onClose();
											setName(value);
										}
									}}
								/>
								<Button
									size="lg"
									color="primary"
									onPress={() => {
										onClose();
										setName(value);
									}}
								>
									Continuar
								</Button>
							</ModalBody>
						</>
					)}
				</ModalContent>
			</NextUIProvider>
		</Modal>
	);
};
