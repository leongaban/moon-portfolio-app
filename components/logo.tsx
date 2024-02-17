interface LogoProps {
  large?: boolean;
}

export default function Logo({ large }: LogoProps) {
  if (large) {
    return (
      <svg
        width="158"
        height="158"
        viewBox="0 0 158 158"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.1808 95.5644C8.03248 61.4226 28.2938 26.329 62.4356 17.1807C96.5774 8.03245 131.671 28.2937 140.819 62.4356C149.968 96.5774 129.706 131.671 95.5644 140.819C61.4226 149.968 26.329 129.706 17.1808 95.5644Z"
          fill="#EEE0CB"
        />
        <mask
          id="mask0_36_13"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="14"
          y="14"
          width="130"
          height="130"
        >
          <circle
            cx="79"
            cy="79"
            r="64"
            transform="rotate(-75 79 79)"
            fill="#D9D9D9"
          />
        </mask>
        <g mask="url(#mask0_36_13)">
          <rect
            x="17.0513"
            y="114.146"
            width="137.475"
            height="86.3975"
            transform="rotate(-45 17.0513 114.146)"
            fill="url(#paint0_linear_36_13)"
          />
        </g>
        <circle cx="104" cy="62" r="7" fill="#D9D9D9" />
        <defs>
          <linearGradient
            id="paint0_linear_36_13"
            x1="85.7889"
            y1="114.146"
            x2="85.7889"
            y2="200.544"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E376A3" />
            <stop
              offset="0.630208"
              stopColor="#E376A3"
              stopOpacity="0.958333"
            />
            <stop offset="1" stopColor="#E376A3" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.20191 24.0856C1.88125 15.4248 7.02095 6.52256 15.6817 4.20191C24.3425 1.88125 33.2448 7.02095 35.5654 15.6817C37.8861 24.3425 32.7464 33.2448 24.0856 35.5654C15.4248 37.8861 6.52256 32.7464 4.20191 24.0856Z"
        fill="#EEE0CB"
      />
      <mask
        id="mask0_36_42"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="3"
        y="3"
        width="34"
        height="34"
      >
        <circle
          cx="19.8837"
          cy="19.8837"
          r="16.2349"
          transform="rotate(-75 19.8837 19.8837)"
          fill="#D9D9D9"
        />
      </mask>

      <g mask="url(#mask0_36_42)">
        <rect
          x="4.1691"
          y="28.7992"
          width="34.8735"
          height="21.9165"
          transform="rotate(-45 4.1691 28.7992)"
          fill="url(#paint0_linear_36_42)"
        />
      </g>

      <circle cx="26.2255" cy="15.5713" r="1.7757" fill="#D9D9D9" />

      <defs>
        <linearGradient
          id="paint0_linear_36_42"
          x1="21.6058"
          y1="28.7992"
          x2="21.6058"
          y2="50.7158"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E376A3" />
          <stop offset="0.630208" stopColor="#E376A3" stopOpacity="0.958333" />
          <stop offset="1" stopColor="#E376A3" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
