import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const Gifinder = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = () => {
    setCategories(['Valorant',...categories]);
  }

  return (
    <>
      {/* title */}
      <h1>Gifinder</h1>

      {/* Input */}
      <AddCategory />
      {/* Gif list */}
      <button onClick={onAddCategory}>Add</button>
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
