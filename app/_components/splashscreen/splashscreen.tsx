import React, { useEffect, useState } from "react";

interface HorizontalProgressBarProps {
  percent: number; // 0 - 100
  width?: number;
  height?: number;
  duration?: number; // بالثواني
}

export const HorizontalProgressBar: React.FC<HorizontalProgressBarProps> = ({
  percent,
  width = 100,
  height = 30,
  duration = 0.3,   // ← هنا مدة الانتقال 1 ثانية
}) => {
  return (
    <div
      style={{ width, height }}
      className="relative rounded-full bg-indigo-100 overflow-hidden shadow-inner"
    >
      <div
        style={{
          width: `${percent}%`,
          transition: `width ${duration}s ease-out`,
          animationDuration: "3s",
        }}
        className="absolute left-0 top-0 h-full rounded-full opacity-85 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-900 bg-[length:200%_100%] animate-wave"
      />
      <style>{`
        @keyframes wave {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
      `}</style>
    </div>
  );
};

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = Date.now();
    const duration = 1000; // 3 ثواني

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);

      if (percent >= 100) {
        clearInterval(interval);
        onFinish();
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 select-none px-6">
      <div className="border border-white/10 rounded-md p-6 mb-6 flex items-center justify-center">
        <img
          src="/logo.svg"
          alt="Company Logo"
          className="w-32 h-32 mb-2 mr-2"
        />
      </div>
      <div className="flex items-center gap-x-2">
        <HorizontalProgressBar
          percent={progress}
          width={200}
          height={15}
        />
        <span className="text-white text-xl poppins">{Math.round(progress)}%</span>
      </div>
    </div>
  );
}
