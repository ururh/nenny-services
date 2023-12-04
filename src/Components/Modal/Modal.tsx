import React, { ReactNode } from 'react';
import { Close, ModalContent, ModalWrapper } from './ModalStyled';

interface PropsRegistration {
  children: ReactNode;
  onClose: () => void;
}

const Modal:React.FC<PropsRegistration> = ({ children, onClose }) => {
  return (
    <ModalWrapper>
          <ModalContent>
              <Close onClick={onClose}/>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;