import { ReactElement, ReactNode } from 'react';

interface ModalProps {
	children: ReactNode;
	open: boolean;
	onClose: () => void;
}

function Modal(props: ModalProps): ReactElement | null {
  const { children, onClose, open } = props;

  if (!open) return null;

  return (
    <div className='fixed inset-0 bg-black/60' onClick={onClose}>
      <div className='relative h-full w-full'>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md' onClick={e => {
          e.stopPropagation();
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
