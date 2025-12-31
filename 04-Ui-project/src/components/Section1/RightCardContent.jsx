import React from 'react'
import { ArrowRight } from 'lucide-react'
const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0  h-full w-full   p-8 flex flex-col justify-between rounded-4xl '>
                    <h2 className='bg-white text-xl font-semibold  rounded-full h-12 w-12 flex justify-center items-center'>
                        {props.id+1}
                    </h2>
                    <div>
                        <p className=' text-shadow-2xstext-xl leading-relaxd text-white mb-14'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe architecto labore similique eum rem minima.</p>
                        <div className='flex  justify-between'>
    
                            <button style={{backgroundColor:props.color}} className='bg-blue-600 text-white  font-medium px-8 py-3 rounded-full '> {props.tag}</button>
                            <button className='bg-blue-600 text-white  font-medium px-3 py-2 rounded-full '><ArrowRight /></button>
                        </div>
                    </div>
                </div>
  )
}

export default RightCardContent