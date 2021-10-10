import React from 'react';

import classNames from 'classnames';

import getDateDistance from 'UiKit/utils/getDateDistance';
import getDateTime from 'UiKit/utils/getDateTime';
import Icon from 'UiKit/components/Icon';
import IconText from 'UiKit/components/IconText';
import Typography from 'UiKit/components/Typography';

import DeployStatusIcon from '@/components/DeployStatusIcon';
import DeployStatusText from '@/components/DeployStatusText';

import styles from './DeployCard.module.css';

type DeployCardProps = {
  className?: string;
  deployment: Deployment;
}

const DeployCard: React.FC<DeployCardProps> = (props) => {
  const { className, deployment } = props;

  const {
    createdAt,
    deployable: { commit, ref },
    finishedAt,
    id,
  } = deployment;

  return (
    <div className={classNames(styles.deployCard, className)}>
      <DeployStatusIcon deployment={deployment} />

      <div className={classNames(styles.deployCardBody)}>
        <div>
          <div className={classNames(styles.deployCardInfo)}>
            <DeployStatusText
              className={classNames(styles.deployCardId)}
              deployment={deployment}
            >
              #
              {id}
            </DeployStatusText>
            <Typography tagName="p">{commit.message}</Typography>
          </div>

          <div className={classNames(styles.deployCardCommit)}>
            <IconText
              className={classNames(styles.deployCardDetail)}
              icon={<Icon name="icon-code-commit" />}
            >
              <Typography className={classNames(styles.deployCardBranch)}>{ref}</Typography>
              <Typography theme="ghost">{commit.shortId}</Typography>
            </IconText>

            <IconText
              className={classNames(styles.deployCardDetail)}
              icon={<Icon name="icon-user" />}
            >
              <Typography>{commit.authorName}</Typography>
            </IconText>
          </div>
        </div>

        <div className={classNames(styles.deployCardDatetime)}>
          <IconText
            className={classNames(styles.deployCardDetail)}
            icon={<Icon name="icon-calendar" theme="ghost" />}
          >
            <Typography size="xs" theme="ghost">{getDateTime(createdAt)}</Typography>
          </IconText>

          <IconText
            className={classNames(styles.deployCardDetail)}
            icon={<Icon name="icon-stopwatch" theme="ghost" />}
          >
            <Typography size="xs" theme="ghost">
              {getDateDistance(createdAt, finishedAt)}
            </Typography>
          </IconText>
        </div>
      </div>
    </div>
  );
};

export default DeployCard;