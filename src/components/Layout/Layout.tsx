import React from 'react';

import classNames from 'classnames';

import Footer from '@/components/Footer';

import styles from './Layout.module.css';

const Layout: React.FC = (props) => {
  const { children } = props;

  return (
    <main className={classNames(styles.layout)}>
      <div className={classNames(styles.layoutContainer)}>{children}</div>

      <Footer />
    </main>
  );
};

export default Layout;