import { ReactElement } from 'react';

import PhoneInput, { PhoneInputProps } from 'react-phone-input-2';
import 'react-phone-input-2/lib/plain.css';


interface Props extends PhoneInputProps {
	label: string;
  error?: boolean;
}
function PhoneInput2(props: Props): ReactElement<Props> {
	const { label,error, ...rest } = props;
	return (
		<div className='flex flex-col gap-1 mb-2'>
			<label className='text-slate-900 ml-1' htmlFor={label + '!$%#^*'}>
				{label}:
			</label>
			<div
				className={`ring-1 ring-slate-200 focus-within:ring-primary-300 focus-within:shadow-sm focus-within:shadow-primary-200 rounded overflow-hidden w-full ${
					error ? 'ring-red-500 ring-1' : ''
				}`}
			>
				<PhoneInput
					id={label + '!$%#^*'}
					country={'us'}
					specialLabel={null}
					className='within-phone-input outline-none'
					{...rest}
				/>
			</div>
		</div>
	);
}

export default PhoneInput2;
