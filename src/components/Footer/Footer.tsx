import React from 'react';

import classNames from 'classnames';

import Copyright from '@/components/Copyright';

import styles from './Footer.module.css';

type FooterProps = {
  className?: string;
}

const FOOTER_NAV_LINKS = [
  {
    href: '/',
    title: 'Support',
  },
  {
    href: '/',
    title: 'Learning',
  },
  {
    href: '/',
    title: 'Русская версия',
  },
];

const Footer: React.FC<FooterProps> = (props) => {
  const { className } = props;

  return (
    <footer className={classNames(styles.footer, className)}>
      <div className={styles.footerContainer}>
        <div className={styles.footerNav}>
          {FOOTER_NAV_LINKS.map((link) => (
            <a className={classNames(styles.footerLink)} href={link.href} key={link.title}>
              {link.title}
            </a>
          ))}
        </div>

        <Copyright />
      </div>
    </footer>
  );
};

export default React.memo(Footer);
