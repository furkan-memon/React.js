import React from 'react'
import App from '../App'
import {createContext} from 'react'
export const themedata = createContext()
const Themcontext = (props) => {
  return (
    <div>
        <themedata.Provider value='Bazariya'>
        {props.children}
        </themedata.Provider>
        </div>
  )
}

export default Themcontext