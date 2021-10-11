import React from 'react';

import classNames from 'classnames';

import styles from './BuildStatusText.module.css';

type BuildStatusIdProps = {
  className?: string;
  build: Build;
}

const BuildStatusText: React.FC<BuildStatusIdProps> = (props) => {
  const { className, children, build } = props;

  const statusClassName = `build-status-text_${build.status}`;

  return (
    <div className={classNames(
      styles.buildStatusText,
      styles[statusClassName],
      className,
    )}
    >
      {children}
    </div>
  );
};

export default BuildStatusText;
