export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Hero heading — gradient text adds a modern, polished feel */}
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-3">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          mystore - stg
        </span>
      </h1>
      <p className="text-lg text-gray-500 mb-12 max-w-lg">
        Tailwind CSS is working! Here are some styled elements to prove it.
      </p>

      {/* Color swatches — tests background colors */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Colors</h2>
        <div className="flex gap-3">
          <div className="w-16 h-16 rounded-lg bg-blue-500" />
          <div className="w-16 h-16 rounded-lg bg-green-500" />
          <div className="w-16 h-16 rounded-lg bg-yellow-400" />
          <div className="w-16 h-16 rounded-lg bg-red-500" />
          <div className="w-16 h-16 rounded-lg bg-purple-500" />
        </div>
      </section>

      {/* Typography — tests text sizing and font weights */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Typography</h2>
        <p className="text-sm text-gray-500">Small text</p>
        <p className="text-base text-gray-700">Base text</p>
        <p className="text-xl font-medium text-gray-800">Large text</p>
        <p className="text-3xl font-bold text-gray-900">Extra large bold</p>
      </section>

      {/* Buttons — tests padding, rounded corners, hover states */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Buttons</h2>
        <div className="flex gap-3">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Primary
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Secondary
          </button>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Success
          </button>
        </div>
      </section>

      {/* Card grid — tests responsive grid, shadows, and padding */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Cards</h2>
        {/* grid: 1 column on mobile, 3 columns on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Sneakers", "T-Shirt", "Backpack"].map((product) => (
            <div
              key={product}
              className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Placeholder image area */}
              <div className="w-full h-40 bg-gray-100 rounded-lg mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{product}</h3>
              <p className="text-gray-500 text-sm mt-1">$49.99</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
