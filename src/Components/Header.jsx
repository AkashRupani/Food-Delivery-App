import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div>
            <img className='logo' src='https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/fooba-by-wanwan-designcrowd.jpg' />
        </div>
        <div className='nav-items'>
            <ul>
                <li>About</li>
                <li>Settings</li>
                <li>Profile</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  )
}

export default Header