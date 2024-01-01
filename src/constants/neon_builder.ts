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

export const noOfLinesOptions: string[] = ['one line', 'two line', 'three line'];