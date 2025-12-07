export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 18L12 6L18 18"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="hidden sm:block">
        <div className="text-xl font-semibold">CtrlZs</div>
        <div className="text-[10px] -mt-1 text-white/60">Undo ordinary</div>
      </div>
    </div>
  );
}
