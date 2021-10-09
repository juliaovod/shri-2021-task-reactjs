import React from 'react';

import classNames from 'classnames';

import styles from './Icon.module.css';

type IconProps = {
  className?: string;
  name: string;
  size?: 'xs' | 's' | 'm';
  theme?: 'black' | 'ghost';
}

const Icon: React.FC<IconProps> = (props) => {
  const { children, className, name, size = 's', theme = 'black' } = props;

  const iconClassName = `icon_name_${name}`;
  const themeClassName = `icon_theme_${theme}`;
  const sizeClassName = `icon_size_${size}`;

  return (
    <span className={classNames(
      styles.icon,
      styles[iconClassName],
      styles[themeClassName],
      styles[sizeClassName],
      className,
    )}
    >
      {children}
    </span>
  );
};

export default Icon;
