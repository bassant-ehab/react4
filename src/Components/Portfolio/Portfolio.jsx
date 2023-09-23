import React from 'react'
import { useState } from 'react';
import style from './Portfolio.module.css';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleModalClick = () => {
    setSelectedImage(null);
  };

  return <>
    <h1 className="text-center text-uppercase pt-4 mt-4 fw-bold " style={{ color: "#2e3e50" }}>PORTFOLIO COMPONENT</h1>
    <div className="styling d-flex justify-content-center align-items-center pb-4 mb-4">
    <div className="lines d-flex text-center justify-content-center">
      <div className="line me-3"></div>
      <i className='fa-solid fa-star me-4 ms-4 text-white p-3'></i>
      <div className="line ms-3"></div>
        
      
    </div>
    </div>


    <div className="container">

      {selectedImage && (
        <div className={style.bgModal} onClick={handleModalClick}>
          <img src={selectedImage} alt="Selected Image" />
        </div>
      )}

      <div className="row pt-4">
        <div className={`col-md-4 mb-4 ${style.Layer}`}>
          <div className={style.P_image} onClick={() => handleImageClick(require("../../Images/poert1.png"))}>
            <img className='w-100 rounded-4' src={require("../../Images/poert1.png")} alt="Portfolio" />
            <div className={style.mid}>
              <div className={style.icon}><i className="fa-solid fa-plus" style={{ color: "#ffffffff" }}></i></div>
            </div>
          </div>
        </div>

        <div className={`col-md-4 mb-4 ${style.Layer}`}>
          <div className={style.P_image} onClick={() => handleImageClick(require("../../Images/port2.png"))}>
            <img className='w-100 rounded-4' src={require("../../Images/port2.png")} alt="Portfolio" />
            <div className={style.mid}>
              <div className={style.icon}><i className="fa-solid fa-plus" style={{ color: "#ffffffff" }}></i></div>
            </div>
          </div>
        </div>

        <div className={`col-md-4 mb-4 ${style.Layer}`}>
          <div className={style.P_image} onClick={() => handleImageClick(require("../../Images/port3.png"))}>
            <img className='w-100 rounded-4' src={require("../../Images/port3.png")} alt="Portfolio" />
            <div className={style.mid}>
              <div className={style.icon}><i className="fa-solid fa-plus" style={{ color: "#ffffffff" }}></i></div>
            </div>
          </div>
        </div>

        <div className={`col-md-4 mb-4 ${style.Layer}`}>
          <div className={style.P_image} onClick={() => handleImageClick(require("../../Images/poert1.png"))}>
            <img className='w-100 rounded-4' src={require("../../Images/poert1.png")} alt="Portfolio" />
            <div className={style.mid}>
              <div className={style.icon}><i className="fa-solid fa-plus" style={{ color: "#ffffffff" }}></i></div>
            </div>
          </div>
        </div>

        <div className={`col-md-4 mb-4 ${style.Layer}`}>
          <div className={style.P_image} onClick={() => handleImageClick(require("../../Images/port2.png"))}>
            <img className='w-100 rounded-4' src={require("../../Images/port2.png")} alt="Portfolio" />
            <div className={style.mid}>
              <div className={style.icon}><i className="fa-solid fa-plus" style={{ color: "#ffffffff" }}></i></div>
            </div>
          </div>
        </div>

        <div className={`col-md-4 mb-4 ${style.Layer}`}>
          <div className={style.P_image} onClick={() => handleImageClick(require("../../Images/port3.png"))}>
            <img className='w-100 rounded-4' src={require("../../Images/port3.png")} alt="Portfolio" />
            <div className={style.mid}>
              <div className={style.icon}><i className="fa-solid fa-plus" style={{ color: "#ffffffff" }}></i></div>
            </div>
          </div>
        </div>





      </div>
    </div>
  </>
}

