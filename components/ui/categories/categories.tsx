'use client'
import React, { useState } from 'react'
import style from './categories.module.css'



const categories = ['Межкомнатные двери', 'Входные двери', 'Замки и ручки', 'Противопожарные лестницы']


type CategoryObj = {
  id: number
  name: string
}


export default function Categories() {
  const [activeCategory, setActiveCategory] = useState('')

  function handleActiveCategory(event: React.MouseEvent<HTMLLIElement>) {
    const target = event.target as HTMLLIElement
    setActiveCategory(target.innerText)
  }

  return(
    <section className={style.catalog}>
      <aside className={style.categories}>
        <h1 className="section-title">Витрина товаров</h1>
        <div className={style.categories}>
          <ul>
            {categories.map((categ, index) => (
              <li key={index}
              onClick={handleActiveCategory}
              className={`${style['category_item']} ${activeCategory === categ ? style['category_active'] : ''}`}>
              {categ}</li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}

// className={`${styles['category-item']} ${
//   activeCategory === category.name ? styles['category_active'] : ''
// }`}
// >