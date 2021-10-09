import React from 'react';

import classNames from 'classnames';

import Typography from 'UiKit/components/Typography';

import styles from './Copyright.module.css';

type TypographyProps = {
  className?: string;
}

const Copyright: React.FC<TypographyProps> = (props) => {
  const { className } = props;
  return (
    <Typography
      className={classNames(styles.copyright, className)}
      size="xs"
      theme="gray"
    >
      © 2021 Julia Ovod
    </Typography>
  );
};

export default React.memo(Copyright);
