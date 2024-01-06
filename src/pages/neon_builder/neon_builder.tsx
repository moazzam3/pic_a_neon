import { useState, FC, useMemo } from 'react';

// components
import ToggleSelector from 'src/components/ToggleSelector';
import ColorSelector, { Color } from './colorSelector';
import AlignSelector, { Alignment } from './alignmentSelector';
import FontSizeSetter from './fontSizeSetter';
import Accessories, { Accessory } from './accessoriesSelector';
import { InputField } from 'src/components/InputField';

// assets
import empty_wall from 'src/assets/empty_wall.jpg';
import {
	accessoryKit,
	colors,
	fonts,
	noOfLinesOptions,
} from 'src/constants/neon_builder';

// icons
import { IconAlignRight } from '@tabler/icons-react';
import { IconAlignLeft } from '@tabler/icons-react';
import { IconAlignCenter } from '@tabler/icons-react';
import CurrentPricingCard from './currentPricingCard';
import PremiumNeon from './premiumNeon';

type AlignText = 'left' | 'right' | 'center' | 'justify';

const alignments: Alignment[] = [
	{
		label: 'left',
		icon: <IconAlignLeft />,
	},
	{
		label: 'center',
		icon: <IconAlignCenter />,
	},
	{
		label: 'right',
		icon: <IconAlignRight />,
	},
];

interface CustomStyles {
	'--neon-color': string;
	fontSize: string;
}

const stringOfNumbers: Record<number, string> = {
	1: 'one line',
	2: 'two line',
	3: 'three line',
};

const noOfLinesMap: Record<string, number> = {
	'one line': 1,
	'two line': 2,
	'three line': 3,
};

interface ContentText {
	[key: string]: string; // Add an index signature
}
function NeonBilder() {
	// ======================= Controls ================ //
	const [font, setfont] = useState<string>('');
	const [noOfLines, setNoOfLines] = useState<string>('');
	const [color, setcolor] = useState<Color>({ name: '', hex: '', id: '' });
	const [alignment, setalignment] = useState<Alignment>({
		label: '',
		icon: null,
	});
	const [fontSize, setfontSize] = useState<number>(20);
	const [accessories, setaccessories] = useState<Accessory[]>([]);

	// ======================= Content ================ //

	// const [contentText, setContentText] = useState<ContentText>({});
	const [contentText, setContentText] = useState<ContentText>(() => {
		return getArrayByLength(Object.keys(stringOfNumbers).length).reduce(
			(acc, item) => {
				return { ...acc, [item]: '' };
			},
			{}
		);
	});

	const [isShowAllFamilies, setIsShowAllFamilies] = useState<boolean>(false);

	const toggleFamiliesNumber = () => setIsShowAllFamilies((prev) => !prev);

	const filteredFamilies = isShowAllFamilies ? fonts : fonts.slice(0, 4);

	function getArrayByLength(length: number) {
		return Array.from({ length }, (_, i) => stringOfNumbers[i + 1]);
	}

	const totalPrice = useMemo(() => {
		const total = accessories.reduce((accumulator, currentAccessory) => {
			const priceValue = parseInt(
				currentAccessory.price.replace(/\D+/g, ''),
				10
			);

			return accumulator + priceValue;
		}, 169);

		return total;
	}, [accessories]);

	const customStyles: CustomStyles = {
		'--neon-color': color.hex,
		fontSize: `${fontSize}px`,
	};

	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
			{/* Visuallizer */}
			<div className='relative rounded overflow-hidden shadow-lg self-start'>
				<img
					src={empty_wall}
					alt='empty wall'
					className='max-w-full aspect-square '
				/>
				<div className='absolute top-1/2 left-1/2 translate -translate-x-1/2 -translate-y-1/4 w-full h-full'>
					<CenteredOverlay>
						<div
							className='flex flex-col w-full'
							style={{
								textAlign: (alignment.label as AlignText) || 'center',
							}}
						>
							{Object.keys(contentText).map((item, index) => (
								<h3
									key={index}
									className={`text-${fontSize} ${font} neon-text text-white`}
									style={customStyles}
								>
									{contentText[item]}
								</h3>
							))}
						</div>
					</CenteredOverlay>
				</div>
				<div className='absolute bottom-0 left-0'>
					<CenteredOverlay className='w-full max-w-[180px]'>
						<CurrentPricingCard />
					</CenteredOverlay>
				</div>
			</div>

			{/* Controller */}
			<div className='w-full flex flex-col gap-6'>
				<ToggleSelector
					options={noOfLinesOptions}
					selected={noOfLines}
					setSelected={setNoOfLines}
					variant='tabed'
					containerClass='rounded-b-none rounded-t-3xl w-full uppercase'
				/>
				<div>
					{getArrayByLength(noOfLinesMap[noOfLines]).map((item, index) => (
						<InputField
							key={index}
							placeholder={`line ${index + 1}`}
							name={item}
							value={contentText[item]}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setContentText({ ...contentText, [item]: e.target.value })
							}
						/>
					))}
				</div>
				<div>
					<h3 className='text-xl text-primary-500'>Choose Font:</h3>
					<ToggleSelector
						options={filteredFamilies}
						selected={font}
						setSelected={setfont}
					/>
					<div className='flex justify-end'>
						<button className='text-primary-500' onClick={toggleFamiliesNumber}>
							Show More +
						</button>
					</div>
				</div>
				<div className='mt-6'>
					<h3 className='text-xl text-primary-500'>Select Color:</h3>
					<ColorSelector
						options={colors}
						value={color}
						onChange={(color) => setcolor(color)}
					/>
				</div>
				<div className='flex justify-between'>
					<div>
						<h3 className='text-xl text-primary-500'>Align:</h3>
						<AlignSelector
							options={alignments}
							value={alignment}
							onChange={(alignment) => setalignment(alignment)}
						/>
					</div>
					<div className='text-center'>
						<h3 className='text-xl text-primary-500'>Font Size:</h3>
						<FontSizeSetter
							value={fontSize}
							onChange={(size) => setfontSize(size)}
						/>
						<span>{fontSize}px</span>
					</div>
				</div>
				<div>
					<h3 className='text-xl text-primary-500'>Accessories:</h3>
					<Accessories
						options={accessoryKit}
						value={accessories}
						onChange={(selectedAccessories) =>
							setaccessories(selectedAccessories)
						}
					/>
				</div>
				<div>
					<PremiumNeon/>
				</div>
				<div>
					<div className='w-full flex bg-slate-200 rounded-lg justify-between items-center px-4 mt-8'>
						<p>Total:</p>
						<h6 className='pt-2'>${totalPrice}</h6>
					</div>
					<button
						className='bg-primary-400 w-full rounded-full p-3 text-white mt-4'
						type='submit'
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}

export default NeonBilder;

interface CenteredOverlayProps {
	children: React.ReactNode;
	className?: string;
}

const CenteredOverlay: FC<CenteredOverlayProps> = ({ children, className }) => (
	<div className={`flex items-center justify-center ${className}`}>
		{children}
	</div>
);
