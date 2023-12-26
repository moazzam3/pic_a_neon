import { useState } from 'react';

// components
import ToggleSelector from 'src/components/ToggleSelector';
import ColorSelector, { Color } from './colorSelector';
import AlignSelector, { Alignment } from './alignmentSelector';

// icons
import { IconAlignRight } from '@tabler/icons-react';
import { IconAlignLeft } from '@tabler/icons-react';
import { IconAlignCenter } from '@tabler/icons-react';

const fonts: string[] = [
	'Roboto',
	'Roboto Mono',
	'Roboto Slab',
	'Roboto Condensed',
];
const colors: Color[] = [
	{
		name: 'Red',
		hex: '#FF0000',
		id: 'red',
	},
	{
		name: 'Green',
		hex: '#00FF00',
		id: 'green',
	},
	{
		name: 'Blue',
		hex: '#0000FF',
		id: 'blue',
	},
	{
		name: 'Yellow',
		hex: '#FFFF00',
		id: 'yellow',
	},
	{
		name: 'Cyan',
		hex: '#00FFFF',
		id: 'cyan',
	},
	{
		name: 'Magenta',
		hex: '#FF00FF',
		id: 'magenta',
	},
	{
		name: 'White',
		hex: '#FFFFFF',
		id: 'white',
	},
	{
		name: 'Black',
		hex: '#000000',
		id: 'black',
	},
];
const alignments: Alignment[] = [
	{
		label: 'Left',
		icon: <IconAlignLeft />,
	},
	{
		label: 'Center',
		icon: <IconAlignCenter />,
	},
	{
		label: 'Right',
		icon: <IconAlignRight />,
	},
];
function NeonBilder() {
	const [font, setfont] = useState<string>('');
	const [color, setcolor] = useState<Color>({ name: '', hex: '', id: '' });
	const [alignment, setalignment] = useState<Alignment>({ label: '', icon: null });
	
	return (
		<div className='w-full max-w-md'>
			<ToggleSelector
				options={fonts}
				selected={font}
				setSelected={setfont}
				variant='tabed'
			/>
			<ColorSelector
				options={colors}
				value={color}
				onChange={(color) => setcolor(color)}
			/>
			<AlignSelector
				options={alignments}
				value={alignment}
				onChange={(alignment) => setalignment(alignment)}
			/>
		</div>
	);
}

export default NeonBilder;
