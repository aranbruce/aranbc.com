import Image from "next/image";

interface ProfileBadgeProps {
  src: string;
  alt: string;
  name: string;
}

export function ProfileBadge({ src, alt, name }: ProfileBadgeProps) {
  return (
    <div className="relative flex flex-row items-center gap-x-3 rounded-full border border-border/50 bg-card/30 p-1 shadow-card backdrop-blur-sm">
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        priority
        className="relative z-10 h-10 w-10 shrink-0 rounded-full border border-border/40 bg-secondary-foreground/20 object-cover"
      />
      <h4 className="relative z-10 pr-3 text-base font-medium text-secondary-foreground">
        {name}
      </h4>
    </div>
  );
}
