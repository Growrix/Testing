import Image from "next/image";

export function FluidImage({
  alt,
  className,
  priority = false,
  src,
}: {
  alt: string;
  className?: string;
  priority?: boolean;
  src: string;
}) {
  return <Image alt={alt} className={className} height={1200} priority={priority} src={src} width={1600} />;
}