import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/products/${product.id}`}
      className="product-card group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick add button on hover */}
        <div 
          className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="bg-white text-primary font-medium px-4 py-2 rounded-md flex items-center">
            <ShoppingBag size={16} className="mr-2" />
            View Details
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-lg">{product.name}</h3>
        <p className="text-primary font-semibold mt-1">₹{product.price.toLocaleString('en-IN')}</p>
      </div>
    </Link>
  );
};

export default ProductCard;