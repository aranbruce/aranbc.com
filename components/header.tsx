import Link from "next/link";
import Button from "./button";

export function Header() {
  return (
    <nav className="fixed z-10 flex w-full flex-col bg-gradient-to-b from-gray-100 to-transparent px-6 py-2 backdrop-blur-[1px] md:px-12 lg:px-16">
      <div className="flex flex-row items-center justify-between">
        <Link href="/" className="text-primary">
          <svg
            width="90"
            height="32"
            viewBox="0 0 90 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M87.867 28.9379C88.6412 30.2712 87.6792 31.9423 86.1374 31.9433C80.7516 31.947 75.3655 31.9571 69.9803 31.9571C64.3641 31.9571 59.8112 27.426 59.8112 21.8365C59.8112 19.8638 60.3783 18.0229 61.3591 16.4665C61.3601 16.4649 61.359 16.4629 61.3571 16.4629V16.4629C61.3553 16.4629 61.3542 16.4609 61.3551 16.4593L69.3505 2.97225C70.1294 1.65853 72.0337 1.66719 72.8006 2.98794L87.867 28.9379ZM44.6187 31.9461H36.8293C35.1724 31.9461 33.8293 30.603 33.8293 28.9461V10.23C33.5036 6.73062 35.2229 3.17199 38.5106 1.27386C42.9864 -1.31024 48.674 0.161751 51.2143 4.56164C52.7158 7.16226 52.7816 10.2037 51.6602 12.7899C51.4478 13.2795 51.5968 13.862 52.0198 14.1876C53.0024 14.9441 53.8545 15.8994 54.5111 17.0366C57.2419 21.7664 55.5552 27.8527 50.7437 30.6306C48.811 31.7464 46.6681 32.1588 44.6187 31.9461ZM18.9207 31.9571H3.49817C1.95104 31.9571 0.989774 30.2758 1.77464 28.9425L17.0846 2.93526C17.8537 1.62884 19.7399 1.61963 20.5217 2.91849L28.5147 16.1982C28.5187 16.2049 28.5139 16.2134 28.5061 16.2134V16.2134C28.4985 16.2134 28.4937 16.2216 28.4974 16.2283C29.3283 17.7349 29.8001 19.4598 29.8001 21.2928C29.8001 27.1826 24.9292 31.9571 18.9207 31.9571Z"
              fill="#161616"
            />
          </svg>
        </Link>
        <div className="flex flex-row gap-x-4">
          <Button
            variant="secondary"
            size="small"
            href="https://www.linkedin.com/in/aranbc/"
            openInNewTab
          >
            LinkedIn
          </Button>
          <Button
            variant="primary"
            size="small"
            href="https://github.com/aranbruce"
            openInNewTab
          >
            Github
          </Button>
        </div>
      </div>
    </nav>
  );
}
