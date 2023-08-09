import React from 'react'

export default function NavLayout() {
  return (
    <div>
        <Link to="product">Product</Link>
        <Link to="about">About</Link>
        <outlet />
    </div>
  )
}
