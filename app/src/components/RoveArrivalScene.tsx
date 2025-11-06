export function RoveArrivalScene() {
  return (
    <svg
      viewBox="0 0 720 420"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="rove-arrival-title"
      role="img"
    >
      <title id="rove-arrival-title">
        A confident ROVE rider walks from a sunlit shop toward a bike while other riders watch.
      </title>
      <defs>
        <linearGradient id="arrivalSky" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1c0f33" />
          <stop offset="100%" stopColor="#08040e" />
        </linearGradient>
        <radialGradient id="sunBeam" cx="65%" cy="25%" r="60%">
          <stop offset="0%" stopColor="rgba(255, 212, 137, 0.9)" />
          <stop offset="100%" stopColor="rgba(255, 212, 137, 0)" />
        </radialGradient>
        <linearGradient id="robeShade" x1="0%" y1="0%" x2="100%" y2="80%">
          <stop offset="0%" stopColor="#5c37d9" />
          <stop offset="100%" stopColor="#2f1376" />
        </linearGradient>
        <linearGradient id="glassPane" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(132, 103, 233, 0.6)" />
          <stop offset="100%" stopColor="rgba(47, 24, 94, 0.35)" />
        </linearGradient>
        <style>{`
          #rove-parcel {
            animation: parcelGlow 3.8s ease-in-out infinite;
          }
          #rove-rider-shadow {
            animation: shadowPulse 3s ease-in-out infinite;
          }
          #rove-rider {
            animation: riderStride 4.8s ease-in-out infinite;
            transform-origin: 340px 280px;
          }
          @keyframes parcelGlow {
            0% { filter: drop-shadow(0 0 0 rgba(165, 120, 59, 0.45)); }
            50% { filter: drop-shadow(0 0 12px rgba(235, 182, 118, 0.55)); }
            100% { filter: drop-shadow(0 0 0 rgba(165, 120, 59, 0.45)); }
          }
          @keyframes shadowPulse {
            0%, 100% { opacity: 0.65; transform: scaleX(1); }
            50% { opacity: 0.8; transform: scaleX(1.08); }
          }
          @keyframes riderStride {
            0%, 100% { transform: translateX(0); }
            45% { transform: translateX(-6px); }
          }
        `}</style>
      </defs>
      <rect width="720" height="420" fill="url(#arrivalSky)" />
      <rect x="0" y="270" width="720" height="150" fill="rgba(10,6,22,0.85)" />
      <circle cx="500" cy="98" r="180" fill="url(#sunBeam)" opacity="0.65" />
      <g transform="translate(120, 80)">
        <rect x="0" y="80" width="460" height="200" rx="18" fill="rgba(29, 16, 46, 0.8)" />
        <rect x="16" y="92" width="428" height="176" rx="14" fill="rgba(17, 9, 28, 0.82)" />
        <rect x="248" y="0" width="168" height="240" rx="20" fill="rgba(18, 9, 30, 0.82)" />
        <rect x="264" y="18" width="136" height="170" rx="14" fill="url(#glassPane)" />
        <rect x="282" y="48" width="100" height="112" rx="12" fill="rgba(255, 255, 255, 0.09)" />
        <path
          d="M306 156h60l-12 62h-42z"
          fill="rgba(75, 58, 170, 0.35)"
        />
        <circle cx="332" cy="118" r="20" fill="rgba(215, 194, 255, 0.35)" />
        <circle cx="344" cy="96" r="10" fill="rgba(255, 216, 170, 0.7)" />
        <rect x="40" y="110" width="162" height="18" rx="8" fill="rgba(73, 51, 124, 0.45)" />
        <rect x="52" y="132" width="134" height="10" rx="5" fill="rgba(111, 84, 178, 0.4)" />
        <g transform="translate(360, 210)">
          <path
            d="M-24 0c36-18 112-30 160-16"
            stroke="rgba(136,104,222,0.25)"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </g>
      </g>
      <g id="rove-rider-shadow" transform="translate(260, 310)">
        <ellipse cx="110" cy="24" rx="84" ry="18" fill="rgba(21, 13, 30, 0.74)" />
      </g>
      <g id="rove-rider">
        <g transform="translate(272, 102)">
          <path
            d="M80 230c-8-26-10-54-2-84h36c4 30 8 56-4 84z"
            fill="#21122f"
          />
          <path
            d="M40 112c18-24 86-24 104 0l-12 22H44z"
            fill="#22152f"
          />
          <rect x="38" y="30" width="112" height="118" rx="52" fill="url(#robeShade)" />
          <path
            d="M58 138h92l16 68c2 12-4 16-10 16H50c-4 0-12-4-10-16z"
            fill="#34205a"
          />
          <path
            d="M112 202 96 296h48l22-80z"
            fill="#190d26"
          />
          <path
            d="M78 202 34 288h52l40-80z"
            fill="#1a0f27"
          />
          <circle cx="96" cy="46" r="42" fill="#f7d5c4" />
          <path
            d="M58 34c4-26 38-40 60-22 20-4 40 6 44 28-22-12-48-16-72-6-10 4-20 0-32 0z"
            fill="#160d21"
            opacity="0.85"
          />
          <path
            d="M70 68c12 10 46 18 66-8-2 30-14 50-38 50s-32-16-28-42z"
            fill="#1d132c"
          />
          <rect x="72" y="82" width="46" height="20" rx="10" fill="#140b20" opacity="0.6" />
          <path
            d="M148 82c12-6 34 6 40 24s-4 36-22 46-40 12-54-12"
            fill="#2f164a"
          />
          <path
            d="M142 106c18 8 16 26 6 32-16 10-28-4-22-20"
            fill="#d9ac70"
          />
          <path
            d="M130 112c4 12-2 24-10 28"
            stroke="#b88445"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
        <g id="rove-parcel" transform="translate(344, 190)">
          <image href="/rove-parcel.svg" width="160" height="120" />
        </g>
      </g>
      <g transform="translate(88, 248)">
        <ellipse cx="72" cy="110" rx="62" ry="16" fill="rgba(17, 10, 25, 0.64)" />
        <g transform="translate(16, -32)" opacity="0.72">
          <rect x="32" y="60" width="54" height="20" rx="9" fill="#131523" />
          <path
            d="M32 80H12l-12 28h36z"
            fill="#222739"
          />
          <circle cx="26" cy="112" r="12" fill="#0c0d15" />
          <circle cx="26" cy="112" r="6" fill="#3c3f53" />
          <circle cx="90" cy="112" r="12" fill="#0c0d15" />
          <circle cx="90" cy="112" r="6" fill="#3c3f53" />
          <path
            d="M58 16c38-6 64 14 72 54l-44 12c-12-24-30-42-30-66z"
            fill="#313f5a"
          />
        </g>
        <text
          x="72"
          y="150"
          fontFamily="'Inter', sans-serif"
          fontSize="12"
          textAnchor="middle"
          fill="rgba(209,200,246,0.68)"
        >
          “Koi nayi company hai kya?”
        </text>
      </g>
      <g transform="translate(548, 300)">
        <ellipse cx="40" cy="42" rx="48" ry="14" fill="rgba(13,7,20,0.65)" />
        <path
          d="M0 40c12-22 34-36 60-34"
          stroke="rgba(124, 98, 207, 0.3)"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>
      <g transform="translate(520, 130)" opacity="0.78">
        <path
          d="M0 224c10-68 38-112 92-132"
          stroke="rgba(146,115,233,0.3)"
          strokeWidth="12"
          strokeLinecap="round"
        />
      </g>
      <g transform="translate(472, 94)" opacity="0.78">
        <text
          x="92"
          y="32"
          fontSize="28"
          fontWeight="700"
          fontFamily="'Inter', sans-serif"
          fill="rgba(255,230,200,0.85)"
        >
          ROVE PARTNER
        </text>
        <rect x="60" y="44" width="160" height="12" rx="6" fill="rgba(255,255,255,0.2)" />
      </g>
    </svg>
  );
}
