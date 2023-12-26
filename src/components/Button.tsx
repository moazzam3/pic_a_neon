import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'outlined' | 'contained' | 'text';
	color?: 'primary' | 'secondary' | 'warning' | 'success' | 'danger' | 'dark';
	size?: 'sm' | 'md' | 'lg';
	fullWidth?: boolean;
}

const sizeClass = {
	sm: 'px-3 py-1 text-sm',
	md: 'px-4 py-2 text-md',
	lg: 'px-5 py-3 text-lg',
};

const Button = (props: ButtonProps) => {
	const { children, variant = 'text', color = 'primary', size, fullWidth = false, className, ...rest } = props;

	// purgecss ignore
	const buttonVariants = [
		'inline-flex items-center justify-center rounded-full gap-x-1 uppercase leading-6',
		sizeClass[size ?? 'md'],
		fullWidth && 'w-full',
		variant === 'outlined' &&
			`border-2 border-${color}-500 text-${color}-500 hover:bg-${color}-100/10`,
		variant === 'contained' &&
			`bg-${color}-500 text-white hover:bg-${color}-600`,
		variant === 'text' && `text-${color}-500 hover:bg-transparent`,
		className,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<button className={buttonVariants} {...rest}>
			{children}
		</button>
	);
};

Button.displayName = 'Button';

export default Button;
