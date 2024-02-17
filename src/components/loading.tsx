export default function Loading({
  size = 30,
  withLabel = true,
  label = 'Loading',
  strokeWidth = 10,
}): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        display="block"
        width={size}
        height={size}
        fill="rgb(238, 224, 203)"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="rgb(238, 224, 203)"
          strokeWidth={strokeWidth} // Use the custom stroke width
          fill="none"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dasharray"
            dur="2s"
            repeatCount="indefinite"
            from="0 280.8"
            to="138.24 280.8"
          />
          <animate
            attributeName="stroke-dashoffset"
            dur="2s"
            repeatCount="indefinite"
            from="0"
            to="-139.2"
          />
        </circle>
      </svg>
      {withLabel && <p className="text-[#EEE0CB]">{label}</p>}
    </div>
  );
}
