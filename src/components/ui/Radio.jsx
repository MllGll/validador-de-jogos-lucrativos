import { VisuallyHidden, cn, useRadio } from "@nextui-org/react";

export const CustomRadio = (props) => {
	const {
		Component,
		children,
		getBaseProps,
		getWrapperProps,
		getInputProps,
		getLabelProps,
		getLabelWrapperProps,
		getControlProps,
	} = useRadio(props);

	return (
		<Component
			{...getBaseProps()}
			className={cn(
				"group inline-flex items-center hover:opacity-70 active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent",
				"cursor-pointer border-1 border-default rounded-2xl p-8",
				"data-[selected=true]:border-primary data-[selected=true]:border-3 w-[100%] h-32",
			)}
		>
			<VisuallyHidden>
				<input {...getInputProps()} />
			</VisuallyHidden>
			<span {...getWrapperProps()}>
				<span {...getControlProps()} />
			</span>
			<div {...getLabelWrapperProps()}>
				{children && (
					<span {...getLabelProps()} className="text-2xl">
						{children}
					</span>
				)}
			</div>
		</Component>
	);
};
