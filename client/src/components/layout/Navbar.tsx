import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Menu, X, Search } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const { cartItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white text-dark shadow-md py-2'
          : 'bg-transparent text-white py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl md:text-3xl font-heading font-bold"
          style={{ color: isScrolled || isMobileMenuOpen ? 'var(--color-primary)' : 'white' }}
        >
          Artisan Leather
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium hover:text-primary transition-colors ${
              location.pathname === '/' ? 'text-accent' : ''
            }`}
            style={{ color: isScrolled ? 'var(--color-text)' : '' }}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={`font-medium hover:text-primary transition-colors ${
              location.pathname === '/products' ? 'text-accent' : ''
            }`}
            style={{ color: isScrolled ? 'var(--color-text)' : '' }}
          >
            Shop
          </Link>
          <a 
            href="#about" 
            className="font-medium hover:text-primary transition-colors"
            style={{ color: isScrolled ? 'var(--color-text)' : '' }}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="font-medium hover:text-primary transition-colors"
            style={{ color: isScrolled ? 'var(--color-text)' : '' }}
          >
            Contact
          </a>
        </div>

        {/* Desktop Right Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          <Link to="/cart" className="hover:text-primary transition-colors relative">
            <ShoppingBag size={20} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
          {isAuthenticated ? (
            <div className="relative group">
              <Link to="/profile" className="hover:text-primary transition-colors">
                <User size={20} />
              </Link>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link to="/profile" className="block px-4 py-2 text-dark hover:bg-gray-100">
                  Profile
                </Link>
                <button 
                  onClick={logout} 
                  className="block w-full text-left px-4 py-2 text-dark hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to="/signin" className="hover:text-primary transition-colors">
              <User size={20} />
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-dark" />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-dark' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`font-medium ${
                location.pathname === '/' ? 'text-primary' : 'text-dark'
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`font-medium ${
                location.pathname === '/products' ? 'text-primary' : 'text-dark'
              }`}
            >
              Shop
            </Link>
            <a href="#about" className="font-medium text-dark">
              About
            </a>
            <a href="#contact" className="font-medium text-dark">
              Contact
            </a>
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex items-center justify-between">
                <Link to="/cart" className="flex items-center text-dark">
                  <ShoppingBag size={20} className="mr-2" />
                  <span>Cart ({cartItems.length})</span>
                </Link>
                {isAuthenticated ? (
                  <>
                    <Link to="/profile" className="flex items-center text-dark">
                      <User size={20} className="mr-2" />
                      <span>Profile</span>
                    </Link>
                    <button
                      onClick={logout}
                      className="text-red-500 font-medium"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link to="/signin" className="flex items-center text-dark">
                    <User size={20} className="mr-2" />
                    <span>Sign In</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;