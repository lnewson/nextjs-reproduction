import NextImage, { StaticImageData } from 'next/image';

export type ImageProps = {
  src: string | StaticImageData;
  alt?: string;
  className?: string;
};

// See https://nextjs.org/docs/pages/api-reference/components/image#placeholder
const SUPPORTED_BLUR_EXTS = new Set(['png', 'jpg', 'jpeg', 'webp', 'avif']);

export const Image = (props: ImageProps) => {
  const src = typeof props.src === 'string' ? props.src : (props.src as StaticImageData).src;
  const ext = src.split('.').pop();
  // Next.js doesn't support all file types to generate blur images so only do it for valid ones
  const placeholder = ext && SUPPORTED_BLUR_EXTS.has(ext) ? 'blur' : undefined;

  return <NextImage {...props} alt={props.alt || ''} placeholder={placeholder} />;
};
