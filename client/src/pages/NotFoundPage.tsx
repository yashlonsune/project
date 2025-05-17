import { Link } from 'react-router-dom';
import { ShoppingBag, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="pt-24 min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container-custom max-w-lg text-center">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold font-heading mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/" className="btn-primary flex items-center justify-center gap-2">
            <Home size={18} />
            Back to Home
          </Link>
          <Link to="/products" className="btn-secondary flex items-center justify-center gap-2">
            <ShoppingBag size={18} />
            Shop Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;