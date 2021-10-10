import React from 'react';

import classNames from 'classnames';

import styles from './DeployStatusText.css';

type DeployStatusIdProps = {
  className?: string;
  deploy: Deploy;
}

const DeployStatusText: React.FC<DeployStatusIdProps> = (props) => {
  const { className, children, deploy } = props;

  const statusClassName = `deploy-status-text_${deploy.status}`;

  return (
    <div className={classNames(
      styles.deployStatusText,
      styles[statusClassName],
      className,
    )}
    >
      {children}
    </div>
  );
};

export default DeployStatusText;
