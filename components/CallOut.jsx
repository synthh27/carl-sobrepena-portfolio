import React from 'react'

const CallOut = (props) => {
  return (
    <div className={`flex flex-col border-l-2 border-brass bg-ink-soft px-6 py-5 gap-2${props.className ? ` ${props.className}` : ""}`}>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brass">
            {props.title || "Title"}
        </p>
        <p className="font-display text-lg italic leading-snug text-paper">
            "{props.quote || "\"Caption\""}"
        </p>
    </div>
  )
}

export default CallOut