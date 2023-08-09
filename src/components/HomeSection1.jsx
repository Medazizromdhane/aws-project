import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
    ClipboardListIcon,
    CloudIcon,
    FingerPrintIcon,
    InboxInIcon,
    CreditCardIcon,
    PresentationChartBarIcon,
    DesktopComputerIcon,
    CogIcon,
    ArrowCircleUpIcon,
    ChevronDoubleRightIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/cyber-bg.png'
import {HiCpuChip} from "react-icons/hi2";
import {FaRobot} from "react-icons/fa";

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
                <img className='w-full  ' src={bgImg} alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[700px] bottom-[-11%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>AWS Category Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><ClipboardListIcon className='h-6 text-indigo-600' /> Calculation</p>
                    <p className='flex px-4 py-2 text-slate-500'><InboxInIcon className='h-6 text-indigo-600' /> Storage</p>
                    <p className='flex px-4 py-2 text-slate-500'><CloudIcon className='h-6 text-indigo-600' /> Networking And Content Delivery</p>
                    <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600' /> Database</p>
                    <p className='flex px-4 py-2 text-slate-500'><PresentationChartBarIcon className='h-6 text-indigo-600' /> Analysis</p>
                    <p className='flex px-4 py-2 text-slate-500'><CreditCardIcon className='h-6 text-indigo-600' /> AWS Cost Management</p>
                    <p className='flex px-4 py-2 text-slate-500'><CogIcon className='h-6 text-indigo-600' /> Management And Governance</p>
                    <p className='flex px-4 py-2 text-slate-500'><ArrowCircleUpIcon className='h-6 text-indigo-600' /> Migration And Transfer</p>
                    <p className='flex px-4 py-2 text-slate-500'><FingerPrintIcon className='h-6 text-indigo-600' /> Security, Identity And Compliance</p>
                    <p className='flex px-4 py-2 text-slate-500'><FaRobot className='h-6 text-indigo-600' /> Machine Learning</p>

                </div>
                <ChevronDoubleRightIcon className='h-6 text-indigo-600 right-[20px] bottom-[3%]
                 absolute flex ' ></ChevronDoubleRightIcon>
            </div>
        </div>
    </div>
  )
}

export default HomeSection1