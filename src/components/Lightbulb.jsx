export default function LightBulb({ isOn = false }) {
    const warm = {
        ray: "#FFCC00",
        filament: "#FFD740",
        glowStop1: "#FFF8D0",
        glowStop2: "#FFCC00",
        bodyFill: "#FEFCF0",
        bodyStroke: "#DDB800",
    };

    const off = {
        filament: "#C0A050",
        bodyFill: "#EDF0F5",
        bodyStroke: "#B8BEC8",
    };

    const c = isOn ? warm : off;

    return (
        <svg
            width="120"
            height="160"
            viewBox="0 0 120 160"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
        >
            <defs>
                <radialGradient id="bulb-glow" cx="50%" cy="40%" r="55%">
                    <stop offset="0%" stopColor={warm.glowStop1} />
                    <stop offset="100%" stopColor={warm.glowStop2} stopOpacity="0.15" />
                </radialGradient>
            </defs>

            {/* Rays */}
            <g opacity={isOn ? 1 : 0} style={{ transition: "opacity 0.3s ease" }}>
                {[
                    [60, 8, 60, -2],
                    [88, 16, 95, 8],
                    [107, 40, 115, 34],
                    [32, 16, 25, 8],
                    [13, 40, 5, 34],
                    [112, 68, 120, 68],
                    [8, 68, 0, 68],
                ].map(([x1, y1, x2, y2], i) => (
                    <line
                        key={i}
                        x1={x1} y1={y1} x2={x2} y2={y2}
                        stroke={warm.ray}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                ))}
            </g>

            {/* Glass body */}
            <path
                d="M27,90 Q12,76 12,58 Q12,28 38,16 Q48,11 60,11 Q72,11 82,16 Q108,28 108,58 Q108,76 93,90 L93,105 Q93,110 88,110 L32,110 Q27,110 27,105 Z"
                fill={c.bodyFill}
                stroke={c.bodyStroke}
                strokeWidth="1"
                style={{ transition: "fill 0.3s ease, stroke 0.3s ease" }}
            />

            {/* Inner glow */}
            <path
                d="M27,90 Q12,76 12,58 Q12,28 38,16 Q48,11 60,11 Q72,11 82,16 Q108,28 108,58 Q108,76 93,90 L93,105 Q93,110 88,110 L32,110 Q27,110 27,105 Z"
                fill="url(#bulb-glow)"
                opacity={isOn ? 0.92 : 0}
                style={{ transition: "opacity 0.3s ease" }}
            />

            {/* Filament */}
            <line x1="50" y1="96" x2="50" y2="74" stroke={c.filament} strokeWidth="1.2" style={{ transition: "stroke 0.3s ease" }} />
            <line x1="70" y1="96" x2="70" y2="74" stroke={c.filament} strokeWidth="1.2" style={{ transition: "stroke 0.3s ease" }} />
            <path d="M50,74 Q54,58 60,52 Q66,58 70,74" fill="none" stroke={c.filament} strokeWidth="1.5" style={{ transition: "stroke 0.3s ease" }} />
            <path d="M54,66 Q60,55 66,66" fill="none" stroke={isOn ? "#FFD740" : "#C8A840"} strokeWidth="2" style={{ transition: "stroke 0.3s ease" }} />

            {/* Neck */}
            <rect x="36" y="110" width="48" height="6" rx="1.5" fill="#C4C9D4" stroke="#A8AEB8" strokeWidth="0.5" />
            <rect x="36" y="119" width="48" height="6" rx="1.5" fill="#B8BEC8" stroke="#A0A8B4" strokeWidth="0.5" />
            <rect x="38" y="128" width="44" height="6" rx="1.5" fill="#ADB3BC" stroke="#9098A4" strokeWidth="0.5" />

            {/* Base */}
            <rect x="42" y="137" width="36" height="10" rx="3" fill="#8D96A2" stroke="#788090" strokeWidth="0.5" />
            <rect x="46" y="150" width="28" height="7" rx="2.5" fill="#7A8490" stroke="#68747E" strokeWidth="0.5" />
            <line x1="42" y1="141" x2="78" y2="141" stroke="#6E7880" strokeWidth="0.5" strokeDasharray="3,2" />
            <line x1="42" y1="144" x2="78" y2="144" stroke="#6E7880" strokeWidth="0.5" strokeDasharray="3,2" />

            {/* Glass highlight */}
            <ellipse cx="44" cy="44" rx="7" ry="14" fill="white" opacity="0.18" />
        </svg>
    );
}