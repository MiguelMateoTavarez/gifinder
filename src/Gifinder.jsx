import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const Gifinder = () => {

  const [categories, setCategories] = useState(['Overwatch']);

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
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category} />
        ))
      }

    </>
  )
}
