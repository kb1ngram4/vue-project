import Goods from 'pages/Goods.vue';
import Ratings from 'pages/Ratings.vue';
import Seller from 'pages/Seller.vue';

export default [
  {path:"/goods",component:Goods},
  {path:"/ratings",component:Ratings},
  {path:"/seller",component:Seller},
  {path:"/",redirect:"/goods"}
]