import React from 'react'

const Navbar = (props) => {
    function changeTheme (){
        if(props.Theme == 'Light'){
            props.setTheme('Drke')
        }
        else{
            props.setTheme('Light')

        }
    }
  return (
    <div>
        <button onClick={changeTheme} className="active:scale-98">ChangeTheme</button>
    </div>
  )
}

export default Navbar