import { ReactNode, ButtonHTMLAttributes } from 'react';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	color?: 'primary' | 'secondary'| 'white' | 'black' | 'slate' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink' | 'success' | 'error' | 'warning' | 'info';
	// className?: string;
	enableBadge?: boolean;
}

function IconButton({ color, children,enableBadge, ...rest }: IconButtonProps) {
	return (
		<button
			className={`inline-flex p-3 items-center justify-center rounded-full hover:bg-slate-50/10 relative ${
				color === 'white' || color === 'black'
					? `text-${color}`
					: `text-${color}-500'`
        } ${enableBadge ? 'badge' : ''}`}
      {...rest}
		>
			{children}
		</button>
	);
}

export default IconButton;
