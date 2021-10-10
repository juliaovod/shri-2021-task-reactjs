import React from 'react';

import classNames from 'classnames';

import Icon from 'UiKit/components/Icon';

import { BuildStatus } from '@/enums/build';

type BuildStatusIconProps = {
  className?: string;
  build: Build;
}

const BUILD_STATUS_ICONS: { [key: string]: string } = {
  [BuildStatus.Failed]: 'icon-fail',
  [BuildStatus.Running]: 'icon-clock',
  [BuildStatus.Success]: 'icon-done',
};

const BuildStatusIcon: React.FC<BuildStatusIconProps> = (props) => {
  const { className, build } = props;

  return (
    <Icon
      className={classNames(className)}
      name={BUILD_STATUS_ICONS[build.status]}
      size="m"
    />
  );
};

export default BuildStatusIcon;
