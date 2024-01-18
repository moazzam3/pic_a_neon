
interface SkeletonProps {
  className?: string;
}

function Skeleton({ className }:SkeletonProps) {
	return (
		<div className={'bg-gray-500 rounded relative overflow-hidden ' + className}>
			<div className='w-full h-full absolute top-0 left-0 animate-wavy'></div>
		</div>
	);
}

export default Skeleton;
