import React from 'react';

import classNames from 'classnames';

import styles from './Icon.module.css';

type IconProps = {
  className?: string;
  name: string;
  size?: 'xs' | 's' | 'm';
}

const Icon: React.FC<IconProps> = (props) => {
  const { children, className, name, size = 's' } = props;

  const iconClassName = `icon_name_${name}`;
  const sizeClassName = `icon_size_${size}`;

  return (
    <span className={classNames(
      styles.icon,
      styles[iconClassName],
      styles[sizeClassName],
      className,
    )}
    >
      {children}
    </span>
  );
};

export default Icon;
