import React from 'react'

const Navbar = ({filter,menulist}) => {
  return (
    <>
        <nav className='navbar'>
      <div className='btn-group'>
      {
        menulist.map((curElem)=>{
            return(
            <button className='btn-group__item' onClick={()=>filter(curElem)}>{curElem}</button>
            )
        })
      }
      </div>
    </nav>
    </>
  )
}

export default Navbar