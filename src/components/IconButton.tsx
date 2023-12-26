import { ReactNode, ButtonHTMLAttributes } from 'react';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	color?: 'primary' | 'secondary'| 'white' | 'black' | 'slate' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink' | 'success' | 'error' | 'warning' | 'info';
  className?: string;
}

function IconButton({ color,className, children, ...rest }: IconButtonProps) {
	return (
		<button
			className={`inline-flex p-3 items-center justify-center rounded-full hover:bg-slate-50/10 ${
				color === 'white' || color === 'black'
					? `text-${color}`
					: `text-${color}-500' ${className}`
        }`}
      {...rest}
		>
			{children}
		</button>
	);
}

export default IconButton;
