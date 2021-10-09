import React from 'react';

import classNames from 'classnames';

import styles from './Typography.module.css';

type TypographyProps = {
  className?: string;
  iconLeft?: React.ReactElement;
  size?: 'xs' | 's' | 'm' | 'l';
  style?: React.CSSProperties;
  tagName?: 'h1' | 'h2' | 'p' | 'div' | 'span';
  theme?: 'black' | 'gray' | 'ghost';
  weight?: 400 | 500 | 600;
}

const Typography: React.FC<TypographyProps> = (props) => {
  const {
    children,
    className,
    iconLeft = null,
    size = 's',
    style = {},
    tagName = 'div',
    theme = 'black',
    weight = 400,
  } = props;

  const themeClassName = `typography_theme_${theme}`;
  const sizeClassName = `typography_size_${size}`;
  const weightClassName = `typography_weight_${weight}`;

  return React.createElement(
    tagName,
    {
      className: classNames(
        styles.typography,
        styles[themeClassName],
        styles[sizeClassName],
        styles[weightClassName],
        {
          [styles.typographyHasIconLeft]: Boolean(iconLeft),
        },
        className,
      ),
      style,
    },
    [
      iconLeft ? React.cloneElement(iconLeft, {
        ...iconLeft.props,
        className: classNames(styles.typographyIcon, iconLeft.props.className),
        key: 'icon-left',
      }) : null,
      children,
    ],
  );
};

export default Typography;
