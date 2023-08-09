import React from 'react';
import about from '../assets/About.png';
const HomeSection4 = () => {
    return (
        <div name='platforms' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto px-2 flex flex-col-reverse lg:flex-row'>

                <div className='w-full lg:w-1/2 lg:pr-8'>
                    <h2 className='text-5xl font-bold text-center lg:text-left'><span className='text-green-500'>SAAS </span>ESTIMATION</h2>
                    <p className='text-2xl py-8 text-gray-500 text-center lg:text-left'>
                        An innovative web platform that simplifies the process of calculating and estimating the costs of AWS services used.
                    <br/>
                        By providing a user-friendly and intuitive interface, users can easily input the details of their cloud configurations, such as instances, storage, bandwidth, and more.                    </p>



                </div>

                <div className='w-full lg:w-1/2 lg:pl-8'>
                    <img src={about} className='h-auto w-full' alt={"about"} />
                </div>
            </div>
        </div>

    );
};

export default HomeSection4;