import React from 'react';

import classNames from 'classnames';

import styles from './Typography.module.css';

export type TypographyProps = {
  className?: string;
  datetime?: string;
  size?: 'xs' | 's' | 'm' | 'l';
  style?: React.CSSProperties;
  tagName?: string;
  theme?: 'black' | 'grey' | 'ghost' | 'green' | 'red';
  title?: string;
  weight?: 400 | 500 | 600;
}

const Typography: React.FC<TypographyProps> = (props) => {
  const {
    children,
    className,
    datetime = null,
    size = 's',
    style = {},
    tagName = 'div',
    theme = 'black',
    title = null,
    weight = 400,
  } = props;

  const themeClassName = `typography_theme_${theme}`;
  const sizeClassName = `typography_size_${size}`;
  const weightClassName = `typography_weight_${weight}`;

  const componentProps = {
    className: classNames(
      styles.typography,
      styles[themeClassName],
      styles[sizeClassName],
      styles[weightClassName],
      className,
    ),
    style,
  };

  if (datetime) {
    Object.assign(componentProps, { dateTime: datetime });
  }

  if (title) {
    Object.assign(componentProps, { title });
  }

  return React.createElement(tagName, componentProps, children);
};

export default Typography;
