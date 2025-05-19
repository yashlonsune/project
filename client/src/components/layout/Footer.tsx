import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-brown text-white pt-16 pb-8" id="contact">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">Artisan Leather</h3>
            <p className="text-light-brown mb-4">
              Handcrafted leather shoes made with passion and precision.
              Each pair tells a story of artisanal excellence and timeless style.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/yash_patil_011" className="text-light-brown hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/yash_patil_011" className="text-light-brown hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com/in/yash-lonsune-0011x" className="text-light-brown hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-light-brown hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-light-brown hover:text-accent transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <a href="#about" className="text-light-brown hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light-brown hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-light-brown hover:text-accent transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-light-brown hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-light-brown hover:text-accent transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-light-brown hover:text-accent transition-colors">
                  Care Instructions
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-4">Stay Updated</h4>
            <p className="text-light-brown mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md focus:outline-none text-dark"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Info */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-brown text-sm mb-4 md:mb-0">
            &copy; {currentYear} Yash Lonsune. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-light-brown hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-light-brown hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;