import React from 'react'
import MenuItem from './MenuItem'

const Menu = ({ menuItems }) => {
  return (
    <div className='section-center'>
      { menuItems.map(item => (
        <MenuItem key={item.id} item={item} />
      )) }
    </div>
  )
}

export default Menu