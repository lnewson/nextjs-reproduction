// eslint-disable-next-line import/no-default-export
export default function (props) {
  // Attempt to use the src prop first in case it's StaticImageData, otherwise fallback assuming it's the URL directly
  return props.src ?? props;
}
