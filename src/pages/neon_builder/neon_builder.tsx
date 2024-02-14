import { useState, FC, useMemo } from 'react';

// components
import ToggleSelector from 'src/components/ToggleSelector';
import ColorSelector, { Color } from './colorSelector';
import AlignSelector, { Alignment } from './alignmentSelector';
import Accessories, { Accessory } from './accessoriesSelector';
import { InputField } from 'src/components/InputField';
import CurrentPricingCard from './currentPricingCard';
import PremiumNeon from './premiumNeon';
import Switch from 'src/components/Switch';
import Carousel from './carousel';
import {
	accessoryKit,
	colors,
	fonts,
	noOfLinesOptions,
	neonSizeOptions,
	backgroundOptions,
} from 'src/constants/neon_builder';

// assets
import bg1 from 'src/assets/builder_bgs/bg1.jpg';
import bg2 from 'src/assets/builder_bgs/bg2.jpg';
import bg3 from 'src/assets/builder_bgs/bg3.jpg';
import bg4 from 'src/assets/builder_bgs/bg4.jpg';
import bg5 from 'src/assets/builder_bgs/bg5.jpg';
import bg6 from 'src/assets/builder_bgs/bg6.jpeg';
import bg7 from 'src/assets/builder_bgs/bg7.jpg';

// icons
import { IconAlignRight } from '@tabler/icons-react';
import { IconAlignLeft } from '@tabler/icons-react';
import { IconAlignCenter } from '@tabler/icons-react';
import useCart from 'src/cart/hooks';
import { generateRandomId } from 'src/utils/helper';

