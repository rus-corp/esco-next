import style from './catalog.module.css'
import { CategoryItem } from '@/components/ui';



const categories = [
  {
    id: 1,
    name: 'Межкомнатные двери',
    photo: './categ_img/doors.jpg'
  },
  {
    id: 2,
    name: 'Входные двери',
    photo: './categ_img/open_door.jpg'
  },
  {
    id: 3,
    name: 'Замки и ручки',
    photo: './categ_img/ruchki.jpg'
  },
  {
    id: 4,
    name: 'Противопожарные двери',
    photo: './categ_img/fire_door.jpg'
  },
  {
    id: 5,
    name: 'Скрытые двери',
    photo: './categ_img/invis_door.jpeg'
  },
]



export default function Catalog() {
  
  return(
    <div className={`container ${style.catalog_container}`}> 
      <h1 className="section-title">Каталог</h1>
      <div className={style.box_list}>
        <div className={style.box_row}>
          {categories.map((obj) => (
            <CategoryItem 
              key={obj.id}
              categoryName={obj.name}
              imgUrl={obj.photo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}




