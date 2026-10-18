/**
 * Thin wrapper around <img> used for every photo across the site.
 * The images in /public/images are placeholder graphics generated for this
 * build (clearly labelled "Sample photo"). To use real photos later, either:
 *   1. Replace the file in /public/images with a real photo using the same
 *      filename (no code changes needed), or
 *   2. Change the `src` prop below to a new filename.
 */
export default function SitePhoto({ src, alt, className = "", rounded = "rounded-3xl" }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`w-full object-cover ${rounded} ${className}`}
    />
  );
}
