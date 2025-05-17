import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALL_PRODUCTS, SHOE_SIZES } from '../utils/constants';
import { useCart } from '../contexts/CartContext';
import { Star, Truck, Package, RotateCcw, ChevronRight, Minus, Plus } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(ALL_PRODUCTS.find(p => p.id === id));
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<typeof ALL_PRODUCTS>([]);
  
  useEffect(() => {
    // Find the current product
    const foundProduct = ALL_PRODUCTS.find(p => p.id === id);
    setProduct(foundProduct);
    
    // Reset size and quantity when product changes
    setSelectedSize('');
    setQuantity(1);
    
    // Get related products (same category, excluding current product)
    if (foundProduct) {
      const related = ALL_PRODUCTS
        .filter(p => p.category === foundProduct.category && p.id !== id)
        .slice(0, 3);
      setRelatedProducts(related);
    }
  }, [id]);
  
  if (!product) {
    return (
      <div className="container-custom py-32 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products" className="btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize,
        quantity: quantity
      });
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(prev => Math.min(prev + 1, 10));
  };
  
  const decreaseQuantity = () => {
    setQuantity(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="pt-24">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link to="/products" className="hover:text-primary">Products</Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-gray-900">{product.name}</span>
        </div>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain"
            />
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold font-heading mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                    className={i < Math.floor(product.rating) ? 'text-accent' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">{product.rating} ({Math.floor(product.rating * 10) + 3} reviews)</span>
            </div>
            
            {/* Price */}
            <p className="text-2xl font-semibold text-primary mb-6">${product.price.toFixed(2)}</p>
            
            {/* Description */}
            <p className="text-gray-700 mb-8">{product.description}</p>
            
            {/* Divider */}
            <div className="border-t border-gray-200 my-6"></div>
            
            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Select Size</h3>
                <button className="text-sm text-primary hover:underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {SHOE_SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center border rounded-md transition-colors ${
                      selectedSize === size
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-sm text-gray-500 mt-2">Please select a size</p>
              )}
            </div>
            
            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md ${
                    quantity <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                  }`}
                >
                  <Minus size={16} />
                </button>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                  className="w-16 h-10 border-t border-b border-gray-300 text-center"
                />
                <button
                  onClick={increaseQuantity}
                  disabled={quantity >= 10}
                  className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md ${
                    quantity >= 10 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                  }`}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className={`w-full btn-primary mb-4 flex items-center justify-center gap-2 ${
                !selectedSize ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Add to Cart
            </button>
            
            {/* Shipping & Returns */}
            <div className="space-y-4 mt-8">
              <div className="flex items-start">
                <Truck size={20} className="mr-3 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Free Shipping</h3>
                  <p className="text-sm text-gray-600">Free shipping on all orders over $200</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Package size={20} className="mr-3 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Premium Packaging</h3>
                  <p className="text-sm text-gray-600">Each pair comes in a premium shoe box with dust bag</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <RotateCcw size={20} className="mr-3 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">30-Day Returns</h3>
                  <p className="text-sm text-gray-600">Easy returns within 30 days of purchase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold font-heading mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;