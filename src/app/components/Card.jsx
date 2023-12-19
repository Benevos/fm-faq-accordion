'use client';

import React, { useState } from 'react'

import { IoIosAddCircle, IoMdRemoveCircle } from "react-icons/io";

function Card({ title, message, startsOpen=false}) 
{
    const [isOpen, setIsOpen] = useState(startsOpen);

    const handleCilck = () =>
    {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <div className='flex items-center justify-between mt-7'>
                <h2 className='text-justify font-bold text-xl w-[90%] max-md:w-[80%] select-none'>{title}</h2>

                <div onClick={handleCilck} style={{color: isOpen ? '#000000' : '#ae2ae9'}}
                    className='text-4xl cursor-pointer hover:brightness-150 transition-all duration-300'>

                    {isOpen ? <IoMdRemoveCircle/> : <IoIosAddCircle/>}
                    
                </div>
            </div>

            <p style={{maxHeight: isOpen ? '200px' : '0'}}
                className='mt-5 text-[#8c6991] text-justify font-semibold overflow-hidden transition-all select-none'>
            
            {message}</p>
        </div>
    )
}

export default Card