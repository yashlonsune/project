export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const SHOE_SIZES = ['6', '7', '8', '9', '10', '11', '12', '13'];

// Dummy products data
export const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Classic Oxford',
    description: 'Timeless Oxford design crafted from premium full-grain leather. Features a sleek silhouette with traditional closed lacing.',
    price: 299,
    image: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'formal',
    featured: true,
    stock: 25,
    rating: 4.8,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['brown', 'black', 'burgundy']
  },
  {
    id: '2',
    name: 'Leather Derby',
    description: 'Versatile Derby shoes with open lacing and rounded toe. Made from supple calfskin leather with a durable Goodyear welt construction.',
    price: 279,
    image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'formal',
    featured: true,
    stock: 18,
    rating: 4.7,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['brown', 'black', 'tan']
  },
  {
    id: '3',
    name: 'Handcrafted Loafers',
    description: 'Elegant slip-on loafers with hand-stitched details. Features a comfortable leather insole and a sleek, tapered toe.',
    price: 249,
    image: 'https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'casual',
    featured: true,
    stock: 22,
    rating: 4.9,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['brown', 'black', 'navy']
  },
  {
    id: '4',
    name: 'Brogue Wingtips',
    description: 'Sophisticated wingtip shoes with decorative perforations. Crafted from full-grain leather with a cork-filled insole for comfort.',
    price: 329,
    image: 'https://images.pexels.com/photos/10553290/pexels-photo-10553290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'formal',
    featured: true,
    stock: 15,
    rating: 4.8,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['brown', 'black', 'tan']
  }
];

export const ALL_PRODUCTS = [
  ...FEATURED_PRODUCTS,
  {
    id: '5',
    name: 'Chelsea Boots',
    description: 'Sleek Chelsea boots with elastic side panels for easy wear. Made from premium leather with a comfortable rubber sole.',
    price: 349,
    image: 'https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'boots',
    featured: false,
    stock: 20,
    rating: 4.7,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['brown', 'black', 'burgundy']
  },
  {
    id: '6',
    name: 'Driving Moccasins',
    description: 'Comfortable driving shoes with a flexible sole and distinctive rubber-grommet detail. Perfect for casual wear.',
    price: 219,
    image: 'https://images.pexels.com/photos/1895019/pexels-photo-1895019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'casual',
    featured: false,
    stock: 28,
    rating: 4.6,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['brown', 'navy', 'tan']
  },
  {
    id: '7',
    name: 'Monk Strap Shoes',
    description: 'Sophisticated monk strap shoes with a buckle closure. Crafted from high-quality leather with a leather sole.',
    price: 289,
    image: 'https://images.pexels.com/photos/631988/pexels-photo-631988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'formal',
    featured: false,
    stock: 12,
    rating: 4.8,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['brown', 'black', 'burgundy']
  },
  {
    id: '8',
    name: 'Cap Toe Oxfords',
    description: 'Elegant cap toe Oxford shoes with subtle stitching. Made from premium calfskin with a leather sole.',
    price: 319,
    image: 'https://images.pexels.com/photos/293405/pexels-photo-293405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'formal',
    featured: false,
    stock: 14,
    rating: 4.9,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['brown', 'black', 'burgundy']
  }
];

// Dummy product categories
export const PRODUCT_CATEGORIES = [
  { name: 'All', value: 'all' },
  { name: 'Formal', value: 'formal' },
  { name: 'Casual', value: 'casual' },
  { name: 'Boots', value: 'boots' }
];