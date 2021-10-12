import React from 'react';
import ReactDOM from 'react-dom';

import classNames from 'classnames';

import Overlay from 'UiKit/components/Overlay';
import Typography from 'UiKit/components/Typography';
import { KeyboardCodeName } from 'UiKit/enums/key-codes';

import config from '@/config.json';

import styles from './Modal.module.css';

export type ModalProps = {
  cancelButton?: React.ReactElement;
  className?: string;
  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
  isOpen?: boolean;
  okButton?: React.ReactElement;
  onClose?: () => void;
  title: string;
}

const Modal: React.FC<ModalProps> = (props) => {
  const {
    cancelButton = null,
    children,
    className,
    closeOnClickOutside = true,
    closeOnEsc = true,
    isOpen = false,
    okButton = null,
    onClose = () => undefined,
    title,
  } = props;

  const [isEscapePressed, setIsEscapePressed] = React.useState(false);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === KeyboardCodeName.Escape) {
      setIsEscapePressed(true);
    }
  };

  const onClickOutside = (): void => {
    if (closeOnClickOutside) {
      onClose();
    }
  };

  React.useEffect(() => {
    if (isEscapePressed) {
      setIsEscapePressed(false);

      if (isOpen) {
        onClose();
      }
    }
  }, [isEscapePressed]);

  React.useEffect(() => {
    if (closeOnEsc) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      if (closeOnEsc) {
        window.removeEventListener('keydown', onKeyDown);
      }
    };
  }, []);

  if (isOpen) {
    return ReactDOM.createPortal((
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
    ), document.getElementById(config.MODAL_ROOT_ID));
  }

  return null;
};

export default Modal;
