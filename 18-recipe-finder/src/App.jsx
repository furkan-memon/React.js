import React, { useState } from "react";


const recipesData = [
  {
    id: 1,
    title: "Pasta Alfredo",
    image: "https://www.simplyrecipes.com/thmb/M8XKDSLRjM-zGL90tk-o2Tj6bAI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Copycat-Olive-Garden-Alfredo-LEAD-4-8f75111d3a324a0abb1ee46906f27417.jpg",
    time: "25 min",
    discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eius..."
  },
  {
    id: 2,
    title: "Veg Burger",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvba00P7d5qaDRYgt1_azMenYvpI63hBymUA&sr",
    time: "15 min",
     discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eius...",
  },
  {
    id: 3,
    title: "Chicken Biryani",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc1n4nzKGysMtjBOVl3IUCwvu9As3pauGBdA&s",
    time: "45 min",
     discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eius...",
  },
  {
    id: 4,
    title: "Paneer Butter Masala",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JfZHtD_jlggLqhDlthd7Jg2o4gt7OrWH7w&s",
    time: "30 min",
     discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eius...",
  },
  {
    id: 5,
    title: "Margherita Pizza",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0HbRY0SsECXq3XHqjXUBw3CqK1VfE5PX1w&s",
    time: "20 min",
     discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eius...",
  },
  {
    id: 6,
    title: "Chicken Shawarma",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZDdL93dnNaB9Q_3crGZZDATSiyqamsDT-g&s",
    time: "35 min",
     discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eius...",
  },
  {
    id: 7,
    title: "Masala Dosa",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0Mi5gYVG04bU5vJw4no3MU8RUCiA1FLqkA&s",
    time: "20 min",
     discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eius...",
  },
  {
    id: 8,
    title: "Grilled Sandwich",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFR2pbcdop0N4GuflQRB_uMbJ31CFctwm9Hw&s",
    time: "10 min",
     discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eius...",
  },
  {
    id: 9,
    title: "Chocolate Cake",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFASb_66xiP3Gc4Ucdun-wI5CwzOhSIxWS8g&s",
    time: "50 min",
     discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eius...",
  },
  {
    id: 10,
    title: "Caesar Salad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6emBs4NVbYfIJX66wa5MOq6d-2IOzXj2JA&s",
    time: "15 min",
     discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eius...",
  },
  {
    id: 11,
    title: "Fried Rice",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSeyNBUBooHqQRxDBAOTzk1BYYG-y-PR7oKA&s",
    time: "20 min",
     discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eius...",
  },
  {
    id: 12,
    title: "Tandoori Chicken",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-e6uv9x1dgwpNS9cTGhn7Tn2Tkv-WWfhvrQ&s",
    time: "40 min",
     discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eius...",
  }
];
const App = ()=> {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipesData.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="recipe-app">
      <h1>🍽️ Recipe Finder</h1>

      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="recipe-grid">
        {filteredRecipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <div className="card-body">
              <h3>{recipe.title}</h3>
              <span> {recipe.discription}</span><br/>
              <span>⏱ {recipe.time}</span>
              
              <button>View Recipe</button>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}
export default App
