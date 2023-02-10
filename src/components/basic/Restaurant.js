import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList=[
  ...new Set(
    Menu.map((curElem)=>{
 return curElem.category;
})),"All"]

const Restaurant = () => {
  const [menudata,setmenudata] =React.useState(Menu);
  const [menulist,setmenulist]=React.useState(uniqueList);
  const filter=(category)=>{
    if(category==="All")
    {
      setmenudata(Menu);
      return;
    }
    const updatedlist=Menu.filter((curElem)=>{
      return curElem.category===category;
    })
    setmenudata(updatedlist)
  }
  return (
    <>
    <Navbar filter={filter} menulist={menulist}/>
    <MenuCard menudata={menudata}/>
    </>
  )
}

export default Restaurant