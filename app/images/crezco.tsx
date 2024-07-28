type CrezcoIconProps = {
  width?: number;
  height?: number;
};

export default function CrezcoIcon({
  width = 12,
  height = 12,
}: CrezcoIconProps) {
  return (
    <svg
      width={width}
      height={height}
      className="mr-1 inline-flex"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_482_522)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.9999 0V25.9999H20.7999V5.19999H0V0H25.9999Z"
          fill="#2A6355"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.7999 5.19922V25.9992H15.6V10.3992H0V5.19922H20.7999Z"
          fill="#9BCABE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.6 10.3999V25.9999H10.4V15.5999H0V10.3999H15.6Z"
          fill="#F2EBE4"
        />
        <path d="M10.4 15.6001H0V26.0001H10.4V15.6001Z" fill="#F38173" />
      </g>
      <defs>
        <clipPath id="clip0_482_522">
          <rect width="26" height="26" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
