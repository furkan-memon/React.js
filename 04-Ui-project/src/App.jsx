import React from 'react'
import Section1 from './components/Section1/Section1.jsx'

const App = () => {
  const user = [
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      color:'green',
      intro: '',
      tag: 'Satisfied'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      color:'blue',
      tag: 'Underserved'
    }, {
      image: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro: '',
      color:'pink',
      tag: 'Underban'
    },
    {
      image: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro: '',
      color: 'brown',
      tag: 'Underban'
    }
  ]
  return (
    <div>
      <Section1 user={user}/>
    </div>
  )
}

export default App