function Palace() {
  return (
    <div className="royal-palace">
      <svg
        viewBox="0 0 1000 420"
        xmlns="http://www.w3.org/2000/svg"
        className="palace-svg"
      >
        <defs>
          <linearGradient id="palaceWall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#684354" />
            <stop offset="100%" stopColor="#241725" />
          </linearGradient>

          <linearGradient id="goldTrim" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#94683c" />
            <stop offset="50%" stopColor="#f1ce83" />
            <stop offset="100%" stopColor="#94683c" />
          </linearGradient>

          <radialGradient id="windowGlow">
            <stop offset="0%" stopColor="#ffdc83" />
            <stop offset="100%" stopColor="#a75c28" />
          </radialGradient>

          <filter id="lightGlow">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        {/* MAIN PALACE BODY */}
        <rect
          x="100"
          y="225"
          width="800"
          height="195"
          fill="url(#palaceWall)"
          stroke="#b28a58"
          strokeWidth="2"
        />

        {/* CENTRAL BALCONY */}
        <rect x="280" y="185" width="440" height="45" fill="#4c3040" />

        <path
          d="M270 230 H730"
          stroke="url(#goldTrim)"
          strokeWidth="5"
        />

        {/* CENTRAL DOME */}
        <path
          d="M350 225 C350 105 410 65 500 65 C590 65 650 105 650 225 Z"
          fill="#523345"
          stroke="#c29a60"
          strokeWidth="3"
        />

        <path
          d="M385 225 C385 130 430 95 500 95 C570 95 615 130 615 225"
          fill="none"
          stroke="#94704d"
          strokeWidth="2"
        />

        {/* CENTRAL DOME FINIAL */}
        <path d="M500 65 V25" stroke="#e9c47c" strokeWidth="4" />
        <circle cx="500" cy="19" r="7" fill="#e9c47c" />
        <path d="M500 5 L506 15 L500 25 L494 15 Z" fill="#e9c47c" />

        {/* LEFT DOME */}
        <path
          d="M120 225 C120 125 165 95 230 95 C295 95 340 125 340 225 Z"
          fill="#523345"
          stroke="#b28a58"
          strokeWidth="3"
        />

        <path d="M230 95 V65" stroke="#e9c47c" strokeWidth="3" />
        <circle cx="230" cy="60" r="5" fill="#e9c47c" />

        {/* RIGHT DOME */}
        <path
          d="M660 225 C660 125 705 95 770 95 C835 95 880 125 880 225 Z"
          fill="#523345"
          stroke="#b28a58"
          strokeWidth="3"
        />

        <path d="M770 95 V65" stroke="#e9c47c" strokeWidth="3" />
        <circle cx="770" cy="60" r="5" fill="#e9c47c" />

        {/* DOME DECORATION */}
        {[230, 500, 770].map((x) => (
          <g key={x}>
            <path
              d={`M${x - 45} 170 Q${x} 135 ${x + 45} 170`}
              fill="none"
              stroke="#c49b61"
              strokeWidth="2"
            />
            <circle cx={x} cy="150" r="4" fill="#e9c47c" />
          </g>
        ))}

        {/* WINDOWS */}
        {[160, 310, 500, 690, 840].map((x) => (
          <g key={x}>
            <rect
              x={x - 24}
              y="270"
              width="48"
              height="100"
              rx="24"
              fill="#ffb84f"
              opacity="0.25"
              filter="url(#lightGlow)"
            />

            <path
              d={`M${x - 23} 390 V305 Q${x} 270 ${x + 23} 305 V390 Z`}
              fill="url(#windowGlow)"
              stroke="#d4a767"
              strokeWidth="3"
            />

            <path
              d={`M${x} 290 V390 M${x - 20} 330 H${x + 20}`}
              stroke="#67402d"
              strokeWidth="3"
            />
          </g>
        ))}

        {/* BALCONY RAILINGS */}
        <path
          d="M110 230 H890"
          stroke="#e0b873"
          strokeWidth="4"
        />

        {Array.from({ length: 25 }).map((_, index) => (
          <line
            key={index}
            x1={120 + index * 31}
            y1="230"
            x2={120 + index * 31}
            y2="250"
            stroke="#c49b61"
            strokeWidth="2"
          />
        ))}

        {/* SMALL DIYAS */}
        {Array.from({ length: 15 }).map((_, index) => {
          const x = 145 + index * 51;

          return (
            <g key={index}>
              <ellipse
                cx={x}
                cy="258"
                rx="9"
                ry="4"
                fill="#d9a75d"
              />

              <ellipse
                cx={x}
                cy="253"
                rx="4"
                ry="7"
                fill="#ffcb62"
                opacity="0.85"
              />

              <ellipse
                cx={x}
                cy="253"
                rx="7"
                ry="11"
                fill="#ffb13d"
                opacity="0.25"
                filter="url(#lightGlow)"
              />
            </g>
          );
        })}

        {/* PALACE BASE */}
        <path
          d="M75 420 H925"
          stroke="#c49b61"
          strokeWidth="5"
        />

        <path
          d="M100 405 H900"
          stroke="#76513f"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export default Palace;