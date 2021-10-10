import React from 'react';

import classNames from 'classnames';

import styles from './Header.module.css';

export const HEADER_CONTAINER_ID = 'header-container';

const Header: React.FC = () => (
  <header className={classNames(styles.header)}>
    <div className={classNames(styles.headerContainer)} id={HEADER_CONTAINER_ID} />
  </header>
);

export default Header;
