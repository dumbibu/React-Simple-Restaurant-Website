import React from 'react'

const MenuCard = ({menudata}) => {
  return (
    <>
    <section className="main-card--cointainer">
    {menudata.map((curElem) =>{

      const{id,name,category,image,description}=curElem;

        return (
        <>
        <div className='card-container' key={id}>
        <div className='card'>
        <div className='cardbody'>
          <span className='card-number card-circle subtle'>{id}</span>
          <span className='card-author subtle'>{category}</span>
          <h2 className='card-title'>{name}</h2>
          <span className='card-discription subtle'>
          {description}
          </span>
          <div className='card-read'>Read</div>
        </div>
        <img className='card-media' alt="images" src={image}></img>
        <span className='card-tag subtle'>Order Now</span>
      </div>
    </div>
    </>
        );
    })} 
    </section>
    </>
  );
};

export default MenuCard