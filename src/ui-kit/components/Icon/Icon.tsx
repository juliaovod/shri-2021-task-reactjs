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
    <div className={classNames(
      styles.icon,
      // @ts-ignore // TODO: Declare iconClassName, sizeClassName in css.d.ts
      styles[iconClassName],
      // @ts-ignore
      styles[sizeClassName],
      className,
    )}
    >
      {children}
    </div>
  );
};

export default Icon;
