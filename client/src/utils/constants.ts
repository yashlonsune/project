export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const SHOE_SIZES = ['6', '7', '8', '9', '10', '11', '12', '13'];

// Dummy products data
export const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Classic Oxford',
    description: 'Timeless Oxford design crafted from premium full-grain leather. Features a sleek silhouette with traditional closed lacing.',
    price: 24900,
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
    price: 23200,
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
    price: 20700,
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
    price: 27300,
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
    price: 29000,
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
    price: 18200,
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
    price: 24000,
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
    price: 26500,
    image: 'https://images.pexels.com/photos/293405/pexels-photo-293405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'formal',
    featured: false,
    stock: 14,
    rating: 4.9,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['brown', 'black', 'burgundy']
  },
  {
    id: '9',
    name: 'Penny Loafers',
    description: 'Classic penny loafers with traditional strap detail. Perfect blend of casual comfort and formal elegance.',
    price: 21500,
    image: 'https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'casual',
    featured: false,
    stock: 16,
    rating: 4.7,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['brown', 'black', 'burgundy']
  },
  {
    id: '10',
    name: 'Desert Boots',
    description: 'Versatile desert boots made from premium suede. Features a crepe sole for ultimate comfort.',
    price: 19900,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'boots',
    featured: false,
    stock: 24,
    rating: 4.6,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['sand', 'brown', 'black']
  },
  {
    id: '11',
    name: 'Wholecut Oxfords',
    description: 'Elegant wholecut Oxfords crafted from a single piece of leather. The epitome of minimalist luxury.',
    price: 31500,
    image: 'https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'formal',
    featured: false,
    stock: 10,
    rating: 4.9,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['black', 'dark brown']
  },
  {
    id: '12',
    name: 'Chukka Boots',
    description: 'Versatile chukka boots with clean lines and ankle-high design. Perfect for both casual and semi-formal occasions.',
    price: 22900,
    image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'boots',
    featured: false,
    stock: 18,
    rating: 4.7,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['brown', 'black', 'tan']
  }
];

// Product categories
export const PRODUCT_CATEGORIES = [
  { name: 'All', value: 'all' },
  { name: 'Formal', value: 'formal' },
  { name: 'Casual', value: 'casual' },
  { name: 'Boots', value: 'boots' }
];