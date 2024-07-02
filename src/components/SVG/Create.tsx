import { SVGProps } from "./SVG.props";

const ChevronLeftComponent = (props: SVGProps): JSX.Element => {
  const { stroke = "#4D81E7" } = props;

  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2_95)">
        <path
          d="M11.2278 4.11157H4.22778C3.69735 4.11157 3.18864 4.32229 2.81357 4.69736C2.4385 5.07243 2.22778 5.58114 2.22778 6.11157V20.1116C2.22778 20.642 2.4385 21.1507 2.81357 21.5258C3.18864 21.9009 3.69735 22.1116 4.22778 22.1116H18.2278C18.7582 22.1116 19.2669 21.9009 19.642 21.5258C20.0171 21.1507 20.2278 20.642 20.2278 20.1116V13.1116"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.7278 2.61159C19.1256 2.21376 19.6652 1.99026 20.2278 1.99026C20.7904 1.99026 21.33 2.21376 21.7278 2.61159C22.1256 3.00941 22.3491 3.54898 22.3491 4.11159C22.3491 4.67419 22.1256 5.21376 21.7278 5.61159L12.2278 15.1116L8.22778 16.1116L9.22778 12.1116L18.7278 2.61159Z"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_95">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.227783 0.111572)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ChevronLeftComponent;
