import Link from "next/link";
import Button from "./button";
import Image from "next/image";

export function Header() {
  return (
    <nav className="fixed z-10 flex w-full flex-col bg-gradient-to-b from-gray-100 to-transparent px-6 py-2 backdrop-blur-[1px] md:px-12 lg:px-16">
      <div className="flex flex-row items-center justify-between">
        <Link href="/" className="text-primary">
          <Image src="/logo.svg" alt="Logo" width={90} height={32} />
        </Link>
        <div className="flex flex-row gap-x-3">
          <Button
            variant="secondary"
            size="small"
            href="https://www.linkedin.com/in/aranbc/"
            openInNewTab
          >
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={16}
              height={16}
            />
            LinkedIn
          </Button>
          <Button
            variant="primary"
            size="small"
            href="https://github.com/aranbruce"
            openInNewTab
          >
            <Image
              src="/icons/github.svg"
              alt="Github"
              width={16}
              height={16}
            />
            Github
          </Button>
        </div>
      </div>
    </nav>
  );
}
