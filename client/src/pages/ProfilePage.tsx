import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, Package, Clock, LogOut } from 'lucide-react';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  
  // Dummy order data
  const orders = [
    {
      id: 'ORD-12345',
      date: '2023-09-15',
      total: 299.00,
      status: 'Delivered',
      items: [
        { name: 'Classic Oxford', quantity: 1, price: 299.00 }
      ]
    },
    {
      id: 'ORD-12346',
      date: '2023-08-22',
      total: 528.00,
      status: 'Delivered',
      items: [
        { name: 'Leather Derby', quantity: 1, price: 279.00 },
        { name: 'Driving Moccasins', quantity: 1, price: 249.00 }
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold font-heading mb-8">My Account</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                    <User />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">{user?.name}</h3>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                </div>
              </div>
              
              <nav className="p-4">
                <ul className="space-y-1">
                  <li>
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={`flex items-center px-4 py-2 w-full rounded-md transition-colors ${
                        activeTab === 'profile'
                          ? 'bg-primary/10 text-primary'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <User size={18} className="mr-3" />
                      <span>Profile</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('orders')}
                      className={`flex items-center px-4 py-2 w-full rounded-md transition-colors ${
                        activeTab === 'orders'
                          ? 'bg-primary/10 text-primary'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <Package size={18} className="mr-3" />
                      <span>Orders</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={logout}
                      className="flex items-center px-4 py-2 w-full rounded-md text-red-500 hover:bg-red-50"
                    >
                      <LogOut size={18} className="mr-3" />
                      <span>Sign Out</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Personal Information</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="input-field"
                        defaultValue={user?.name}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="input-field"
                        defaultValue={user?.email}
                        disabled
                      />
                      <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="input-field"
                      placeholder="Add your phone number"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Default Shipping Address</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Street Address
                        </label>
                        <input
                          type="text"
                          className="input-field"
                          placeholder="Enter your street address"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Apartment, suite, etc.
                        </label>
                        <input
                          type="text"
                          className="input-field"
                          placeholder="Apartment, suite, unit, etc. (optional)"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          className="input-field"
                          placeholder="Enter your city"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          State/Province
                        </label>
                        <input
                          type="text"
                          className="input-field"
                          placeholder="Enter your state or province"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          className="input-field"
                          placeholder="Enter your postal code"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Country
                        </label>
                        <select className="input-field">
                          <option value="">Select a country</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="AU">Australia</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="btn-primary"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-bold">Order History</h2>
                </div>
                
                {orders.length === 0 ? (
                  <div className="p-6 text-center">
                    <Package size={48} className="mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium mb-2">No Orders Yet</h3>
                    <p className="text-gray-500 mb-4">
                      You haven't placed any orders yet.
                    </p>
                    <a href="/products" className="btn-primary">
                      Start Shopping
                    </a>
                  </div>
                ) : (
                  <div className="divide-y">
                    {orders.map((order) => (
                      <div key={order.id} className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-medium">Order {order.id}</h3>
                              <span className={`ml-3 px-2 py-1 text-xs rounded-full ${
                                order.status === 'Delivered' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-blue-100 text-blue-800'
                              }`}>
                                {order.status}
                              </span>
                            </div>
                            <div className="flex items-center mt-1 text-sm text-gray-500">
                              <Clock size={14} className="mr-1" />
                              <span>Placed on {new Date(order.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0">
                            <span className="font-medium">${order.total.toFixed(2)}</span>
                          </div>
                        </div>
                        
                        <div className="border rounded-md overflow-hidden">
                          {order.items.map((item, index) => (
                            <div key={index} className={`p-4 ${
                              index < order.items.length - 1 ? 'border-b' : ''
                            }`}>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <div className="font-medium">{item.name}</div>
                                  <div className="ml-4 text-sm text-gray-500">
                                    Qty: {item.quantity}
                                  </div>
                                </div>
                                <div className="font-medium">
                                  ${item.price.toFixed(2)}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-4 flex items-center justify-end space-x-4">
                          <button className="text-primary hover:underline">
                            View Details
                          </button>
                          <button className="btn-secondary text-sm px-4 py-2">
                            Buy Again
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;