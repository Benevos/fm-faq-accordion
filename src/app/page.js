'use client';

import { PiStarFourFill } from "react-icons/pi";

import Card from './components/Card';
import { useState } from 'react';

export default function Home() 
{
  const [cardInfo, setCardInfo] = useState([
    {
      title: "What is Frontend Mentor, and how will it help me?",
      message: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
      title: "Is Frontend Mentor free?",
      message: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    {
      title: "Can I use Frontend Mentor projects in my portfolio?",
      message: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {
      title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      message: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }
  ])

  return (
    <div className="h-full flex flex-col items-center justify-center">
     
      <div className='absolute top-0 h-[260px] w-full bg-[#301534] z-0 back-image'/>
    
      <div id='container' className='w-full h-full flex flex-col items-center max-w-[1440px] z-[1]'>

        <div className="flex flex-col items-center w-full mt-[100px] pb-5"> {/* This wrapper was made beacuse for some reason if I set min-h-full to the top parent div, it adds some margin to all sides of the main tag element */}
          <main className='w-[45%] p-6 rounded-2xl bg-white max-md:w-[88%] main-shadow'>

            <div className='flex items-center text-[37px] max-md:text-[31px]'>
              <PiStarFourFill className='text-[#ae2ae9]'/>
              <h1 className={`ml-5 text-[47px] max-md:text-[41px] select-none font-bold`}>FAQs</h1>
            </div>

            {cardInfo.map((info, index) => <Card key={'card'+index} startsOpen={index === 0 ? true : false } title={info.title} message={info.message}/>)}          
                      
          </main>
        </div>

      </div>
    </div>
  )
}
