import React from 'react'
import Card  from './Card.jsx'
const profiles = [
  {
    id: 1,
    name: "Wade Wilson",
    role: "UI/UX Designer",
    company: "Epic Coders",
    rate: "$55/hr",
    status: "available",
    age: 32,
    image: "https://i.pravatar.cc/150?img=1",
    skills: ["UI", "UX", "Photoshop", "+4"],
    description:
      "Wade is a 32 year old UI/UX designer with an impressive portfolio."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Frontend Developer",
    company: "Code Labs",
    rate: "$40/hr",
    status: "available",
    age: 28,
    image: "https://i.pravatar.cc/150?img=2",
    skills: ["HTML", "CSS", "React", "+3"],
    description:
      "Sarah builds responsive and accessible user interfaces."
  },
  {
    id: 3,
    name: "Alex Brown",
    role: "Full Stack Developer",
    company: "Tech Hub",
    rate: "$65/hr",
    status: "busy",
    age: 35,
    image: "https://i.pravatar.cc/150?img=3",
    skills: ["Node", "React", "MongoDB", "+2"],
    description:
      "Alex specializes in scalable full stack applications."
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Product Designer",
    company: "Design Studio",
    rate: "$50/hr",
    status: "available",
    age: 30,
    image: "https://i.pravatar.cc/150?img=4",
    skills: ["Figma", "UI", "UX", "+5"],
    description:
      "Priya creates user-focused and elegant product designs."
  },
  {
    id: 5,
    name: "Rohit Verma",
    role: "Backend Developer",
    company: "CloudWorks",
    rate: "$60/hr",
    status: "busy",
    age: 34,
    image: "https://i.pravatar.cc/150?img=5",
    skills: ["Node", "Express", "SQL", "+3"],
    description:
      "Rohit builds secure and high-performance backend systems."
  },
  {
    id: 6,
    name: "Emily Carter",
    role: "UI Designer",
    company: "Pixel Craft",
    rate: "$45/hr",
    status: "available",
    age: 27,
    image: "https://i.pravatar.cc/150?img=6",
    skills: ["UI", "Illustrator", "Figma", "+2"],
    description:
      "Emily designs clean and modern user interfaces."
  },
  {
    id: 7,
    name: "Daniel Kim",
    role: "Mobile App Developer",
    company: "AppNest",
    rate: "$58/hr",
    status: "available",
    age: 31,
    image: "https://i.pravatar.cc/150?img=7",
    skills: ["React Native", "Android", "iOS", "+3"],
    description:
      "Daniel builds smooth and scalable mobile applications."
  },
  {
    id: 8,
    name: "Ayesha Khan",
    role: "UX Researcher",
    company: "UserFirst",
    rate: "$48/hr",
    status: "available",
    age: 29,
    image: "https://i.pravatar.cc/150?img=8",
    skills: ["Research", "Wireframes", "UX", "+4"],
    description:
      "Ayesha focuses on data-driven user experience research."
  },
  {
    id: 9,
    name: "Michael Lee",
    role: "DevOps Engineer",
    company: "InfraTech",
    rate: "$70/hr",
    status: "busy",
    age: 37,
    image: "https://i.pravatar.cc/150?img=9",
    skills: ["AWS", "Docker", "CI/CD", "+5"],
    description:
      "Michael ensures reliable and scalable infrastructure."
  },
  {
    id: 10,
    name: "Neha Patel",
    role: "Frontend Engineer",
    company: "WebSpark",
    rate: "$42/hr",
    status: "available",
    age: 26,
    image: "https://i.pravatar.cc/150?img=10",
    skills: ["JavaScript", "React", "CSS", "+2"],
    description:
      "Neha develops fast and interactive web applications."
  }
];

const App = () => {
  return (
    <div className="Parents">
     {
       profiles.map(info => {     
       return <Card name = {info.name} role = {info.role} company = {info.company} rate = {info.rate} status = {info.status} age ={info.age} image = {info.image} skills = {info.skills} description = {info.description}/>
      })
     } 
    </div>
  )
}

export default App
