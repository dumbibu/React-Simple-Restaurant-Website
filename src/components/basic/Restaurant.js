import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi";
import MenuCard from './MenuCard';

const Restaurant = () => {
  const [menudata,setmenudata] =React.useState(Menu);
  const filter=(category)=>{
    const updatedlist=Menu.filter((curElem)=>{
      return curElem.category===category;
    })
    setmenudata(updatedlist)
  }
  return (
    <>
    <nav className='navbar'>
      <div className='btn-group'>
        <button className='btn-group__item' onClick={()=>filter("breakfast")}>Breakfast</button>
        <button className='btn-group__item' onClick={()=>filter("lunch")}>Lunch</button>
        <button className='btn-group__item' onClick={()=>filter("evening")}>Evening</button>
        <button className='btn-group__item' onClick={()=>filter("dinner")}>Dinner</button>
        <button className='btn-group__item' onClick={()=>setmenudata(Menu)}>All</button>
      </div>
    </nav>
    <MenuCard menudata={menudata}/>
    </>
  )
}

export default Restaurant