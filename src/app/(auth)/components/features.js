import {
  Infinity as InfinityIcon,
  MessagesSquare,
  Zap,
  ZoomIn,
} from "lucide-react";

export default function Features() {
  return (
    <section className="w-full font-main py-32 flex flex-col items-center text-center px-4 bg-blue-50">
      <h2 className="text-5xl font-bold md:text-5xl mt-2">
        Everything You Need to <br />
        <span className="text-blue-600 mt-3 inline-block">
          Refine Your Pitchdeck
        </span>
      </h2>
      <p className="text-gray-500 mt-6 md:text-xl max-w-2xl text-base font-medium">
        Our platform is built to help you refine your pitchdeck with ease.
        Guiding your pitch from upload to insight.
      </p>

      <div className="grid mt-14 grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
        {/* Simple Access */}
        <div className="flex flex-col rounded-xl p-8 min-h-[200px] shadow-lg bg-blue-100">
          <div className="flex items-center gap-4 mb-10">
            <span className="flex h-13 w-13 items-center justify-center border border-blue-300 rounded-full shadow bg-blue-50">
              <ZoomIn className="h-6 w-6" />
            </span>
          </div>
          <h3 className="text-left font-semibold md:text-2xl text-2xl mb-4">
            Simple Access, Your Way
          </h3>
          <p className="text-gray-500 text-base font-medium text-left">
            Sign up with your name, email, and password or just continue with
            Google. Already have an account? Log in instantly and pick up where
            you left off.
          </p>
        </div>

        {/* Upload & Share Your Vision */}
        <div className="flex flex-col rounded-xl p-8 min-h-[200px] shadow-lg bg-blue-100">
          <div className="flex items-center gap-4 mb-10">
            <span className="flex h-13 w-13 items-center justify-center border border-blue-300 rounded-full bg-blue-50 shadow">
              <MessagesSquare className="h-6 w-6" />
            </span>
          </div>
          <h3 className="text-lg text-left font-semibold md:text-2xl mb-4">
            Upload & Share Your Vision
          </h3>
          <p className=" text-gray-500 text-base font-medium text-left">
            Easily upload your pitchdeck (max 10 slides) and fill out key
            information about your product or idea to help AI understand your
            goals better.
          </p>
        </div>

        {/* AI-Powered Analyzing */}
        <div className="flex flex-col rounded-xl p-8 min-h-[200px] shadow-lg bg-blue-100">
          <div className="flex items-center gap-4 mb-10">
            <span className="flex h-13 w-13 items-center justify-center border border-blue-300 rounded-full bg-blue-50 shadow">
              <Zap className="h-6 w-6" />
            </span>
          </div>
          <h3 className="text-lg text-left font-semibold md:text-2xl mb-4">
            AI-Powered Analyzing
          </h3>
          <p className=" text-gray-500 text-base font-medium text-left">
            Click “Analyze” and watch AI work its magic. Get instant feedback,
            scoring, summary, strengths & weaknesses analysis, and improvement
            suggestions all tailored to your deck.
          </p>
        </div>
        {/* Save the Analyze */}
        <div className="flex flex-col rounded-xl p-8 min-h-[200px] shadow-lg bg-blue-100">
          <div className="flex items-center gap-4 mb-10">
            <span className="flex h-13 w-13 items-center justify-center border border-blue-300 rounded-full bg-blue-50 shadow">
              <InfinityIcon className="h-6 w-6" />
            </span>
          </div>
          <h3 className="text-lg text-left font-semibold md:text-2xl mb-4">
            Save the Analyze
          </h3>
          <p className="text-gray-500 text-base font-medium text-left">
            Save your analysis results to view them anytime. Need a <br />
            fresh start? You can remove old analyses from your history anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
