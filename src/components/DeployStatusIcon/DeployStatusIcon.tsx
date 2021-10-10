import React from 'react';

import classNames from 'classnames';

import Icon from 'UiKit/components/Icon';

import { DeployStatus } from '@/enums/deploy';

type DeployStatusIconProps = {
  className?: string;
  deploy: Deploy;
}

const DEPLOY_STATUS_ICONS: { [key: string]: string } = {
  [DeployStatus.Failed]: 'icon-fail',
  [DeployStatus.Running]: 'icon-clock',
  [DeployStatus.Success]: 'icon-done',
};

const DeployStatusIcon: React.FC<DeployStatusIconProps> = (props) => {
  const { className, deploy } = props;

  return (
    <Icon
      className={classNames(className)}
      name={DEPLOY_STATUS_ICONS[deploy.status]}
      size="m"
    />
  );
};

export default DeployStatusIcon;
