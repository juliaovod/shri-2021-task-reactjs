import React from 'react';

import classNames from 'classnames';

import Icon from 'UiKit/components/Icon';
import IconText from 'UiKit/components/IconText';
import Typography from 'UiKit/components/Typography';
import { getDateDistance, getDateTime } from 'UiKit/utils/date';

import BuildStatusIcon from '@/components/BuildStatusIcon';
import BuildStatusText from '@/components/BuildStatusText';

import styles from './BuildCard.module.css';

type BuildCardProps = {
  className?: string;
  build: Build;
}

const BuildCard: React.FC<BuildCardProps> = (props) => {
  const { className, build } = props;

  const {
    createdAt,
    deployable: { commit, ref },
    finishedAt,
    id,
  } = build;

  return (
    <div className={classNames(styles.buildCard, className)}>
      <BuildStatusIcon build={build} />

      <div className={classNames(styles.buildCardBody)}>
        <div>
          <div className={classNames(styles.buildCardInfo)}>
            <BuildStatusText
              className={classNames(styles.buildCardId)}
              build={build}
            >
              #
              {id}
            </BuildStatusText>
            <Typography tagName="p">{commit.message}</Typography>
          </div>

          <div className={classNames(styles.buildCardCommit)}>
            <IconText
              className={classNames(styles.buildCardDetail)}
              icon={<Icon name="icon-code-commit" />}
            >
              <Typography className={classNames(styles.buildCardBranch)}>{ref}</Typography>
              <Typography theme="ghost">{commit.shortId}</Typography>
            </IconText>

            <IconText
              className={classNames(styles.buildCardDetail)}
              icon={<Icon name="icon-user" />}
            >
              <Typography>{commit.authorName}</Typography>
            </IconText>
          </div>
        </div>

        <div className={classNames(styles.buildCardDatetime)}>
          <IconText
            className={classNames(styles.buildCardDetail)}
            icon={<Icon name="icon-calendar" theme="ghost" />}
          >
            <Typography datetime={createdAt} tagName="time" size="xs" theme="ghost">
              {getDateTime(createdAt)}
            </Typography>
          </IconText>

          <IconText
            className={classNames(styles.buildCardDetail)}
            icon={<Icon name="icon-stopwatch" theme="ghost" />}
          >
            <Typography datetime={finishedAt} tagName="time" size="xs" theme="ghost">
              {getDateDistance(createdAt, finishedAt)}
            </Typography>
          </IconText>
        </div>
      </div>
    </div>
  );
};

export default BuildCard;
