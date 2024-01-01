import { ReactElement, ReactNode } from 'react';

interface ModalProps {
	children: ReactNode;
	open: boolean;
	onClose: () => void;
}

function Modal(props: ModalProps): ReactElement | null {
  const { children, onClose, open } = props;

  if (!open) return null;

  return <div className='fixed inset-0 bg-slate-500/20' onClick={onClose}>
    <div className='bg-white w-1/2 mx-auto my-12 p-8 rounded-lg'>
      {children}
    </div>
  </div>;
}

export default Modal;
