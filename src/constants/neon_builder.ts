// types
import { Accessory } from "src/pages/neon_builder/accessoriesSelector";
import { Color } from "src/pages/neon_builder/colorSelector";


// icons

export const fonts: string[] = [
	'Roboto',
	'Roboto Mono',
	'Roboto Slab',
	'Roboto Condensed',
	'Poppins',
	'Lora',
	'Monsterrat',
	'Play Fair',
	'Alexa',
	'Siri',
	'Google Assistant',
];

export const colors: Color[] = [
	{
		id: '6',
		name: 'pink',
		hex: '#ff00ff',
	},
	{
		id: '1',
		name: 'red',
		hex: '#ff0000',
	},
	{
		id: '2',
		name: 'green',
		hex: '#00ff00',
	},
	{
		id: '7',
		name: 'white',
		hex: '#C0C0C0',
	},
	{
		id: '4',
		name: 'yellow',
		hex: '#fbf25d',
	},
	{
		id: '9',
		hex: '#ffbc4b',
		name: 'orange',
	},
	{
		id: '10',
		hex: '#1c1ef4',
		name: 'blue',
	},
	{
		id: '11',
		hex: '#ff94ff',
		name: 'cotton',
	},
	{
		id: '12',
		hex: '#8be8ea',
		name: 'mint',
	},
	{
		id: '13',
		hex: '#8ee0ff',
		name: 'Ice blue',
	},
	{
		id: '14',
		hex: '#c35fe9',
		name: 'Purple',
	},
	{
		id: '15',
		hex: '#fe69bf',
		name: 'deep',
	},
];

export const accessoryKit: Accessory[] = [
	{
		name: 'Wall-Mounting-Kit',
		price: '+$10',
	},
	{
		name: 'Hanging-Kit',
		price: '+$10',
	},
	{
		name: 'Stand',
		price: '+$10',
	},
	{
		name: 'Rush Order',
		price: '+$50',
	},
	{
		name: 'Outdoor-User',
		price: '+$10',
	},
];

export const neonSizeOptions: string[] = [
	'small',
	'medium',
	'large',
	'extra large',
]

export const backgroundOptions: string[] = [
	'cut to shape',
	'cut to lettering',
	'cut to square',
];
export const noOfLinesOptions: string[] = ['one line', 'two line', 'three line'];