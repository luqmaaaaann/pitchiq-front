export default function Guide() {
  return (
    <section
      id="guide"
      className="scroll-mt-34 min-h-screen font-main py-20 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.9),_transparent_45%)]"
    >
      <div className="max-w-7xl mx-auto text-left md:px-6 px-6">
        <h2 className="text-4xl font-bold text-black mb-4">
          Guide to Getting Started
        </h2>
        <p className="text-gray-500 mb-24 md:text-xl max-w-2xl text-base font-medium">
          Ready to evaluate your pitchdeck with AI? This step-by-step guide will
          walk you through the process
        </p>
        <div className="relative sm:border-t sm:border-gray-300">
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
// import React from "react";

// export default function Guide() {
//   return (
//     <section
//       id="guide"
//       className="scroll-mt-32 min-h-screen font-main py-20 px-4 sm:px-6 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.9),_transparent_46%)]"
//     >
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
//           Guide to Getting Started
//         </h2>
//         <p className="text-gray-500 mb-12 md:text-lg font-medium">
//           Ready to evaluate your pitchdeck with AI? This step-by-step guide will
//           walk you through the process
//         </p>

//         <div className="space-y-12 relative border-l border-gray-300 pl-6">
//           {/* Step 1 */}
//           <div className="relative">
//             <div className="absolute -left-7 top-0 w-10 h-10 rounded-full bg-white border-2 border-blue-500 text-blue-600 flex items-center justify-center font-semibold shadow-sm">
//               1
//             </div>
//             <h3 className="text-lg md:text-xl font-semibold text-black mb-1">
//               Step 1: Create Account
//             </h3>
//             <p className="text-gray-600 text-base md:text-[16px] font-medium leading-relaxed">
//               No account yet? It only takes a minute to sign up and unlock our
//               features.
//             </p>
//           </div>

//           {/* Step 2 */}
//           <div className="relative">
//             <div className="absolute -left-7 top-0 w-10 h-10 rounded-full bg-white border-2 border-blue-500 text-blue-600 flex items-center justify-center font-semibold shadow-sm">
//               2
//             </div>
//             <h3 className="text-lg md:text-xl font-semibold text-black mb-1">
//               Step 2: Upload File
//             </h3>
//             <p className="text-gray-600 text-base md:text-[16px] font-medium leading-relaxed">
//               Easily upload your pitchdeck in PDF format, limited to 10 slides.
//             </p>
//           </div>

//           {/* Step 3 */}
//           <div className="relative">
//             <div className="absolute -left-7 top-0 w-10 h-10 rounded-full bg-white border-2 border-blue-500 text-blue-600 flex items-center justify-center font-semibold shadow-sm">
//               3
//             </div>
//             <h3 className="text-lg md:text-xl font-semibold text-black mb-1">
//               Step 3: Review and Improve
//             </h3>
//             <p className="text-gray-600 text-base md:text-[16px] font-medium leading-relaxed">
//               Receive AI-generated feedback along with a feasibility score.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
