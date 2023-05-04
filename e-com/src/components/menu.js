import React from 'react';
import Carousel  from './Carousel';
import BannerCard from './BannerCard';
import Card from './Card';
import { Order } from './Order';
// import Sidebar from './SideBar';

const menu = () =>{
  return (
    <div>
      {<Carousel />}
      {<Card />}
      {/* {<Sidebar />} */}
      {<BannerCard />}
      {<Order />}
     
    </div>
  );
}
export default menu;



