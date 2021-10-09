import React from 'react';

import classNames from 'classnames';

import Button, { ButtonProps } from 'UiKit/components/Button';

import styles from './IconButton.module.css';

type IconButtonProps = Omit<ButtonProps, 'iconLeft' | 'theme' | 'type'>;

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { children, className } = props;

  return (
    <Button
      {...props}
      className={classNames(styles.iconButton, className)}
      theme="secondary"
      type="button"
    >
      {children}
    </Button>
  );
};

export default IconButton;
