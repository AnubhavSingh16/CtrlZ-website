import React from "react";

function FloatingText({
  text = defaultText,
  lines = 2,
  direction = "left", 
  speed = 45,
}) {
  const renderLine = (dir, key) => (
    <div key={key} style={rowStyle}>
      <div
        style={{
          ...trackStyle,
          animation: `${
            dir === "left" ? "scroll-left" : "scroll-right"
          } ${speed}s linear infinite`,
        }}
      >
        {text} {text}
      </div>
    </div>
  );

  return (
    <div style={containerStyle}>
      {lines === 1 && renderLine(direction, 1)}

      {lines === 2 && (
        <>
          {renderLine("left", 1)}
          {renderLine("right", 2)}
        </>
      )}

      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
}

/* ---------- STYLES ---------- */

const defaultText =
  "Video Editing  •  UI/UX Design  •  SEO  •  Web Development  •  Paid Ads  •  Graphic Design  •";

const containerStyle = {
  width: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "4rem 0",
  padding: "3rem 0",
};

const rowStyle = { width: "100%", overflow: "hidden", whiteSpace: "nowrap", textAlign: "center", };

const trackStyle = {
  display: "inline-flex",
  gap: "clamp(2rem, 6vw, 5rem)",

  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 700,
  fontSize: "clamp(24px, 6vw, 64px)",
  lineHeight: "100%",
  letterSpacing: "0%",
  textAlign: "center",
  paddingTop: "1rem",
   paddingBottom: "1rem",

  background: "linear-gradient(180deg, #AB6BFF 0%, #FFFFFF 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  willChange: "transform",
};



export default FloatingText;
