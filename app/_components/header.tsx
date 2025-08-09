export default function Header() {
  return (
    <header className="relative  flex flex-col items-center">
      <div className="flex flex-col items-center text-center px-4 pt-84">
        <h1
          className="text-[140px] md:text-[200px] leading-[1.1] font-[Thunder] font-medium bg-clip-text text-transparent"
          style={{
            background:
              "linear-gradient(90deg, #FFFFFF 0%, #565253 46.79%, #FFFFFF 100%)",
            WebkitBackgroundClip: "text",
          }}
        >
          BERMUDA
        </h1>

        <p
          className="mb-4 text-[clamp(16px,4vw,20px)] leading-[26.67px] font-medium font-[Thunder] max-w-2xl mx-auto bg-clip-text text-transparent"
          style={{
            background:
              "linear-gradient(90deg, #FFFFFF 0%, #CBCBCB 50%, #FFFFFF 100%)",
            WebkitBackgroundClip: "text",
          }}
        >
          We build tailored strategies to grow your brand across social platforms and beyond.
        </p>

        <button className="w-[209px] h-[40px] rounded-[24.63px] px-[47.11px] py-[16.89px] text-white text-lg font-medium bg-white/30 shadow-lg transition hover:bg-white/40 flex items-center justify-center z-20">
          Contact us
        </button>
      </div>

      {/* الصور الإضافية */}
      <div className="w-full flex items-center justify-center relative mt-6">
        <img
          src="/circle-top.svg"
          alt="Background Image"
          className="w-[600px] h-[310px] relative z-20"
        />
      </div>
    </header>
  );
}
