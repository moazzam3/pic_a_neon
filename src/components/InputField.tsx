import { InputHTMLAttributes, FC, TextareaHTMLAttributes } from 'react';
type InputFieldProps = (
	| InputHTMLAttributes<HTMLInputElement>
	| TextareaHTMLAttributes<HTMLTextAreaElement>
) & {
	label?: string;
	error?: boolean;
	multiline?: boolean;
};

export const InputField: FC<InputFieldProps> = ({
	label,
	error,
	multiline,
	...rest
}) => {
	const commonProps = {
		id: label + '!$%#^*',
		className: 'min-h-[40px] input bg-slate-100 px-4 py-2 w-full h-full',
		...rest,
	};
	return (
		<div className='flex flex-col gap-1 mb-2'>
			{label && (
				<label className='text-slate-900 ml-1' htmlFor={label + '!$%#^*'}>
					{label}:
				</label>
			)}
			<div
				className={`ring-1 ring-slate-200 focus-within:ring-primary-300 focus-within:shadow-sm focus-within:shadow-primary-200 rounded overflow-hidden w-full ${
					error ? 'ring-red-500 ring-1' : ''
				}`}
			>
				{multiline ? (
					<textarea
						{...(commonProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
					/>
				) : (
					<input {...(commonProps as InputHTMLAttributes<HTMLInputElement>)} />
				)}
			</div>
		</div>
	);
};
