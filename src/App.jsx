import { useState } from "react";
import Title from "./components/Title";
import menuData from "./data";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

const tempCategories = menuData.map(item => item.category);
const tempSet = new Set(tempCategories);
const tempItems = ['all', ...tempSet];



const App = () => {
  const [menuItems, setMenuItems] = useState(menuData);
  const [ categories, setCategories ] = useState(tempItems);

  const filterMenu = (category) => {
    if( category === "all" ){
      setMenuItems(menuData);
      return;
    }
    const filteredMenuItems = menuData.filter(item => {
     return item.category === category; 
    });
    setMenuItems(filteredMenuItems);
  }

  return (
    <main>
      <section className="menu">
        <Title />
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
