import React from 'react';

import classNames from 'classnames';

import styles from './IconText.module.css';

type IconTextProps = {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
  icon: React.ReactElement;
}

const IconText: React.FC<IconTextProps> = (props) => {
  const { children, className, icon } = props;

  return (
    <div className={classNames(styles.iconText, className)}>
      <div className={classNames(styles.iconTextIcon)}>{icon}</div>

      {children}
    </div>
  );
};

export default IconText;
