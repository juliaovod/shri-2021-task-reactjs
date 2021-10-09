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

  const themeClassName = `button_theme_${theme}`;

  return (
    <button
      className={classNames(
        styles.button,
        styles[themeClassName],
        {
          [styles.button_disabled]: isDisabled,
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
