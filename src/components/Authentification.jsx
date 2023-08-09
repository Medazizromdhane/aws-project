import React from "react";
import * as Components from './AuthComponents';
import {FaFacebook, FaGoogle, FaLinkedin, FaLock, FaRegEnvelope, FaUser} from "react-icons/fa";

function Authentification() {
  const [signIn, toggle] = React.useState(true);
  return(
      <div className='flex items-center justify-center min-h-screen py-2'>
      <Components.Container>

        <Components.SignUpContainer>
          <div className='flex flex-col items-center'>
            <div className='text-left font-bold'>
              <span className='text-green-500'>SAAS</span>ESTIMATION
            </div>
            <Components.Form>
            <div className='py-10'>
              <h2 className='text-3xl font-bold text-green-500 mb-2'>Create Account</h2>
              <div className='border-2 w-10 border-green-500 inline-block mb-2'></div>
              <div className='flex justify-center my-2'>
                <a href='#' className='border-2 border-gray-200 rounded-full px-3 mx-1'>
                  <FaFacebook className='text-sm' />
                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full px-3 mx-1'>
                  <FaLinkedin className='text-sm' />
                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full px-3 mx-1'>
                  <FaGoogle className='text-sm' />
                </a>
              </div>
              <div className='flex flex-col items-center'>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <FaUser className='text-gray-400 m-2' />
                  <input type='text' name='name' placeholder='Name' className='bg-gray-100 outline-none text-sm flex-1' />
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <FaRegEnvelope className='text-gray-400 m-2' />
                  <input type='email' name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' />
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <FaLock className='text-gray-400 m-2' />
                  <input type='password' name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1' />
                </div>
                <a href='#' className='border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white'>Sign Up</a>
              </div>
            </div>
            </Components.Form>

          </div>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <div className='flex flex-col items-center'>
            <div className='text-left font-bold'>
              <span className='text-green-500'>SAAS</span>ESTIMATION
            </div>
            <div className='py-10'>
              <h2 className='text-3xl font-bold text-green-500 mb-2'>Sign in to Account</h2>
              <div className='border-2 w-10 border-green-500 inline-block mb-2'></div>
              <div className='flex justify-center my-2'>
                <a href='#' className='border-2 border-gray-200 rounded-full px-3 mx-1'>
                  <FaFacebook className='text-sm' />
                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full px-3 mx-1'>
                  <FaLinkedin className='text-sm' />
                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full px-3 mx-1'>
                  <FaGoogle className='text-sm' />
                </a>
              </div>
              <p className='text-gray-400 my-3'>or use your email account</p>
              <div className='flex flex-col items-center'>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <FaRegEnvelope className='text-gray-400 m-2' />
                  <input type='email' name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' />
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <FaLock className='text-gray-400 m-2' />
                  <input type='password' name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1' />
                </div>
                <div className='flex justify-between w-64 mb-5'>
                  <label className='flex items-center text-xs'><input type='checkbox' name='remember' className='mr-1' />Remember me</label>
                  <a href='#' className='text-xs'>Forgot Password?</a>
                </div>
                <a href='#' className='border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white'>Sign In</a>
              </div>
            </div>
          </div>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>

            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Hello,Friend!</Components.Title>
              <Components.Paragraph>
                Enter your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign Up
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign In
              </Components.GhostButton>
            </Components.RightOverlayPanel>

          </Components.Overlay>
        </Components.OverlayContainer>

      </Components.Container></div>
  )
}

export default Authentification;