import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSLice'

const Tabs = () => {
  const tabs= ['photos','videos']
 const dispatch =  useDispatch()
 const selector = useSelector((state)=>state.search.activeTab)
    return (
    <div className='flex gap-2 p-10'>
     {
        tabs.map((elem,idx)=>{
            return <button key ={idx} onClick={()=>{
                dispatch(setActiveTabs(elem))
            }}  className={`${(selector ==elem ?'cursor-pointer active:scale-95 bg-blue-600 px-5 py-2 uppercase ': 'cursor-pointer active:scale-95 bg-gray-600 px-5 py-2 uppercase')
            }`}>{elem}</button>
        })
     }
    </div>
  )
}

export default Tabs