import React from 'react';

import classNames from 'classnames';

export type FlexBoxProps = {
  align?: 'normal' | 'stretch' | 'center' | 'baseline' | 'flex-start' | 'flex-end';
  className?: string;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  display?: 'flex' | 'inline-flex';
  justify?: 'space-around' | 'space-between' | 'center' |'flex-start' | 'flex-end' ;
  style?: React.CSSProperties;
  wrap?: 'nowrap' | 'wrap';
}

const FlexBox: React.FC<FlexBoxProps> = (props) => {
  const {
    align = 'normal',
    children,
    className,
    direction = 'row',
    display = 'flex',
    justify = 'flex-start',
    style = {},
    wrap = 'nowrap',
  } = props;

  return (
    <div
      className={classNames(className)}
      style={{
        alignItems: align,
        display,
        flexDirection: direction,
        flexWrap: wrap,
        justifyContent: justify,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default FlexBox;
