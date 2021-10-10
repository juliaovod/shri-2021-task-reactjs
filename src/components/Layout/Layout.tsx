import React from 'react';

import classNames from 'classnames';

import Footer from '@/components/Footer';

import styles from './Layout.module.css';

type LayoutProps = {
  header: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, header } = props;

  return (
    <div className={classNames(styles.layout)}>
      {header}

      <main className={classNames(styles.layoutContainer)}>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
