// Illustrations SVG simples (à remplacer plus tard par de vraies photos).
const art = {
  breakfast: (
    <>
      <ellipse cx="60" cy="62" rx="48" ry="9" fill="#FFF6E9" />
      <path d="M16 56Q20 24 60 18Q100 24 104 56Q84 44 60 47Q36 44 16 56Z" fill="#D9822B" />
      <path d="M40 28l6 16M60 22v22M80 28l-6 16" stroke="#8A4B12" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  coffee: (
    <>
      <path d="M30 34h50v18a20 20 0 0 1-20 20h-10a20 20 0 0 1-20-20z" fill="#FFF6E9" />
      <path d="M80 40h6a8 8 0 0 1 0 16h-8" fill="none" stroke="#FFF6E9" strokeWidth="5" />
      <path d="M45 26q-5-8 0-14M60 26q-5-8 0-14M75 26q-5-8 0-14" fill="none" stroke="#E8B27A" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  tea: (
    <>
      <path d="M26 36h50v16a18 18 0 0 1-18 18h-14a18 18 0 0 1-18-18z" fill="#FFF6E9" />
      <path d="M76 42h6a7 7 0 0 1 0 14h-8" fill="none" stroke="#FFF6E9" strokeWidth="5" />
      <path d="M86 18Q108 20 102 44Q80 42 86 18Z" fill="#A8E0B8" />
      <path d="M90 24l8 14" stroke="#2F7D5B" strokeWidth="2" />
    </>
  ),
  juice: (
    <>
      <path d="M40 22h44l-6 50H46z" fill="#FFB347" />
      <path d="M72 4l-8 30" stroke="#FFF6E9" strokeWidth="4" strokeLinecap="round" />
      <circle cx="86" cy="24" r="12" fill="#FFD27A" />
      <path d="M86 14v20M76 24h20" stroke="#E8913A" strokeWidth="2" />
    </>
  ),
}

export default function Illustration({ type, className }) {
  return (
    <svg viewBox="0 0 120 80" aria-hidden="true" className={className}>
      {art[type]}
    </svg>
  )
}
