import SushiPic from '../images/image_sushi.jpg'
import ButterChickenPic from '../images/image_butterchicken.jpeg'
import TacoPic from '../images/image_taco.jpg'
import PizzaPic from '../images/image_pizza.png'
import SouthIndianThaliPic from '../images/image_southIndian.png'
import NorthIndianThaliPic from '../images/image_northIndian.png'
// CuisineList.js
const cuisineData = [
  {
    id: 1,
    name: 'Sushi',
    type: 'Main Course',
    region: 'Japanese',
    spiceLevel: 'Low',
    image: `${SushiPic}`,
    price: '800.00'
  },
  {
    id: 2,
    name: 'Tacos',
    type: 'Snack',
    region: 'Mexican',
    spiceLevel: 'Medium',
    image: `${TacoPic}`,
    price: '110.00'
  },
  {
    id: 3,
    name: 'Butter Chicken',
    type: 'Main Course',
    region: 'Indian',
    spiceLevel: 'High',
    image: `${ButterChickenPic}`,
    price: '270.00'
  },
  {
    id: 4,
    name: 'Pizza',
    type: 'Main Course',
    region: 'Italian',
    spiceLevel: 'Low',
    image: `${PizzaPic}`,
    price: '530.00'
  },
  {
    id: 5,
    name: 'North Indian Thali',
    type: 'Main Course',
    region: 'Northern India',
    spiceLevel: 'Medium',
    image: `${NorthIndianThaliPic}`,
    price: '430.00'
  },
  {
    id: 6,
    name: 'South Indian Thali',
    type: 'Main Course',
    region: 'Southern India',
    spiceLevel: 'Low',
    image: `${SouthIndianThaliPic}`,
    price: '320.00'
  }
];

export default cuisineData;
