import React from 'react';

import classNames from 'classnames';

import styles from './Button.module.css';

export type ButtonProps = {
  className?: string;
  iconLeft?: React.ReactNode;
  isDisabled?: boolean;
  onClick?: (e: React.SyntheticEvent) => void;
  theme?: 'primary' | 'secondary';
  type?: 'submit' | 'button';
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    iconLeft = null,
    isDisabled = false,
    onClick = (e) => e,
    theme = 'primary',
    type = 'button',
  } = props;

  return (
    <button
      className={classNames(
        styles.button,
        {
          [styles.button_disabled]: isDisabled,
          [styles.button_theme_primary]: theme === 'primary',
          [styles.button_theme_secondary]: theme === 'secondary',
          [styles.buttonHasIconLeft]: Boolean(iconLeft),
        },
        className,
      )}
      disabled={isDisabled}
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {iconLeft && <div className={classNames(styles.buttonIcon)}>{iconLeft}</div>}

      {children}
    </button>
  );
};

export default Button;
