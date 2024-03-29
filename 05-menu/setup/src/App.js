import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['All', ...new Set(items.map((item)=>{
  return item.category;
}))];
console.log(allCategories);


function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  

  const filterItems = (category) => {
    if (category === "All") {
       setMenu(items);
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenu(newItems);
    }
  }

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>Our Menu </h2>
        <div className="underline">
        </div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menu} />
    </section>  
  </main>;
}

export default App;
