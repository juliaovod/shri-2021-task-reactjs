import React from 'react';

import classNames from 'classnames';

import Icon from 'UiKit/components/Icon';

import { DeploymentStatus } from '@/enums/deployment';

type DeployStatusIconProps = {
  className?: string;
  deployment: Deployment;
}

const DEPLOY_STATUS_ICONS: { [key: string]: string } = {
  [DeploymentStatus.Failed]: 'icon-fail',
  [DeploymentStatus.Running]: 'icon-clock',
  [DeploymentStatus.Success]: 'icon-done',
};

const DeployStatusIcon: React.FC<DeployStatusIconProps> = (props) => {
  const { className, deployment } = props;

  return (
    <Icon
      className={classNames(className)}
      name={DEPLOY_STATUS_ICONS[deployment.status]}
      size="m"
    />
  );
};

export default DeployStatusIcon;
