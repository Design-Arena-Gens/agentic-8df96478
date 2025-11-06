export function ChaiScene() {
  return (
    <svg
      viewBox="0 0 720 420"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="chai-scene-title"
      role="img"
    >
      <title id="chai-scene-title">
        Four delivery riders gather around a chai stall with tired faces and worn-out bikes.
      </title>
      <defs>
        <linearGradient id="duskGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a1151" />
          <stop offset="100%" stopColor="#0f071d" />
        </linearGradient>
        <linearGradient id="stallCanvas" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f8c874" />
          <stop offset="100%" stopColor="#d48340" />
        </linearGradient>
        <linearGradient id="groundFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(33,16,58,0)" />
          <stop offset="100%" stopColor="rgba(33,16,58,0.6)" />
        </linearGradient>
        <radialGradient id="lanternGlow" cx="50%" cy="0%">
          <stop offset="0%" stopColor="rgba(255,210,120,0.9)" />
          <stop offset="100%" stopColor="rgba(255,210,120,0)" />
        </radialGradient>
        <clipPath id="stallClip">
          <path d="M135 126h210l-18 64H148z" />
        </clipPath>
        <style>{`
          .steam {
            animation: steamRise 6s ease-in-out infinite;
          }
          @keyframes steamRise {
            0% { opacity: 0; transform: translateY(8px) scale(0.9); }
            40% { opacity: 0.7; transform: translateY(-14px) scale(1); }
            70% { opacity: 0.4; transform: translateY(-28px) scale(1.05); }
            100% { opacity: 0; transform: translateY(-36px) scale(1.1); }
          }
        `}</style>
      </defs>
      <rect width="720" height="420" fill="url(#duskGradient)" />
      <rect y="270" width="720" height="150" fill="url(#groundFade)" />
      <circle cx="120" cy="110" r="120" fill="rgba(146, 114, 226, 0.18)" />
      <circle cx="510" cy="130" r="160" fill="rgba(255, 176, 96, 0.14)" />
      <g transform="translate(110, 100)">
        <rect x="12" y="70" width="260" height="20" rx="10" fill="#392051" />
        <rect x="0" y="90" width="284" height="112" fill="#251336" />
        <rect x="20" y="0" width="244" height="60" rx="14" fill="url(#stallCanvas)" />
        <g clipPath="url(#stallClip)">
          <rect x="145" y="20" width="46" height="30" fill="#ffdfa0" opacity="0.9" />
          <circle cx="168" cy="38" r="20" fill="rgba(255,231,190,0.35)" />
        </g>
        <rect x="32" y="114" width="24" height="64" fill="#331c4e" />
        <rect x="228" y="114" width="24" height="64" fill="#331c4e" />
        <g className="steam" transform="translate(160, 66)">
          <path
            d="M0 0c12 6 14 14 10 22s-6 18 6 26"
            fill="none"
            stroke="rgba(255, 243, 206, 0.72)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
        <circle cx="143" cy="92" r="12" fill="rgba(255, 216, 145, 0.55)" />
        <circle cx="180" cy="92" r="12" fill="rgba(255, 216, 145, 0.55)" />
        <rect x="100" y="96" width="110" height="6" rx="3" fill="#ffdca4" opacity="0.3" />
      </g>
      <g transform="translate(52, 180)">
        <ellipse cx="120" cy="188" rx="84" ry="26" fill="rgba(41,21,58,0.58)" />
        <g transform="translate(78, 12)">
          <path d="M18 88l-36 40" stroke="#433050" strokeWidth="6" strokeLinecap="round" />
          <path d="M64 90l32 38" stroke="#433050" strokeWidth="6" strokeLinecap="round" />
          <rect x="10" y="70" width="64" height="16" rx="6" fill="#1f1a27" />
          <rect x="22" y="0" width="36" height="62" rx="18" fill="#22213a" />
          <rect x="14" y="60" width="52" height="26" rx="12" fill="#5128a6" />
          <path d="M22 62h20l16 32H20z" fill="#1d1832" />
          <circle cx="40" cy="10" r="18" fill="#f3d3ca" />
          <path d="M24 26c8 6 24 6 32 0 0 14-4 26-16 26s-16-12-16-26z" fill="#30223f" />
          <path d="M44 48c-2 12-6 22-16 24" stroke="#20162c" strokeWidth="4" strokeLinecap="round" />
        </g>
        <text
          x="132"
          y="190"
          fontFamily="'Inter', sans-serif"
          fontSize="13"
          fill="rgba(202,186,246,0.75)"
        >
          “Yaar, poora hafta nikal gaya...”
        </text>
      </g>
      <g transform="translate(220, 188)">
        <ellipse cx="116" cy="182" rx="82" ry="24" fill="rgba(29,18,46,0.6)" />
        <g transform="translate(68, 0)">
          <path d="M12 92l-34 42" stroke="#3a2a4a" strokeWidth="6" strokeLinecap="round" />
          <path d="M60 94l30 40" stroke="#3a2a4a" strokeWidth="6" strokeLinecap="round" />
          <rect x="2" y="72" width="60" height="14" rx="6" fill="#181824" />
          <rect x="12" y="4" width="42" height="58" rx="18" fill="#1a273c" />
          <rect x="6" y="60" width="54" height="30" rx="14" fill="#d93d3d" />
          <path d="M12 62h22l16 34H12z" fill="#121221" />
          <circle cx="32" cy="10" r="18" fill="#f9dfd0" />
          <path d="M18 26c8 7 22 7 32 0 0 16-6 28-16 28s-16-12-16-28z" fill="#201b2e" />
        </g>
        <text
          x="128"
          y="182"
          fontFamily="'Inter', sans-serif"
          fontSize="13"
          fill="rgba(202,186,246,0.72)"
        >
          “Kuch kamaai hi nahi...”
        </text>
      </g>
      <g transform="translate(380, 196)">
        <ellipse cx="120" cy="178" rx="80" ry="22" fill="rgba(19,13,31,0.62)" />
        <g transform="translate(72, -4)">
          <path d="M12 92l-28 40" stroke="#402c4a" strokeWidth="6" strokeLinecap="round" />
          <path d="M60 98l36 38" stroke="#402c4a" strokeWidth="6" strokeLinecap="round" />
          <rect x="6" y="70" width="60" height="16" rx="6" fill="#171524" />
          <rect x="16" y="6" width="38" height="58" rx="18" fill="#1d202f" />
          <rect x="8" y="58" width="54" height="30" rx="14" fill="#27a5c6" />
          <path d="M16 62h20l12 34H14z" fill="#0f141f" />
          <circle cx="34" cy="10" r="18" fill="#f4d1c2" />
          <path d="M20 26c8 8 22 8 30 0 0 16-6 26-14 26s-16-10-16-26z" fill="#201528" />
          <rect x="22" y="10" width="24" height="6" rx="3" fill="#362c4a" />
        </g>
        <text
          x="124"
          y="178"
          fontFamily="'Inter', sans-serif"
          fontSize="13"
          fill="rgba(202,186,246,0.72)"
        >
          “Sab commission mein chala jaata hai.”
        </text>
      </g>
      <g transform="translate(520, 202)">
        <ellipse cx="110" cy="170" rx="76" ry="22" fill="rgba(16,9,24,0.62)" />
        <g transform="translate(62, -8)">
          <path d="M18 92l-32 38" stroke="#3a2c49" strokeWidth="6" strokeLinecap="round" />
          <path d="M58 94l38 40" stroke="#3a2c49" strokeWidth="6" strokeLinecap="round" />
          <rect x="6" y="70" width="58" height="16" rx="6" fill="#171420" />
          <rect x="18" y="4" width="36" height="58" rx="18" fill="#252b36" />
          <rect x="8" y="60" width="54" height="28" rx="14" fill="#f4b21b" />
          <circle cx="34" cy="10" r="18" fill="#f8dac5" />
          <path d="M20 26c8 6 22 6 28 0 0 16-6 26-14 26s-14-10-14-26z" fill="#1c1624" />
        </g>
      </g>
      <g transform="translate(64, 310)">
        <path
          d="M36 32c18-20 62-34 102-34 40 0 70 14 84 34"
          stroke="rgba(134, 112, 206, 0.25)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <g transform="translate(20, -18)">
          <path d="M0 58h34l8-24-26-8z" fill="#25243a" />
          <circle cx="12" cy="64" r="12" fill="#14121f" />
          <circle cx="12" cy="64" r="6" fill="#535064" />
          <circle cx="60" cy="64" r="12" fill="#14121f" />
          <circle cx="60" cy="64" r="6" fill="#535064" />
        </g>
        <g transform="translate(146, -16)">
          <path d="M0 58h36l10-26-28-6z" fill="#1a1b2a" />
          <circle cx="12" cy="64" r="12" fill="#111019" />
          <circle cx="12" cy="64" r="6" fill="#47445d" />
          <circle cx="64" cy="64" r="12" fill="#111019" />
          <circle cx="64" cy="64" r="6" fill="#47445d" />
        </g>
      </g>
      <g transform="translate(82, 110)">
        <circle cx="250" cy="64" r="40" fill="url(#lanternGlow)" opacity="0.45" />
        <circle cx="540" cy="34" r="42" fill="rgba(255,196,130,0.16)" />
      </g>
    </svg>
  );
}
