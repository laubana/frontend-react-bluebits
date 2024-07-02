import { SVGProps } from "./SVG.props";

const ChevronLeftComponent = (props: SVGProps): JSX.Element => {
  const { stroke = "#1D1D1D", style } = props;

  return (
    <svg
      width="10"
      height="18"
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M9 17L1 9L9 1"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronLeftComponent;
