import { ReactElement, ReactNode, useEffect, useRef } from 'react';

interface DrawerProps {
	open: boolean;
	onClose: () => void;
	children: ReactNode;
}

function Drawer(props: DrawerProps): ReactElement {
	const { onClose, children, open } = props;
	const drawerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (open) {
			const firstFocusableElement = drawerRef.current?.querySelector(
				'[tabindex="0"]'
			) as HTMLElement;
			if (firstFocusableElement) {
				firstFocusableElement.focus();
			}

			const handleKeyDown = (event: KeyboardEvent) => {
				if (event.key === 'Tab') {
					const focusableElements =
						drawerRef.current?.querySelectorAll<HTMLElement>('[tabindex="0"]');
					if (focusableElements) {
						const lastFocusableElement =
							focusableElements[focusableElements.length - 1];
						if (
							document.activeElement === lastFocusableElement &&
							!event.shiftKey
						) {
							firstFocusableElement.focus();
							event.preventDefault();
						} else if (
							document.activeElement === firstFocusableElement &&
							event.shiftKey
						) {
							lastFocusableElement.focus();
							event.preventDefault();
						}
					}
				} else if (event.key === 'Escape') {
					onClose();
				}
			};

			window.addEventListener('keydown', handleKeyDown);

			return () => {
				window.removeEventListener('keydown', handleKeyDown);
			};
		}
	}, [open, onClose]);

	return (
		<>
			{open && (
				<>
					<div
						className='fixed z-[1300] inset-0 bg-gray-500/2 transition-opacity duration-300 ease-in-out'
						onClick={onClose}
						style={{
							backdropFilter: 'blur(10px)',
							WebkitBackdropFilter: 'blur(10px)',
						}}
					></div>
					<div
						className='fixed right-0 top-0 bottom-0 bg-red-500 transform transition-transform duration-300 ease-out'
						style={{ transform: open ? 'translateX(0)' : 'translateX(100%)' }}
						ref={drawerRef}
					>
						{children}
					</div>
				</>
			)}
		</>
	);
}

export default Drawer;
