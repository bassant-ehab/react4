import React from 'react';
import { useFormik } from 'formik';

import * as Yup from "yup";

export default function Contact() {
  function submitContact () {console.log('submit');}
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    


    let validateScheme = Yup.object({
      name: Yup.string().min(3,'name min length is 3').max(10,'name max length is 10').required('name is required'),
      email:Yup.string().required("Email is Required").email(),
      
      password: Yup.string().matches(passwordRegex,'password should be 8 digits , having upper and lower case, special character'),
      

    })

  

  let formik = useFormik({
    initialValues :{
      name : '',
      age: '',
      email :'',
      password :'',
      
    }, validateScheme,
    onSubmit : submitContact
  })
  return <>
    <div className="w-50 mx-auto py-5">
      <form onSubmit={formik.handleSubmit}>
        
        
        <input type="text" className='form-control border-0 border-bottom py-3' value={formik.values.name} name='name' onChange={formik.handleChange}
        onBlur={formik.handleBlur} id='name' placeholder='userName' />
        



        
        <input type="email" className='form-control border-0 border-bottom py-3' value={formik.values.email} email='email' onChange={formik.handleChange}
        onBlur={formik.handleBlur} id='email' placeholder='userEmail' />




        
        <input type="number" className='form-control border-0 border-bottom py-3' value={formik.values.age} age='age' onChange={formik.handleChange}
        onBlur={formik.handleBlur} id='Age' placeholder='userAge' />



        
        <input type="password" className='form-control border-0 border-bottom py-3' value={formik.values.email} password='password' onChange={formik.handleChange}
        onBlur={formik.handleBlur} id='password' placeholder='userPassword' />




        



        <button className='bg_Home border-0 text-capitalize text-white py-2 rounded mt-4'>send message</button>




      </form>
    </div>
  </>
}

