import { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

// components
import Button from 'src/components/Button';
import FileDropzone from 'src/components/FileDropper';
import { InputField } from 'src/components/InputField';
import PhoneInput from 'src/components/PhoneInput';
// import RangeSelector from 'src/components/RangeSelector';

function Form() {
	const [priceRange, setPriceRange] = useState([650, 1120]);

	return (
		<form className='w-full flex flex-col gap-3'>
			<InputField label='Name' type='text' placeholder='John' />
			<PhoneInput label='Phone Number' placeholder='+1 (702) 123-4567' />
			<InputField label='Email' type='email' placeholder='john@outlook.com' />
			<InputField
				label='Appropriate Size (length / Height)'
				type='number'
				placeholder='50 inches'
			/>
			<InputField
				label='Describe your Custom Neon Sign'
				multiline
				rows={5}
				placeholder='Tell us about your vision, message, and preferred colors.'
			/>
			<FileDropzone
				onFileUpload={(file: File) => console.log(file)}
				// acceptedFileTypes={['image/*','video/*']}
			/>
			{/* <RangeSelector label='Price Range' /> */}
			<RangeSlider
				min={200}
				max={2000}
				steps={20}
				value={priceRange}
				onInput={(value) => setPriceRange(value)}
			/>
			<div className='flex justify-between'>
				<span>{priceRange[0]}</span>
				<span>{priceRange[1]}</span>
			</div>
			<div className='flex gap-2 justify-end'>
				<Button variant='outlined' className='min-w-[180px] hover:bg-primary-500 hover:text-white'>
					get a free quote
				</Button>
				<Button variant='contained' className='min-w-[180px]'>
					Send
				</Button>
			</div>
		</form>
	);
}

export default Form;
