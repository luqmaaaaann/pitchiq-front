export default function Footer() {
  return (
    <footer className="relative font-main text-slate-600 pt-16 pb-10 px-6 sm:px-10 bg-white overflow-hidden">
      {/* Radial Biru Di Pojok Kiri Bawah*/}
      <div className="absolute bottom-0 left-0 w-120 h-70 bg-[radial-gradient(circle_at_bottom_left,_rgba(96,165,250,0.9),_transparent_50%)] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-black">Pitchdeck Evaluator</h2>
          <p className="mt-4 text-gray-500 text-base font-medium text-left">
            It is an AI-powered web application that helps founders evaluate
            their pitch decks quickly, consistently, and accurately.
          </p>
          <div className="mt-4 flex space-x-4 text-sm text-slate-500">
            <a href="#">IG</a>
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
          </div>
        </div>
        <div className="grid md:justify-end text-sm text-slate-500">
          <div className="flex flex-col gap-2 text-gray-500 text-base font-medium">
            <span className="text-black font-semibold">Home</span>
            <a href="#">Guide</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">FAQ</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between text-gray-500 text-sm font-medium  max-w-7xl mx-auto">
        <p>
          © {new Date().getFullYear()} Pitchdeck Evaluator All rights reserved
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0 text-gray-500 text-sm font-medium">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
