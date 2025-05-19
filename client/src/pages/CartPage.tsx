import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Trash, Plus, Minus, ShoppingBag } from 'lucide-react';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // In a real application, this would redirect to a checkout page or process
    setTimeout(() => {
      alert('This is a demo website. No actual payment will be processed.');
      setIsCheckingOut(false);
    }, 1500);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container-custom py-32 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
          <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link to="/products" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <div className="container-custom py-8">
        <h1 className="text-3xl font-bold font-heading mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="hidden sm:grid sm:grid-cols-5 bg-gray-50 p-4 border-b">
                <div className="sm:col-span-2">
                  <span className="font-medium">Product</span>
                </div>
                <div className="text-center">
                  <span className="font-medium">Price</span>
                </div>
                <div className="text-center">
                  <span className="font-medium">Quantity</span>
                </div>
                <div className="text-right">
                  <span className="font-medium">Total</span>
                </div>
              </div>
              
              {/* Cart Items List */}
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}`} className="p-4 border-b last:border-b-0">
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
                    {/* Product Info */}
                    <div className="sm:col-span-2 flex items-center">
                      <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <Link to={`/products/${item.id}`} className="font-medium hover:text-primary">
                          {item.name}
                        </Link>
                        <p className="text-gray-500 text-sm">Size: {item.size}</p>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="text-center">
                      <span className="sm:hidden inline-block mr-2 font-medium">Price:</span>
                      ₹{item.price.toLocaleString('en-IN')}
                    </div>
                    
                    {/* Quantity */}
                    <div className="flex items-center justify-center">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className={`w-8 h-8 flex items-center justify-center ${
                            item.quantity <= 1 ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-10 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    
                    {/* Item Total */}
                    <div className="flex items-center justify-between sm:justify-end">
                      <span className="font-medium sm:hidden">Total:</span>
                      <div className="flex items-center">
                        <span className="font-medium">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                        <button
                          onClick={() => removeFromCart(item.id, item.size)}
                          className="ml-4 text-gray-500 hover:text-red-500"
                        >
                          <Trash size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Continue Shopping */}
            <div className="mt-6">
              <Link to="/products" className="text-primary hover:underline flex items-center">
                &larr; Continue Shopping
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {cartTotal >= 15000 ? 'Free' : '₹750'}
                  </span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>
                      ₹{(cartTotal + (cartTotal >= 15000 ? 0 : 750)).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    Including taxes
                  </p>
                </div>
              </div>
              
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className={`btn-primary w-full ${
                  isCheckingOut ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
              </button>
              
              <div className="mt-6 text-sm text-gray-500">
                <p className="mb-2">We accept:</p>
                <div className="flex gap-2">
                  <div className="bg-gray-100 rounded px-2 py-1">UPI</div>
                  <div className="bg-gray-100 rounded px-2 py-1">Net Banking</div>
                  <div className="bg-gray-100 rounded px-2 py-1">Cards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;