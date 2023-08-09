import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const Gifinder = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory))
      return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>Gifinder</h1>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />

        {
          categories.map((category, index) => {
            console.log(category)
            return <GifGrid
              key={index}
              category={category} />
          })
        }

    </>
  )
}
