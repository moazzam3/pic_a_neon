// components
import IconButton from 'src/components/IconButton';

// icons
import { IconArrowNarrowUp } from '@tabler/icons-react';
function JumpToTop() {
	
	function handleScrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
	return (
		<IconButton
			className='rounded-full bg-slate-300 p-2 text-slate-700 hover:bg-slate-700 hover:text-slate-300 transition-colors'
			onClick={handleScrollToTop}
		>
			<IconArrowNarrowUp size={20} />
		</IconButton>
	);
}

export default JumpToTop;
