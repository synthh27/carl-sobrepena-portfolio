'use client'

const ScrollingWordsBackground = ({ words }) => {
  const WordRow = ({ reverse = false, duration = 30 }) => {
    const group = (key) => (
      <div key={key} className="flex shrink-0 items-center">
        {words.map((word, i) => (
          <span
            key={i}
            className="mx-6 font-display font-bold uppercase text-4xl lg:text-6xl text-paper-dim/[0.06] tracking-wide"
          >
            {word}
          </span>
        ))}
      </div>
    )

    return (
      <div
        className="flex w-max whitespace-nowrap animate-scroll-x"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {group('a')}
        {group('b')}
      </div>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute -inset-x-1/4 -inset-y-1/2 flex flex-col justify-center gap-20 rotate-[-12deg] lg:blur-sm">
        <WordRow duration={34} />
        <WordRow duration={26} reverse />
        <WordRow duration={40} />
        <WordRow duration={22} reverse />
        <WordRow duration={30} />
        <WordRow duration={22} reverse />
        <WordRow duration={30} />
        <WordRow duration={22} reverse />
        <WordRow duration={30} />
        <WordRow duration={22} reverse />
        <WordRow duration={30} />
      </div>

      <style>{`
        @keyframes scroll-x {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll-x {
          animation-name: scroll-x;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  )
}

export default ScrollingWordsBackground