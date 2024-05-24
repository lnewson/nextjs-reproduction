import clsx from 'clsx';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import styles from './link.module.css';

export type LinkProps = Omit<NextLinkProps, 'href'> & {
  href?: string;
};

const isExternalLink = (url?: string) =>
  url && (url.startsWith('http:') || url.startsWith('https:') || url.startsWith('mailto:'));

export const Link = (props: LinkProps) => {
  const isExternal = isExternalLink(props.href);
  const isInternal = !isExternal;
  const classes = clsx(styles.link, isInternal && styles.internal, isExternal && styles.external);
  const target = isExternal ? '_blank' : undefined;

  return <NextLink {...props} href={props.href ?? '#'} className={classes} target={target} />;
};
