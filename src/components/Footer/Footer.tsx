import React from 'react';

import classNames from 'classnames';

import styles from './Footer.module.css';

type FooterProps = {
  className?: string;
  copyright: React.ReactNode;
  navLinks: { href: string; title: string }[];
}

const Footer: React.FC<FooterProps> = (props) => {
  const { className, copyright, navLinks } = props;

  return (
    <footer className={classNames(styles.footer, className)}>
      <div className={styles.footerContainer}>
        <div className={styles.footerNav}>
          {navLinks.map((link) => (
            <a className={classNames(styles.footerLink)} href={link.href} key={link.title}>
              {link.title}
            </a>
          ))}
        </div>

        {copyright}
      </div>
    </footer>
  );
};

export default React.memo(Footer);
