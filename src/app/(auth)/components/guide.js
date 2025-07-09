export default function Guide() {
  return (
    <section className="h-[80vh] font-main bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.9),_transparent_46%)] py-20 px-4">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-4xl font-bold text-black mb-4">
          Guide to Getting Started
        </h2>
        <p className="text-gray-500 mb-24 md:text-xl max-w-2xl text-base font-medium">
          Ready to evaluate your pitchdeck with AI? This step-by-step guide will
          walk you through the process
        </p>
        <div className="relative border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-start gap-12 md:gap-6">
            <div className="relative pt-12 pr-6 md:w-1/3">
              <div className="absolute -top-6 left-0 w-12 h-12 rounded-full border-4 border-gray-500 bg-white flex items-center justify-center text-xl font-bold text-gray-600">
                1
              </div>
              <h3 className="md:text-2xl text-2xl font-semibold text-black mb-2">
                Step 1: Create Account
              </h3>
              <p className="text-gray-500 text-base font-medium">
                No account yet? It only takes a minute to sign up and unlock our
                features.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative pt-12 pr-6 md:w-1/3">
              <div className="absolute -top-6 left-0 w-12 h-12 rounded-full border-4 border-gray-500 bg-white flex items-center justify-center text-xl font-bold text-gray-600">
                2
              </div>
              <h3 className="md:text-2xl text-2xl font-semibold text-black mb-2">
                Step 2: Upload File
              </h3>
              <p className="text-gray-500 text-base font-medium">
                Easily upload your pitchdeck in PDF format, limited to 10 slides
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative pt-12 pr-6 md:w-1/3">
              <div className="absolute -top-6 left-0 w-12 h-12 rounded-full border-4 border-gray-500 bg-white flex items-center justify-center text-xl font-bold text-gray-600">
                3
              </div>
              <h3 className="md:text-2xl text-2xl font-semibold text-black mb-2">
                Step 3: Review and Improve
              </h3>
              <p className="text-gray-500 text-base font-medium">
                Receive AI-generated feedback along with a feasibility score.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
