import React from 'react';

import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './Button.module.css';

export type ButtonProps = {
  className?: string;
  iconLeft?: React.ReactElement;
  isDisabled?: boolean;
  onClick?: (e: React.SyntheticEvent) => void;
  path?: string;
  size?: 's' | 'm';
  view?: 'default' | 'action';
  type?: 'submit' | 'button';
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    iconLeft = null,
    isDisabled = false,
    onClick = (e) => e,
    path = null,
    size = 'm',
    view = 'default',
    type = 'button',
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
