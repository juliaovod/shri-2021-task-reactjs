import React from 'react';

import classNames from 'classnames';

import styles from './Header.module.css';

const Header: React.FC = (props) => {
  const { children } = props;

  return (
    <header className={classNames(styles.header)}>
      <div className={classNames(styles.headerContainer)}>{children}</div>
    </header>
  );
};

export default Header;
