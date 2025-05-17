import { useState, useEffect } from 'react';
import { ALL_PRODUCTS, PRODUCT_CATEGORIES } from '../utils/constants';
import ProductCard from '../components/products/ProductCard';
import { Search, SlidersHorizontal, X } from 'lucide-react';

const ProductsPage = () => {
  const [products, setProducts] = useState(ALL_PRODUCTS);
  const [filteredProducts, setFilteredProducts] = useState(ALL_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter products based on category, search term, and price range
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by price range
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setFilteredProducts(result);
  }, [products, selectedCategory, searchTerm, priceRange]);

  // Handle price range change
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max]);
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchTerm('');
    setPriceRange([0, 500]);
  };

  return (
    <div className="pt-24 min-h-screen">
      <div className="container-custom py-8">
        <h1 className="text-3xl md:text-4xl font-bold font-heading mb-6">Our Collection</h1>
        
        {/* Mobile filter button */}
        <div className="md:hidden mb-4">
          <button 
            className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md" 
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal size={20} />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Mobile (slides in) */}
          <div 
            className={`fixed inset-0 bg-white z-40 transition-transform duration-300 overflow-auto md:hidden ${
              showFilters ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Filters</h3>
                <button 
                  className="text-gray-500"
                  onClick={() => setShowFilters(false)}
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Mobile filters content */}
              <div className="space-y-6">
                {/* Search */}
                <div>
                  <h4 className="font-medium mb-2">Search</h4>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="input-field pl-10"
                    />
                    <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                
                {/* Categories */}
                <div>
                  <h4 className="font-medium mb-2">Categories</h4>
                  <div className="space-y-2">
                    {PRODUCT_CATEGORIES.map((category) => (
                      <div key={category.value} className="flex items-center">
                        <input
                          type="radio"
                          id={`category-mobile-${category.value}`}
                          name="category-mobile"
                          checked={selectedCategory === category.value}
                          onChange={() => setSelectedCategory(category.value)}
                          className="mr-2"
                        />
                        <label htmlFor={`category-mobile-${category.value}`}>{category.name}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div>
                  <h4 className="font-medium mb-2">Price Range</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(priceRange[0], parseInt(e.target.value))}
                      className="w-full"
                    />
                  </div>
                </div>
                
                {/* Reset Filters */}
                <button
                  onClick={resetFilters}
                  className="w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded transition-colors"
                >
                  Reset Filters
                </button>
                
                {/* Apply Filters (Mobile) */}
                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
          
          {/* Filters - Desktop (sidebar) */}
          <div className="hidden md:block w-64 space-y-6">
            {/* Search */}
            <div>
              <h4 className="font-medium mb-2">Search</h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field pl-10"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            {/* Categories */}
            <div>
              <h4 className="font-medium mb-2">Categories</h4>
              <div className="space-y-2">
                {PRODUCT_CATEGORIES.map((category) => (
                  <div key={category.value} className="flex items-center">
                    <input
                      type="radio"
                      id={`category-${category.value}`}
                      name="category"
                      checked={selectedCategory === category.value}
                      onChange={() => setSelectedCategory(category.value)}
                      className="mr-2"
                    />
                    <label htmlFor={`category-${category.value}`}>{category.name}</label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price Range */}
            <div>
              <h4 className="font-medium mb-2">Price Range</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(priceRange[0], parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
            
            {/* Reset Filters */}
            <button
              onClick={resetFilters}
              className="w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded transition-colors"
            >
              Reset Filters
            </button>
          </div>
          
          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search term</p>
                <button
                  onClick={resetFilters}
                  className="btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <>
                <p className="mb-4 text-gray-600">{filteredProducts.length} products found</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;