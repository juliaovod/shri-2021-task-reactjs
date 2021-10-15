import React from 'react';

import classNames from 'classnames';
import LoaderSpinner from 'react-loader-spinner';

import styles from './Spin.module.css';

type SpinProps = {
  className?: string;
  color?: string;
  isVisible?: boolean;
  secondaryColor?: string;
  size?: 's' | 'm' | 'l';
}

const sizeMap: { [key: string]: number } = {
  l: 24,
  m: 16,
  s: 8,
};

const Spin: React.FC<SpinProps> = (props) => {
  const {
    className,
    color = '#fc0',
    secondaryColor = '#fc0',
    isVisible = false,
    size: sizeProp = 'm',
  } = props;

  const size = sizeMap[sizeProp];

  if (isVisible) {
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
          secondaryColor={secondaryColor}
          timeout={0}
          type="TailSpin"
          visible
          width={size}
        />
      </div>
    );
  }

  return null;
};

export default Spin;
