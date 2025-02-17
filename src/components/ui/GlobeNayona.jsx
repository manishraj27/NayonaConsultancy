import { Globe } from "../magicui/Globe";


export function GlobeDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-40 pb-[30rem] pt-16 md:pb-96">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-heading-1 font-montserrat font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Our Reach is Global
      </span>
      <Globe className="top-72 lg:top-80" />
      {/* <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" /> */}
    </div>
  );
}