const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7];

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
type Size = 'small' | 'medium' | 'large' | 'extra large';
function NeonBilder() {
	// ======================= Controls ================ //
	const [font, setfont] = useState<string>('');
	const [size, setSize] = useState<Size>('small');
	const [backgroundStyle, setBackgroundStyle] = useState<string>('');
	const [noOfLines, setNoOfLines] = useState<string>('');
	const { addToCart, openCart } = useCart();
	const [color, setcolor] = useState<Color>({
		id: '6',
		name: 'pink',
		hex: '#ff00ff',
	});
	const [alignment, setalignment] = useState<Alignment>({
		label: 'center',
		icon: <IconAlignCenter />,
	});
	const [accessories, setaccessories] = useState<Accessory[]>([]);

	// ======================= Content ================ //
	const [currentBg, setCurrentBg] = useState<number>(0);
	const [showGlowing, setShowGlowing] = useState<boolean>(true);
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
		}, 0);

		let totalCharacters = Object.values(contentText).reduce(
			(total, text) => total + text.length,
			0
		);
		const priceFirstFourCharacters = {
			small: 67.42,
			medium: 95.29,
			large: 112.08,
			'extra large': 135.5,
		};
		const pricePerCharacter = {
			small: 15,
			medium: 20,
			large: 25,
			'extra large': 30,
		};
		let perCharacterPrice = priceFirstFourCharacters[size];

		if (totalCharacters > 4) {
			totalCharacters -= 4;
			perCharacterPrice += totalCharacters * pricePerCharacter[size];
		}

		if (isNaN(perCharacterPrice)) return 0;

		return Number(total + perCharacterPrice).toFixed(2);
	}, [accessories, contentText, size]);

	const customStyles = {
		'--neon-color': color.hex,
	} as React.CSSProperties;

	const dimensions = useMemo(() => {
		const widthInchesObject = {
			small: 5,
			medium: 6,
			large: 8,
			'extra large': 9,
		};
		const heightInchesObject = {
			small: 5,
			medium: 7,
			large: 9,
			'extra large': 10,
		};
		const keys = Object.keys(contentText);

		const largerText = keys.reduce((larger, key) => {
			const currentText = contentText[key];
			return currentText.length > larger.length ? currentText : larger;
		}, contentText[keys[0]]);
		const totalWidthInches = largerText.length * widthInchesObject[size];
		const totalHeightInches =
			Object.values(contentText).filter((text) => text.length > 0).length *
			heightInchesObject[size];

		return { totalWidthInches, totalHeightInches };
	}, [contentText, size]);

	// Access the dimensions
	const { totalWidthInches, totalHeightInches } = dimensions;

	function generateCartPayload() {
		const item = {
			id: generateRandomId(4),
			name: 'Custom Neon Sign',
			price: totalPrice,
			quantity: 1,
			size: size,
			image: images[currentBg],
			customNeonBuilder: true,
		};
		return item;
	}

	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-8'>
			{/* Visuallizer */}
			<div className='relative h-[88vh] lg:col-span-2 xl:col-span-3 rounded overflow-hidden shadow-lg self-start'>
				<div className='absolute left-0 translate-x-3 top-0 translate-y-3'>
					<Switch value={showGlowing} setValue={setShowGlowing} />
				</div>
				<img
					src={images[currentBg]}
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
									className={`text-5xl ${font} ${
										showGlowing ? 'neon-text' : ''
									} text-white`}
									style={customStyles}
								>
									{contentText[item]}
								</h3>
							))}
						</div>

						<div className='absolute top-1/2 right-1/2 -translate-y-full'>
							<div className='text-white relative after:absolute after:content-[""] after:h-[2px] after:w-8 after:top-1/2 after:left-0 after:-translate-x-[120%] after:bg-white after:block before:absolute before:content-[""] before:h-[2px] before:w-8 before:top-1/2 before:right-0 before:translate-x-full before:bg-white before:block '>
								{totalWidthInches}''
							</div>
						</div>
					</CenteredOverlay>
				</div>

				{/* width */}
				{/* height */}
				<div className='absolute top-1/2 right-0 -translate-x-full -translate-y-[600%]'>
					<div className='text-white relative after:absolute after:content-[""] after:block after:h-8 after:w-[1.2px] after:bg-white after:left-1/2 after:-translate-x-full before:absolute before:content-[""] before:block before:h-8 before:w-[1.2px] before:bg-white before:left-1/2 before:top-0 before:-translate-y-full before:-translate-x-full'>
						{totalHeightInches}''
					</div>
				</div>

				{/* Price */}
				<div className='absolute bottom-0 left-0'>
					<CenteredOverlay className='w-full max-w-[180px]'>
						<CurrentPricingCard price={totalPrice} />
					</CenteredOverlay>
				</div>
				{/* bg selector */}
				<div className='absolute bottom-3 right-2'>
					<Carousel
						images={images}
						current={currentBg}
						setCurrent={setCurrentBg}
					/>
				</div>
			</div>

			{/* Controller */}
			<div className='w-full h-[88vh] xl:col-span-2 flex flex-col gap-6 rounded shadow-lg'>
				<div className='h-[80vh] px-3 overflow-auto border-b-2 border-b-gray-300'>
					<ToggleSelector
						options={noOfLinesOptions}
						selected={noOfLines}
						setSelected={setNoOfLines}
						variant='tabed'
						className='rounded-b-none rounded-t w-full uppercase'
					/>
					<div className='mt-6'>
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
					<div className='mt-6'>
						<h3 className='text-xl text-primary-500'>Choose Font:</h3>
						<ToggleSelector
							options={filteredFamilies}
							selected={font}
							setSelected={setfont}
						/>
						<div className='flex justify-end'>
							<button
								className='text-primary-500'
								onClick={toggleFamiliesNumber}
							>
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
					<div className='mt-6'>
						<h3 className='text-xl text-primary-500'>Align:</h3>
						<AlignSelector
							options={alignments}
							value={alignment}
							onChange={(alignment) => setalignment(alignment)}
						/>
					</div>
					<div className='mt-6'>
						<h3 className='text-xl text-primary-500'>Size:</h3>
						<ToggleSelector
							options={neonSizeOptions}
							selected={size}
							setSelected={setSize}
							className='w-full grid grid-cols-2'
						/>
					</div>
					<div className='mt-6'>
						<h3 className='text-xl text-primary-500'>Background Style:</h3>
						<ToggleSelector
							options={backgroundOptions}
							selected={backgroundStyle}
							setSelected={setBackgroundStyle}
							className='w-full grid grid-col-1'
							optionToDeselect
						/>
					</div>
					<div className='mt-6'>
						<h3 className='text-xl text-primary-500'>Accessories:</h3>
						<Accessories
							options={accessoryKit}
							value={accessories}
							onChange={(selectedAccessories) =>
								setaccessories(selectedAccessories)
							}
						/>
					</div>
					<div className='mt-6'>
						<PremiumNeon />
					</div>
				</div>
				<div className='px-3 pb-3 rounded bg-black'>
					<div className='w-full flex bg-white rounded-lg justify-between items-center px-4 mt-8'>
						<p>Total:</p>
						<h6 className='pt-2'>${totalPrice}</h6>
					</div>
					<button
						className='bg-primary-400 hover:bg-primary-600 w-full rounded-full p-3 text-white mt-4'
						type='submit'
						onClick={() => {
							openCart()
							addToCart(generateCartPayload());
						}}
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
