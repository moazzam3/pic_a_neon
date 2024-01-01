interface FontSizeProps {
  value: number;
  onChange: (value: number) => void;
}

const FontSizeSetter: React.FC<FontSizeProps> = (props: FontSizeProps) => {
  const { value, onChange } = props;

  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    onChange(value - 1);
  };

  return (
		<div className='flex gap-2'>
			<button
				className='h-10 w-10 p-3 flex justify-center items-center aspect-square rounded-full cursor-pointer text-white bg-black hover:bg-primary-500'
				onClick={handleIncrement}
			>
				+
			</button>
			<button
				className='h-10 w-10 p-3 flex justify-center items-center aspect-square rounded-full cursor-pointer text-white bg-black hover:bg-primary-500'
				onClick={handleDecrement}
			>
				-
			</button>
		</div>
	);
};

export default FontSizeSetter;