// Footer — displayed at the bottom of every page.
// Contains brand info, quick links, contact details, and a copyright notice.

export default function Footer() {
  // new Date().getFullYear() gives the current year so the copyright stays up to date
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Top section: 3-column grid on medium+ screens, single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">My Store</h3>
            <p className="text-sm">
              Quality products for everyday life. Built with care.
            </p>
          </div>

          {/* Quick links column */}
          <div>
            <h4 className="text-white font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/products" className="hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact info column */}
          <div>
            <h4 className="text-white font-semibold mb-2">Contact</h4>
            <ul className="space-y-1 text-sm">
              <li>hello@mystore.com</li>
              <li>123 Store Street</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          &copy; {currentYear} My Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
