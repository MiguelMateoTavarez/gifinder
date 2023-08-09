import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const Gifinder = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) 
      return;
      
    setCategories([newCategory,...categories]);
  }

  return (
    <>
      {/* title */}
      <h1>Gifinder</h1>

      {/* Input */}
      <AddCategory
        // setCategories={setCategories} 
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* Gif list */}
      <ol>
        {
          categories.map(
            (category, index) => <li key={index}>{category}</li>
          )
        }
      </ol>
      {/* Gif item */}
    </>
  )
}
