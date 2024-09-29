import React from 'react'

function Footer() {
  return (

    <div className='footer'>
      <h3>@saliramchaudhary.All Rights Reserved</h3>
      <div>
        <ul style={{display : 'flex' , gap : '15px'}}>
          <li style={{listStyleType : 'none'}}><i class="fa-brands fa-facebook"></i></li>
          <li style={{listStyleType : 'none'}}><i class="fa-brands fa-twitter"></i></li>
          <li style={{listStyleType : 'none'}}><i class="fa-brands fa-github-alt"></i></li>
          <li style={{listStyleType : 'none'}}><i class="fa-solid fa-globe"></i></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer