import React from 'react'

export default function Home() {
  return <>
  <div className="div">

  </div>
  <div className="home-info bg_Home container-fluid text-center p-4">
    <img className='pt-4 w-30 mt-4 mb-4' src={require("../../Images/avataaars.png")} alt="logo" />
    <h1 className='text-uppercase fw-bolder text-white'>start framework</h1>
    <div className="lines d-flex text-center justify-content-center">
      <div className="line me-3"></div>
      <i className='fa-solid fa-star me-4 ms-4 text-white p-3'></i>
      <div className="line ms-3"></div>
        
      
    </div>
    <p className='text-capitalize text-white'>Graphic Artist - Web Designer - Illustrator</p>
  </div>
  </>
}
