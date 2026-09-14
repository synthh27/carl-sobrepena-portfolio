const ScrollingDivider = ({ items = [] }) => {
  // Default items if none provided
  const defaultItems = [
    "LANDING PAGES",
    "FUNNELS",
    "EMAIL AUTOMATION",
    "CHAT AUTOMATION",
    "GRAPHIC DESIGN",
    "BRAND STRATEGY",
    "BRAND IDENTITY",
    "LOGO DESIGN",
    "COPYWRITING",
    "CRM SETUP",
    "SALES OPTIMIZATION",
    "SOCIAL MEDIA MARKETING",
  ];

  const dividerItems = items.length > 0 ? items : defaultItems;

  // Repeat items multiple times for seamless loop
  const repeatedItems = Array(3).fill(dividerItems).flat();

  return (
    <>
      <style>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
      `}</style>

      <div className="w-full overflow-hidden bg-ink py-4">
        <div className="flex items-center gap-4 lg:gap-6 whitespace-nowrap">
          <div
            className="flex items-center gap-4 lg:gap-6"
            style={{
              animation: 'scroll-horizontal 40s linear infinite',
              width: '300%',
            }}
          >
            {repeatedItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4 lg:gap-6 flex-shrink-0">
                <span className="font-display text-xs lg:text-sm uppercase tracking-[0.15em] text-paper-dim">
                  {item}
                </span>
                <span className="font-display text-xs lg:text-sm uppercase tracking-[0.15em] text-paper-dim">
                  •
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollingDivider;