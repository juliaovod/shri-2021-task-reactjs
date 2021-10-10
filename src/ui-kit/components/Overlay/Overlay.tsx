import React from 'react';

import classNames from 'classnames';

import styles from './Overlay.module.css';

const OVERLAY_BODY_CLASSNAME = 'body-overlay';

type OverlayProps = {
  className?: string;
  onClick?: (e: React.SyntheticEvent) => void;
}

const Overlay: React.FC<OverlayProps> = (props) => {
  const { children, className, onClick = (e) => e } = props;

  React.useEffect(() => {
    document.body.classList.add(OVERLAY_BODY_CLASSNAME);

    return () => {
      document.body.classList.remove(OVERLAY_BODY_CLASSNAME);
    };
  }, []);

  return (
    <div className={classNames(styles.overlay, className)}>
      <div className={classNames(styles.overlayBackdrop)} onClick={onClick} />

      <div className={classNames(styles.overlayContainer)}>
        {children}
      </div>
    </div>
  );
};

export default Overlay;
