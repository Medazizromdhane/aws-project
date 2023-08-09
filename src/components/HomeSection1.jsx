import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/cyber-bg.png'

const HomeSection1 = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>SAAS ESTIMATION</h1>
                <p className='text-2xl'>Estimate your AWS services cost.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>AWS Category Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600' /> Calculation</p>
                    <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600' /> Storage</p>
                    <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600' /> Networking And Content Delivery</p>
                    <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' /> Database</p>
                    <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' /> Analysis</p>
                    <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' /> AWS Cost Management</p>
                    <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' /> Management And Governance</p>
                    <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' /> Migration And Transfer</p>
                    <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600' /> Security, Identity And Compliance</p>
                    <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600' /> Machine Learning</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection1