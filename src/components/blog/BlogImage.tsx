import Image from "next/image";

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}

export default function BlogImage({ src, alt, caption, priority = false }: BlogImageProps) {
  return (
    <figure className="my-8">
      <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-white border border-gray-100">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
