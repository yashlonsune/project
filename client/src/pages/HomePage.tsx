import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../utils/constants';
import ProductCard from '../components/products/ProductCard';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center" />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container-custom relative z-10 text-white">
          <div className={`max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
              Timeless Elegance<br />Handcrafted Perfection
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Experience the luxury of premium leather shoes meticulously crafted for comfort and style that lasts a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn bg-primary hover:bg-primary/90 text-white">
                Shop Collection
              </Link>
              <a href="#about" className="btn border-2 border-white hover:bg-white hover:text-dark transition-colors">
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section bg-light-cream">
        <div className="container-custom">
          <h2 className="section-title">Featured Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link to="/products" className="btn-primary flex items-center gap-2">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white" id="about">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/4946620/pexels-photo-4946620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Artisan crafting leather shoes"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Craft & Heritage</h2>
              <p className="text-lg text-gray-700 mb-6">
                For over three generations, Artisan Leather has been creating exquisite handcrafted shoes that blend timeless design with modern comfort. Our dedication to quality is unwavering.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Each pair of shoes is meticulously crafted by our skilled artisans using traditional techniques and the finest sustainably sourced leathers. We believe that exceptional footwear should not only look stunning but also provide unparalleled comfort and durability.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <Check size={20} className="text-primary mr-2" />
                  <span>Premium full-grain leather</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-primary mr-2" />
                  <span>Handcrafted by master artisans</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-primary mr-2" />
                  <span>Traditional Goodyear welt construction</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-primary mr-2" />
                  <span>Sustainable and ethical practices</span>
                </div>
              </div>
              <a href="#" className="btn-secondary inline-flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-leather-texture bg-cover bg-center relative">
        <div className="absolute inset-0 bg-dark bg-opacity-80"></div>
        <div className="container-custom relative z-10">
          <h2 className="section-title text-white">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Highlight */}
      <section className="section bg-light-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-primary/10 rounded-lg p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
                The Oxford Collection
              </h3>
              <p className="text-gray-700 mb-6">
                Discover our signature Oxford collection, featuring timeless designs crafted with the finest leathers and traditional Goodyear welt construction.
              </p>
              <Link to="/products" className="btn-primary self-start">
                Explore Collection
              </Link>
            </div>
            <div className="bg-secondary/10 rounded-lg p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
                The Chelsea Boot Range
              </h3>
              <p className="text-gray-700 mb-6">
                Our Chelsea boots blend classic style with modern comfort, perfect for both formal occasions and casual everyday wear.
              </p>
              <Link to="/products" className="btn-secondary self-start">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Testimonial data
const testimonials = [
  {
    name: 'James Wilson',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'These are the most comfortable dress shoes Ive ever owned. The quality is exceptional, and theyve aged beautifully over the past year.'
  },
  {
    name: 'Michael Chen',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'The attention to detail is remarkable. From the stitching to the finish, these shoes showcase true craftsmanship. Worth every penny.'
  },
  {
    name: 'Emily Rodriguez',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'I purchased these as a gift for my husband, and he hasnt stopped raving about them. The quality is outstanding, and the customer service was exceptional.'
  },
];

export default HomePage;