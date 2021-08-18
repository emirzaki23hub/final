import React, { useState, useEffect } from 'react';
import Loggedin from './Loggedin.css'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";


// import Form from "./Form";
import swal from '@sweetalert/with-react';
import { Formik } from "formik";
import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
import * as Yup from "yup"; // used when validating with a pre-built solution
// import { Link } from 'react-router-dom'
import bg from './unj.png';
import bs from './fin.png';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'



function Login  ( ) {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm({
    
  });

  const onSubmit = (data) => {
    
    if (data.email=='admin@upt.ac.id',data.password=='upt123') {
      console.log(data);
      swal("Berhasil!", "Anda Berhasil Masuk", "success")
      history.push("/dashboard");
      reset();
    }
    else{
      swal("Maaf!", "Email atau Password tidak sesuai", "error")
    }

  };
    
    return (
    

      <div className="c-app min-vh-100 c-default-layout flex-row align-items-center" style={{ backgroundColor: "	#292929" }}>
 

      <CContainer>
      
      <div className="tittle"> 
      <CRow>
        
        <CCol> 
         
         <center> <h3 className='logotitle' style={{ color: '#F0FFFF',flexShrink:'1',flexDirection:'row'}}> <strong>  <img className="logos"  src={bg}></img>
          SIM-ASET UPT TIK UNJ <img className="logosa"  src={bs}></img>  </strong></h3> </center> 
     
      
      
       
      </CCol>
      </CRow>
   
      </div>
        <CRow className="justify-content-center">
          <CCol sm="8" lg="5" >
           
              
              <CCard className="p-4" style={{paddingTop:'5px',borderRadius:"5px", backgroundColor: "#e4e6e9", borderColor:"#000000"}}>
              
                <CCardBody>
                  
                  <CForm onSubmit={handleSubmit(onSubmit)}>
                  <center> <h3  style={{fontFamily:'sant-serif', color: '#000000',flexShrink:'1',flexBasis:'row'}}> <strong>Halaman Masuk   </strong></h3> </center>  
                  <hr></hr>
                    <h5  style={{ color: '#000000',fontSize:'18px',fontFamily:'sant-serif'}}> <strong>Username</strong> </h5>
                    <CInputGroup className="email mb-3">
                   
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-envelope-closed" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      
                      <CInput 
                      placeholder="Masukkan username/e-mail anda..."
                     type="email"
                     className={`form-control ${errors.email && "invalid"}`}
                     {...register("email", { required: "Email dibutuhkan!" ,
                     pattern: {
                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                       message: "Penulisan email tidak sesuai",
                     }})}
                     onKeyUp={() => {
                       trigger("email");
                     }}
                      />
                </CInputGroup>
                    {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
                )}
                    <h5 style={{ color: '	#000000',fontSize:'17px',fontFamily:'sans-serif'}}> <strong> Kata Sandi </strong> </h5>
                    <CInputGroup className="password mb-4">
                      <CInputGroupPrepend>
                        
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                          
                        </CInputGroupText>
                        
                      </CInputGroupPrepend>
                      {/* <CInput type="password" placeholder="Masukkan Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" autoComplete="current-password" /> */}
                      <CInput 
                       type="password"
                       autoComplete="password"
                       placeholder="Masukkan kata sandi anda"
                       className={`form-control ${errors.password && "invalid"}`}
                       {...register("password", { required: "Kata Sandi dibutuhkan",
                      minLength: {
                        value: 6,
                        message:"Password Minimmal 6 Digit"

                      }
                      
                      })}
                      onKeyUp={() => {
                       trigger("password");
                     }}
                      />
            
                    </CInputGroup>
                    {errors.password && (
                <p className="text-danger">  {errors.password.message}</p>
              )}
              
                    <CRow>
                      
                      <CCol sm="12" md="6" >
                        
                      <CButton 
                      type="submit" 
                      className="c-subheader-nav-link btn btn-ghost-primary active " 
                      value="Send message"
                      
                      
                      > 
                      <CIcon name="cil-door" />
                      <strong><small style={{fontSize:'15px'}}> Masuk</small></strong>     
                            
                      </CButton>

                      </CCol>
                      <hr></hr>
                      <CCol sm="12" md="6" className="text-right">
                        <CButton color="link" className="px-0 ">Lupa Kata Sandi?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
               </CCardBody>
              </CCard>
           
          </CCol>
        </CRow>
      </CContainer>
    </div>
    
  )
}
export default Login;