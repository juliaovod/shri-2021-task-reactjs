import React from 'react';

import classNames from 'classnames';

import styles from './DeployStatusText.css';

type DeployStatusIdProps = {
  className?: string;
  deployment: Deployment;
}

const DeployStatusText: React.FC<DeployStatusIdProps> = (props) => {
  const { className, children, deployment } = props;

  const statusClassName = `deploy-status-text_${deployment.status}`;

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
