import React from 'react';

import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './Button.module.css';

export type ButtonProps = {
  className?: string;
  iconLeft?: React.ReactElement;
  isDisabled?: boolean;
  isProgress?: boolean;
  onClick?: (e: React.SyntheticEvent) => void;
  path?: string;
  size?: 's' | 'm';
  type?: 'submit' | 'button';
  view?: 'default' | 'action';
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    iconLeft = null,
    isDisabled = false,
    isProgress = false,
    onClick = (e) => e,
    path = null,
    size = 'm',
    type = 'button',
    view = 'default',
  } = props;

  const sizeClassName = `button_size_${size}`;
  const viewClassName = `button_view_${view}`;

  const buttonClassNames = classNames(
    styles.button,
    styles[sizeClassName],
    styles[viewClassName],
    {
      [styles.buttonDisabled]: isDisabled,
      [styles.buttonHasIconLeft]: Boolean(iconLeft),
      [styles.buttonProgress]: isProgress,
    },
    className,
  );

  const buttonContent = (
    <>
      {iconLeft && <div className={classNames(styles.buttonIcon)}>{iconLeft}</div>}
      {children}
    </>
  );

  if (path) {
    return (
      <Link className={buttonClassNames} to={path}>{buttonContent}</Link>
    );
  }

  return (
    <button
      className={buttonClassNames}
      disabled={isDisabled}
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
