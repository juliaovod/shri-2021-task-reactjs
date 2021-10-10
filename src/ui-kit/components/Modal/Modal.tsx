import React from 'react';

import classNames from 'classnames';

import Overlay from 'UiKit/components/Overlay';
import Typography from 'UiKit/components/Typography';

import styles from './Modal.module.css';

type ModalProps = {
  cancelButton?: React.ReactElement;
  className?: string;
  closeOnClickOutside?: boolean;
  isOpen?: boolean;
  okButton?: React.ReactElement;
  onClose?: () => boolean;
  title: string;
}

const Modal: React.FC<ModalProps> = (props) => {
  const {
    cancelButton = null,
    children,
    className,
    closeOnClickOutside = true,
    isOpen = false,
    okButton = null,
    onClose = () => undefined,
    title,
  } = props;

  const onClickOutside = (): void => {
    if (closeOnClickOutside) {
      onClose();
    }
  };

  if (isOpen) {
    return (
      <Overlay onClick={onClickOutside}>
        <div className={classNames(styles.modal, className)}>
          <header className={classNames(styles.modalHeader)}>
            <Typography size="m" weight={500}>{title}</Typography>
          </header>

          {children}

          {(okButton || cancelButton) && (
            <footer className={classNames(styles.modalFooter)}>
              {okButton && <div className={classNames(styles.modalButton)}>{okButton}</div>}

              {cancelButton && <div className={classNames(styles.modalButton)}>{cancelButton}</div>}
            </footer>
          )}
        </div>
      </Overlay>
    );
  }

  return null;
};

export default Modal;
