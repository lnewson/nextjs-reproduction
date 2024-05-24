import { MDXProvider } from '@mdx-js/react';
import type { MDXComponents } from 'mdx/types';
import React from 'react';
import { Image } from '~/components/image/image';
import { Link } from '~/components/link/link';

type MDXProps = {
  children: React.ReactNode;
};

// Components that override standard Markdown elements
const standard = {
  a: Link,
  img: Image,
};

// Components that can be used directly in an MDX file
const custom = {
  Image,
};

const components = {
  ...standard,
  ...custom,
} as MDXComponents;

export const MDX = (props: MDXProps) => {
  return <MDXProvider components={components}>{props.children}</MDXProvider>;
};
