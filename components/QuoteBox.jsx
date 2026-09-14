export default function QuoteBox({ index = 0, ...props }) {
  // 1-based sequence: odd (1st, 3rd, ...) = left, even (2nd, 4th, ...) = right
  const isOdd = (index + 1) % 2 !== 0;
  const badgePositionClass = isOdd ? "-left-5" : "-right-5";
  const tailPositionClass = isOdd ? "left-8" : "right-8";

  return (
    <div className={`flex items-center justify-center p- ${props.className || ""}`}>
      <div className="relative max-w-xs md:max-w-sm rounded-2xl shadow-lg hover:shadow-2xl pr-6 pl-12 py-4 lg:px-16 border md:border-4 border-brass-soft bg-ink transition-shadow ease-in-out">
        {/* Quote mark badge, overlapping the edge, side depends on sequence */}
        <div className={`absolute -top-5 -left-5 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-sm bg-brass-soft shadow-md z-10`}>
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 sm:w-6 sm:h-6"
            fill="white"
          >
            <path d="M9.5 7C7 7 5 9 5 11.5S7 16 9.5 16c.3 0 .6 0 .9-.1-.6 2-2.2 3.6-4.4 4.1v2c4-.6 6.7-3.6 6.7-8.2V11.5C12.7 9 10.9 7 9.5 7zM18.5 7C16 7 14 9 14 11.5S16 16 18.5 16c.3 0 .6 0 .9-.1-.6 2-2.2 3.6-4.4 4.1v2c4-.6 6.7-3.6 6.7-8.2V11.5C21.7 9 19.9 7 18.5 7z" />
          </svg>
        </div>

        {/* Chat bubble tail: rotated square, bottom+right borders form the visible point */}
        <div
          className={`absolute -bottom-2.5 md:-bottom-3 ${tailPositionClass} w-5 h-5 md:w-6 md:h-6 bg-ink border-b md:border-b-2 border-r md:border-r-2 border-brass-soft rotate-45`}
        />

        <p className="font-mono font-bold leading-relaxed text-paper-dimmer  text-center text-xs sm:text-sm md:text-md lg:text-xl ">
          {props.quote || "Quote"}
        </p>
      </div>
    </div>
  );
}