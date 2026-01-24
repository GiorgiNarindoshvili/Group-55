import React from 'react'

const Bottom = ({github, front, linkd, twit, insta}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 '>
        <div className='bg-[#333333] h-11 w-[270px] rounded-[10px] flex justify-center items-center text-[white] font-semibold text-[15px]'>
            <p>{github}</p>
        </div>
        <div className='bg-[#333333] h-11 w-[270px] rounded-[10px] flex justify-center items-center text-[white] font-semibold text-[15px]'>
            <p>{front}</p>
        </div>
        <div className='bg-[#333333] h-11 w-[270px] rounded-[10px] flex justify-center items-center text-[white] font-semibold text-[15px]'>
            <p>{linkd}</p>
        </div>
        <div className='bg-[#333333] h-11 w-[270px] rounded-[10px] flex justify-center items-center text-[white] font-semibold text-[15px]'>
            <p>{twit}</p>
        </div>
        <div className='bg-[#333333] h-11 w-[270px] rounded-[10px] flex justify-center items-center text-[white] font-semibold text-[15px]'>
            <p>{insta}</p>
        </div>
    </div>
  )
}

export default Bottom