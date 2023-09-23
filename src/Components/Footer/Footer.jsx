import React from 'react'

export default function Footer() {
  return (
    <footer>
  <div className='bg-main first-footer p-5'>
    <div className="container p-5">
        <div className="row">
            <div className="col-md-4 text-white">
                <h2 className='text-capitalize text-white text-align-center'>location</h2>
                <p className='text-white'>2215 John Daniel Drive</p>
                <p className='text-white'>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 text-white">
                <h2>AROUND THE WEB</h2>
                <ul className="social text-white d-flex cursor-pointer ">
                    <div className="ball">
                    <i className="fa-brands mx-2 fa-facebook"></i>
                    </div>
                    <div className="ball">
                    <i className="fa-brands mx-2 fa-twitter"></i>
                    </div>
                    <div className="ball">
                    <i className="fa-brands mx-2 fa-linkedin-in"></i>
                    </div>
                    <div className="ball">
                    <i className='fab mx-2 fa-youtube'></i>
                    </div>
                </ul>
            </div>
            <div className="col-md-4 text-white">
                <h2>ABOUT FREELANCER</h2>
                <p className='text-center'>Freelance is a free to use, licensed Bootstrap theme <br /> created by Route</p>
            </div>
        </div>
    </div>
    


    </div>
    <div className="second-footer main-bg text-white p-3">
        <div className="container">
            <p className='text-center'>Copyright © Your Website 2021</p>
        </div>

    </div>
    
  </footer>
  
  )
}
