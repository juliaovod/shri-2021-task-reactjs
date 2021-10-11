import React from 'react';

import classNames from 'classnames';

import config from '@/config.json';
import Footer from '@/components/Footer';

import styles from './Layout.module.css';

type LayoutProps = {
  header: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, header } = props;

  return (
    <div className={classNames(styles.layout)} id={config.LAYOUT_ROOT_ID}>
      {header}

      <main className={classNames(styles.layoutContainer)}>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
