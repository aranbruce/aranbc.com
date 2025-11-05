import Image from "next/image";

interface ProfileBadgeProps {
  src: string;
  alt: string;
  name: string;
}

export function ProfileBadge({ src, alt, name }: ProfileBadgeProps) {
  return (
    <div className="bg-card/30 border-border/50 shadow-card relative flex flex-row items-center gap-x-3 rounded-full border p-1 backdrop-blur-sm">
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        priority
        className="border-border/40 bg-secondary-foreground/20 relative z-10 h-10 w-10 shrink-0 rounded-full border object-cover"
      />
      <h4 className="text-foreground relative z-10 pr-3 text-base font-medium">
        {name}
      </h4>
    </div>
  );
}
