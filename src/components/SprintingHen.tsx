export default function SprintingHen() {
  return (
    <div className="hen-scene" aria-hidden="true" style={{ scale:'0.8' }}>
      <svg className="hen-svg" viewBox="0 0 280 240" fill="none">
        {/* speed lines */}
        <g stroke="#A3755F" strokeWidth={8} strokeLinecap="round">
          <line className="sl sl1" x1={10} y1={90} x2={64} y2={90} />
          <line className="sl sl2" x1={0} y1={122} x2={58} y2={122} />
          <line className="sl sl3" x1={16} y1={152} x2={68} y2={152} />
        </g>

        {/* energy bolts — big & bold */}
        <g stroke="#414042" strokeWidth={5} strokeLinejoin="round">
          <path className="bolt bolt1" d="M232 22l-21 30h14l-10 28 26-36h-14l12-22z" fill="#EE6620" />
          <path className="bolt bolt2" d="M58 30l-17 25h11l-8 23 21-29h-11l10-19z" fill="#F7A32B" />
          <path className="bolt bolt3" d="M254 112l-15 22h10l-7 20 19-25h-10l9-17z" fill="#F7A32B" />
          <path className="bolt bolt4" d="M42 162l-13 19h9l-6 18 16-22h-9l8-15z" fill="#EE6620" />
        </g>

        {/* ground shadow */}
        <ellipse className="hen-shadow" cx={145} cy={218} rx={62} ry={9} fill="rgba(65,64,66,.18)" />

        {/* dust puffs */}
        <g fill="#A3755F">
          <circle className="dust dust1" cx={88} cy={206} r={7} />
          <circle className="dust dust2" cx={102} cy={214} r={5} />
        </g>

        {/* legs (behind body) */}
        <g className="leg leg-back" stroke="#414042" strokeWidth={9} strokeLinecap="round" strokeLinejoin="round">
          <path d="M140 168l-14 22-7 20" />
          <path d="M119 210l-12 4M119 210l1 10" />
        </g>
        <g className="leg leg-front" stroke="#414042" strokeWidth={9} strokeLinecap="round" strokeLinejoin="round">
          <path d="M158 166l11 25 8 18" />
          <path d="M177 209l12 2M177 209l-2 10" />
        </g>

        {/* hen — leaning hard into the sprint */}
        <g className="hen">
          {/* tail feathers — chunky, swept back */}
          <path
            d="M100 102C74 88 46 88 30 100c18 9 52 8 70 6z"
            fill="#EE6620" stroke="#414042" strokeWidth={7} strokeLinejoin="round"
          />
          <path
            d="M98 128C68 118 42 122 28 136c18 5 46 0 62-2z"
            fill="#F7A32B" stroke="#414042" strokeWidth={7} strokeLinejoin="round"
          />
          {/* body — orange egg like the logo, tilted into the run */}
          <ellipse
            cx={140} cy={130} rx={60} ry={46}
            transform="rotate(-16 140 130)"
            fill="#EE6620" stroke="#414042" strokeWidth={8}
          />
          {/* wing — swept back for speed */}
          <path
            className="wing"
            d="M112 126c10-16 36-20 58-8-4 16-24 26-42 22-8-2-13-8-16-14z"
            fill="#F7A32B" stroke="#414042" strokeWidth={7} strokeLinejoin="round"
          />
          {/* neck — stretched forward */}
          <path
            d="M182 102c8-14 16-24 26-32l18 18c-11 7-20 16-27 27z"
            fill="#fff" stroke="#414042" strokeWidth={7} strokeLinejoin="round"
          />
          {/* head — thrust forward */}
          <circle cx={216} cy={72} r={22} fill="#fff" stroke="#414042" strokeWidth={8} />
          {/* comb — sitting on the crown */}
          <path
            d="M202 58c-6-12 3-18 10-12 2-11 14-11 16-2 10-6 18 4 9 14-10 6-24 6-35 0z"
            fill="#fff" stroke="#414042" strokeWidth={7} strokeLinejoin="round"
          />
          {/* beak — sharp, overlapping the head */}
          <path d="M232 63l26 9-22 11z" fill="#EE6620" stroke="#414042" strokeWidth={5} strokeLinejoin="round" />
          {/* wattle */}
          <path d="M228 90q7 10-1 15-8-5-5-15z" fill="#EE6620" stroke="#414042" strokeWidth={4} />
          {/* determined brow */}
          <path d="M211 59l14 5" stroke="#414042" strokeWidth={5} strokeLinecap="round" />
          {/* eye */}
          <circle cx={220} cy={70} r={4} fill="#414042" />
        </g>
      </svg>
    </div>
  )
}
