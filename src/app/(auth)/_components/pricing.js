export default function Pricing() {
  return (
    <section className="min-h-screen max-w-7xl mx-auto px-6 py-28 text-left font-main">
      <div className="mb-24">
        <h2 className="text-5xl font-bold md:text-5xl mt-2">Pricing</h2>
        <p className="text-gray-500 mt-6 md:text-xl max-w-2xl text-base font-medium">
          Smarter pitch deck evaluation starts here. Get up to 10 slides for
          free upgrade for unlimited access and deeper AI insights.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-xl p-8 shadow-sm">
          <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full mb-8">
            Free
          </span>
          <h3 className="text-3xl font-bold mb-12">$0</h3>
          <hr className="my-6" />
          <ul className="space-y-2 text-gray-500 text-base font-medium">
            <li>✅ 10 Maximum slide</li>
            <li>✅ Support PDF file</li>
            <li>✅ Generate 1x/day</li>
            <li>✅ Free updates</li>
          </ul>
          <button className="mt-12 w-full bg-blue-700 text-white py-2 rounded-full font-semibold hover:bg-blue-800 transition">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="border rounded-xl p-8 shadow-sm">
          <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full mb-8">
            Pro
          </span>
          <h3 className="text-3xl font-bold mb-12">$12</h3>
          <hr className="my-6" />
          <ul className="space-y-2 text-gray-500 text-base font-medium">
            <li>✅ 20 Maximum slide</li>
            <li>✅ Support PDF & PPTX file</li>
            <li>✅ Generate 4x/day</li>
            <li>✅ Free updates</li>
          </ul>
          <button className="mt-12 w-full bg-blue-700 text-white py-2 rounded-full font-semibold hover:bg-blue-800 transition">
            Get Started
          </button>
        </div>

        {/* Elite Plan */}
        <div className="border rounded-xl p-8 shadow-sm">
          <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full mb-8">
            Elite
          </span>
          <h3 className="text-3xl font-bold mb-12">$38</h3>
          <hr className="my-6" />
          <ul className="space-y-2 text-gray-500 text-base font-medium">
            <li>✅ 50 Maximum slide</li>
            <li>✅ Support all files</li>
            <li>✅ Generate 10x/day</li>
            <li>✅ Early beta access</li>
          </ul>
          <button className="mt-12 w-full bg-blue-700 text-white py-2 rounded-full font-semibold hover:bg-blue-800 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
