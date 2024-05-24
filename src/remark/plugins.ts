import frontmatter from 'remark-frontmatter';
import gfm from 'remark-gfm';
import mdxFrontmatter from 'remark-mdx-frontmatter';
import { PluggableList } from 'unified';

export const remarkPlugins: PluggableList = [
  gfm,
  frontmatter,
  [mdxFrontmatter, { name: 'meta' }],
];
