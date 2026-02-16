import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img alt="Step2Career" className="h-8 w-8 object-contain" src="/step2career-logo.png" />
              <span className="text-lg font-semibold text-white">Step2Career</span>
            </Link>
            <p className="mt-2 text-sm">
              Your Complete Career Toolkit
            </p>
            <p className="mt-3 text-sm">
              Contact: <a href="mailto:support@step2career.com" className="text-amber-400 hover:underline">support@step2career.com</a>
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Links</h4>
            <ul className="mt-3 space-y-2">
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/tools" className="hover:text-white">Tools</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Legal</h4>
            <ul className="mt-3 space-y-2">
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
              <li><Link to="/refund" className="hover:text-white">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © 2026 Step2Career. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
