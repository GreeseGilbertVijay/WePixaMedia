import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
            <h1>Spincotech</h1>
              {/* <img 
                src="/lovable-uploads/c24581a1-d607-4b4e-a879-875a8504cb45.png" 
                alt="Samatva Awareness" 
                className="h-16 w-auto"
              /> */}
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Our mission is to empower individuals with expert financial guidance and essential
              resources to build, strengthen, and sustain a resilient credit profile—laying the
              foundation for lasting financial well-being and opportunity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Quick Links</h4>
            <ul className="space-y-2">          
              <li><Link to="/about" className="text-slate-300 hover:text-orange-400 transition-colors">About</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-orange-400 transition-colors">Services</Link></li>
              <li><Link to="/faq" className="text-slate-300 hover:text-orange-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Contact Info</h4>
            <div className="space-y-3 text-slate-300">
              <div className="text-sm leading-relaxed">
                <p className="font-medium text-white mb-2">Phone Numbers:</p>
                <p>+91 95008 34238</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-white mb-2">Email:</p>
                <p>info@wepixamedia.com</p>
              </div>
              <div className="text-sm leading-relaxed">
                <p className="font-medium text-white mb-2">Address:</p>
                <p>No.25, Shanthi Apartments, Flat No 3, 1st Floor, Vyasar Street, T.Nagar, Chennai - 600017</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 WePixaMedia. All Rights eserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
