import React from 'react';

import classNames from 'classnames';
import LoaderSpinner from 'react-loader-spinner';

import { getThemePropertyValue } from 'UiKit/utils/primitive-colors';

import styles from './Spin.module.css';

type SpinProps = {
  className?: string;
  color?: string;
  isProgress?: boolean;
  size?: 's' | 'm';
}

const sizeMap: { [key: string]: number } = {
  m: 16,
  s: 8,
};

const Spin: React.FC<SpinProps> = (props) => {
  const {
    className,
    color = getThemePropertyValue('--color-background-action'),
    isProgress = false,
    size: sizeProp = 'm',
  } = props;

  const size = sizeMap[sizeProp];

  if (isProgress) {
    return (
      <div
        className={classNames(styles.spin, className)}
        style={{
          height: size,
          width: size,
        }}
      >
        <LoaderSpinner
          color={color}
          height={size}
          secondaryColor={color}
          timeout={0}
          type="TailSpin"
          visible={isProgress}
          width={size}
        />
      </div>
    );
  }

  return null;
};

export default Spin;
