import React from 'react';

import classNames from 'classnames';

import styles from './Button.module.css';

export type ButtonProps = {
  className?: string;
  isDisabled?: boolean;
  onClick?: (e: React.SyntheticEvent) => void;
  theme?: 'primary' | 'secondary';
  type?: 'submit' | 'button';
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className,
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
        },
        className,
      )}
      disabled={isDisabled}
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
