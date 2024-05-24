import clsx from 'clsx';
import { NextSeo } from 'next-seo';
import React from 'react';
import { MDX } from '../mdx/mdx';
import styles from './page.module.css';

export type PageLayoutProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export const PageLayout = ({ title, className, children }: PageLayoutProps) => {
  return (
    <>
      <NextSeo title={title} nofollow={false} noindex={false} />
      <div className={clsx(styles.container, className)}>
        <div data-page-content={true} className={styles.article}>
          <MDX>{children}</MDX>
        </div>
      </div>
    </>
  );
};
