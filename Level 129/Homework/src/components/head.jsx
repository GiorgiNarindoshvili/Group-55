import React from 'react'
import profpic from "../assets/images/avatar-jessica.jpeg"
import Bottom from './bottom'
const Head = ({name1, country, descript}) => {
  return (
    <div className='bg-[hsl(0,0%,12%)] w-[350px] h-[580px] flex flex-col rounded-[10px] gap-[1px] '>
        <div id='img' className='p-[33px] pl-36'>
            <img src={profpic} alt="pic" className='w-[65px] h-[65px] rounded-full' />
        </div>
        <div id='JessicaRandall' className='flex justify-center flex-col items-center gap-6'>
          <div className='flex flex-col gap-1.5'>
            <h1 className='text-[hsl(0,0%,100%)] font-[650] text-[24px]'>{name1}</h1>
            <p className='text-[hsl(75,94%,57%)] font-[650] text-[13px] pl-2'>{country}</p>
          </div>
          
          <p className='text-[hsl(0,0%,100%)] text-[14px]'>{descript}</p>
        </div>
        <div className='mt-[20px] flex flex-col'>
          <Bottom github={"Github"} front={"Frontend Mentor"} linkd={"LinkedIn"} twit={"Twitter"} insta={"Instagram"}/>
        </div>
        
          
        
    </div>
   
    
  )
}

export default Head