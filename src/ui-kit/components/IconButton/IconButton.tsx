import React from 'react';

import classNames from 'classnames';

import Button, { ButtonProps } from 'UiKit/components/Button';

import styles from './IconButton.module.css';

type IconButtonProps = Omit<ButtonProps, 'iconLeft' | 'theme'>;

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { children, className, size = 's' } = props;

  return (
    <Button
      {...props}
      className={classNames(styles.iconButton, className)}
      size={size}
      theme="secondary"
    >
      {children}
    </Button>
  );
};

export default IconButton;
